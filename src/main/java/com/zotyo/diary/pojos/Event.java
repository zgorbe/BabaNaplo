package com.zotyo.diary.pojos;

import java.util.Date;

import javax.xml.datatype.Duration;

public class Event {
	private String description;
	private Date startTime;
	private Duration duration;
	
	public Event() {}
	public Event(String description, Date startTime, Duration duration) {
		setDescription(description);
		setStartTime(startTime);
		setDuration(duration);
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Duration getDuration() {
		return duration;
	}
	public void setDuration(Duration duration) {
		this.duration = duration;
	}
	
}
