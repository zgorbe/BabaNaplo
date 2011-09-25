package com.zotyo.diary.web;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;

import org.apache.log4j.Logger;

public class DiaryHelper {
	
	private static Logger logger = Logger.getLogger(DiaryHelper.class); 
	
	public GregorianCalendar getDayCal(String theDay) {
		SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy");
		Date theDayDate = null;
		try {
			theDayDate = format.parse(theDay);
		} catch (ParseException e) {
			logger.error(e);
			return new GregorianCalendar();
		}
		if (theDayDate == null) {
			return new GregorianCalendar();
		}
		
		GregorianCalendar theDayCal = new GregorianCalendar();
		theDayCal.setTime(theDayDate);
		
		return theDayCal;
	}
	
	public GregorianCalendar getStartDateCal(String startDate) {
		SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm");
		Date startDateDate = null;
		try {
			startDateDate = format.parse(startDate);
		} catch (ParseException e) {
			logger.error(e);
			return new GregorianCalendar();
		}
		if (startDateDate == null) {
			return new GregorianCalendar();
		}
		
		GregorianCalendar startDateCal = new GregorianCalendar();
		startDateCal.setTime(startDateDate);
		
		return startDateCal;
	}

	public long getDuration(String duration) {
		if (duration == null || duration.length() < 1) {
			return 0;
		}
		String hh = duration.split(":")[0];
		String mm = duration.split(":")[1];
		int hour = Integer.parseInt(hh);
		int minute = Integer.parseInt(mm);
		return (1000 * 60 * minute) + (1000 * 60 * 60 * hour);
	}
	
	public String getDurationInHHMM(long duration) {
		int hour = (int)(duration / (1000 * 60 * 60));
		int minute = (int)((duration - (hour * 1000 * 60 * 60)) / (1000 * 60));
		String hh = (hour < 10) ? "0" + hour : "" + hour;
		String mm = (minute < 10) ? "0" + minute : "" + minute;
		return hh + ":" + mm;
	}
}
