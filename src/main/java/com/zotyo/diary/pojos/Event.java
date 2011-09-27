package com.zotyo.diary.pojos;

import java.util.Date;

public class Event {
	private String description;
	private Date startTime;
	private long duration;
	
	public Event() {}
	public Event(String description, Date startTime, long duration) {
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
	public long getDuration() {
		return duration;
	}
	public void setDuration(long duration) {
		this.duration = duration;
	}
}
