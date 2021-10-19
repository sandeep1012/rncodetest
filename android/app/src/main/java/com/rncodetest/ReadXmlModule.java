package com.rncodetest;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class ReadXmlModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext readContext;

    ReadXmlModule(ReactApplicationContext context) {
        super(context);
        readContext = context;
    }

    @Override
    public String getName() {
        return "ReadXmlModule";
    }

    @ReactMethod
    public void getDeviceName(Callback cb) {
        try {
            String service_key = readContext.getResources().getString(R.string.service_key);
            cb.invoke(null, service_key);
        } catch (Exception e) {
            cb.invoke(e.toString(), null);
        }
    }

    @ReactMethod
    public void ShowMessage(String message, int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}