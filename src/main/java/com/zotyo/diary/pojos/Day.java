package com.zotyo.diary.pojos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Day implements Serializable {
	private Integer id;
	private Date theDay;
	private List<Event> eventsOfTheDay;
	private String descriptionOfTheDay;
	
	public Day() { eventsOfTheDay = new ArrayList<Event>(); }
	public Day(Date theDay, Event initialEvent, String descriptionOfTheDay) {
		this();
		setTheDay(theDay);
		addEvent(initialEvent);
		setDescriptionOfTheDay(descriptionOfTheDay);
	}
	
	public Integer getId() {
	        return id;
	}
	public void setId(Integer id) {
	        this.id = id;
	}
	public void addEvent(Event event) {
		eventsOfTheDay.add(event);
	}
	
	public Date getTheDay() {
		return theDay;
	}
	public void setTheDay(Date theDay) {
		this.theDay = theDay;
	}
	public List<Event> getEventsOfTheDay() {
		return eventsOfTheDay;
	}
	public void setEventsOfTheDay(List<Event> eventsOfTheDay) {
		this.eventsOfTheDay = eventsOfTheDay;
	}
	public String getDescriptionOfTheDay() {
		return descriptionOfTheDay;
	}
	public void setDescriptionOfTheDay(String descriptionOfTheDay) {
		this.descriptionOfTheDay = descriptionOfTheDay;
	}
	
}
