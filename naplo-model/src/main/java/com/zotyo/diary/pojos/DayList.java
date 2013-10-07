package com.zotyo.diary.pojos;

import java.util.Set;

public class DayList {
	private int year;
	private int month;
	private Set<Integer> dates;
	
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public Set<Integer> getDates() {
		return dates;
	}
	public void setDates(Set<Integer> dates) {
		this.dates = dates;
	}
}
