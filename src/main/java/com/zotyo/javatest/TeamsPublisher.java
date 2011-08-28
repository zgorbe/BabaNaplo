package com.zotyo.javatest;

import javax.xml.ws.Endpoint;

public class TeamsPublisher {

    public static void main(String[] args) {
        int port = 8080;
        String url = "http://localhost:" + port +"/teams";
        Endpoint.publish(url, new Teams());
    }
}
