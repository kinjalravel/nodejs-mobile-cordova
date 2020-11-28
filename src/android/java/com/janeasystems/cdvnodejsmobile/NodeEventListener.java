package com.janeasystems.cdvnodejsmobile;

import org.json.JSONArray;
import org.json.JSONObject;

public interface NodeEventListener {
    void onEvent(String event, JSONArray args);
    void onPreAttachResponse(JSONObject ums, JSONObject s);
    void onServerStarted(String message);
    void onChrombookInit();
}
