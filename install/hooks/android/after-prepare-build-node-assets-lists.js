var fs = require('fs');
var path = require('path');

var fileList = [];
var dirList = [];

function enumFolder(folderPath) {
  var files = fs.readdirSync(folderPath);
  for (var i in files) {
    var name = files[i];
    var path = folderPath + '/' + files[i];
    if (fs.statSync(path).isDirectory()) {
      if (name.startsWith('.') === false) {
        dirList.push(path);
        enumFolder(path);
      }
    } else {
      if (name.startsWith('.') === false &&
          name.endsWith('.gz') === false &&
          name.endsWith('~') === false) {
        fileList.push(path);
      }
    }
  }
}
function enumFolder2(folderPath, project) {
  project = (undefined === project) ? false : true;
  var files = fs.readdirSync(folderPath);
  for (var i in files) {
    var name = files[i];
    var path = folderPath + '/' + files[i];
    if (fs.statSync(path).isDirectory()) {
      if (name.startsWith('.') === false && /nodejs\-project/.test(path) === project) {
        dirList.push(path);
        enumFolder2(path, project);
      }
    } else {
      if (name.startsWith('.') === false &&
          name.endsWith('.gz') === false &&
          name.endsWith('~') === false) {
        fileList.push(path);
      }
    }
  }
}

function copyCordovaWww(context) {
  var cordovaLib = context.requireCordovaModule('cordova-lib');
  var platformAPI = cordovaLib.cordova_platforms.getPlatformApi('android');
  var androidAssetsPath = path.join(platformAPI.locations.www,'..');

  if (fs.existsSync(androidAssetsPath + '/www/nodejs-project/cordova-www')) {
    enumFolder(androidAssetsPath + '/www/nodejs-project/cordova-www', true);
  
    for (let file of fileList) {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
    }
    dirList = dirList.reverse();
    for (let dir of dirList) {
        if (fs.existsSync(dir)) {
            fs.rmdirSync(dir);
        }
    }
  } else {
    fs.mkdirSync(androidAssetsPath + '/www/nodejs-project/cordova-www');
  }

  dirList = [];
  fileList = [];
  enumFolder2('www');
  let dirList2 = [];  
  let fileList2 = [];  
  for (let dir of dirList) {
    fs.mkdirSync(androidAssetsPath + '/www/nodejs-project/cordova-' + dir);
    dirList2.push('www/nodejs-project/cordova-' + dir);
  }
  for (let file of fileList) {
    fs.copyFileSync(file, androidAssetsPath + '/www/nodejs-project/cordova-' + file);
    fileList2.push('www/nodejs-project/cordova-' + file);
  }
  fs.copyFileSync(androidAssetsPath + '/www/cordova.js', androidAssetsPath + '/www/nodejs-project/cordova-www/cordova.js');
  fileList2.push('www/nodejs-project/cordova-www/cordova.js');
  dirList = dirList2;
  fileList = fileList2;
}
function createFileAndFolderLists(context, callback) {
  try {
    var cordovaLib = context.requireCordovaModule('cordova-lib');
    var platformAPI = cordovaLib.cordova_platforms.getPlatformApi('android');
    var nodeJsProjectRoot = 'www/nodejs-project';
    // The Android application's assets path will be the parent of the application's www folder.
    var androidAssetsPath = path.join(platformAPI.locations.www,'..');
    var fileListPath = path.join(androidAssetsPath,'file.list');
    var dirListPath = path.join(androidAssetsPath,'dir.list');

    copyCordovaWww(context);

    enumFolder(nodeJsProjectRoot);
    fs.writeFileSync(fileListPath, fileList.join('\n'));
    fs.writeFileSync(dirListPath, dirList.join('\n'));
  } catch (err) {
    console.log(err);
    callback(err);
    return;
  }
  callback(null);
}

module.exports = function(context) {
  if (context.opts.platforms.indexOf('android') < 0) {
    return;
  }

  return new Promise((resolve, reject) => {
    createFileAndFolderLists(context, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
