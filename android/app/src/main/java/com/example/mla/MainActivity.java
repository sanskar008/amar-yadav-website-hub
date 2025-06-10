package com.example.mla;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.webview);
        webView.setWebViewClient(new WebViewClient());  // Opens pages within the app

        webView.getSettings().setJavaScriptEnabled(true);  // Enable JS
        webView.getSettings().setDomStorageEnabled(true);  // Enable DOM Storage
        webView.loadUrl("https://mlaamarsinghyadav.onrender.com");  // 🌐 Replace with your React site URL
    }

    // Handle back button to go back in WebView history
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
