package com.zotyo.diary.exception;

public class DayNotFoundException extends Exception {

	public DayNotFoundException(String message) {
        super(message);
    }

    public DayNotFoundException(String message, Throwable throwable) {
        super(message, throwable);
    }

}