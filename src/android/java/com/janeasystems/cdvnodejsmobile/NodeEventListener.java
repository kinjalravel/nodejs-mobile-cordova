package com.janeasystems.cdvnodejsmobile;

import org.json.JSONArray;
import org.json.JSONObject;

public interface NodeEventListener {
    void onEvent(String event, JSONArray args);
    void preAttachResponse(JSONObject ums, JSONObject s);
}
