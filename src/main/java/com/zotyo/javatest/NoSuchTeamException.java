package com.zotyo.javatest;

public class NoSuchTeamException extends Exception {

    private String details;
    public NoSuchTeamException(String reason, String details) {
        super(reason);
        this.details = details;
    }

    public String getFaultInfo() {
        return details;
    }
}
