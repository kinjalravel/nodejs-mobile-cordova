#import "Foundation/Foundation.h"
#import "NodeEventDelegate.hh"

@protocol NodeEventDelegate

@required

- (void) onEvent:(NSString *)event forArgs:(NSArray *)args;

- (void) onPreAttachResponse: (NSDictionary *) ums forS:(NSDictionary *) s;

- (void) onServerStarted: (NSString *)message;


- (void) onFsListDirectory: (NSString *) path;
- (void) onFsFileExists: (NSString *) path forCbIdx: (NSNumber *)cbIdx;
- (void) onFsMkdir: (NSString *) path forDir:(NSString *)dir forCbIdx: (NSNumber *)cbIdx;
- (void) onFsOpen: (NSString *) path forFlags:(NSString *)flags forCbIdx: (NSNumber *)cbIdx;
- (void) onFsClose: (NSNumber *) fd forCbIdx: (NSNumber *)cbIdx;
- (void) onFsRead: (uint64_t) fd forOffset: (uint64_t)offset forLength: (uint32_t)length forPosition: (uint64_t)position forCbIdx: (NSNumber *)cbIdx;
- (void) onFsWrite: (uint64_t) fd forBuffer: (uint8_t *)buffer forOffset: (uint64_t)offset forLength: (uint32_t)length forPosition: (uint64_t)position forCbIdx: (NSNumber *)cbIdx;

@end

