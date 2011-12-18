package com.zotyo.diary.web;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;

import org.apache.log4j.Logger;

import com.zotyo.diary.client.Day;
import com.zotyo.diary.client.Event;

public class DiaryHelper {
	
	private static Logger logger = Logger.getLogger(DiaryHelper.class); 
	
	private SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy");
	private SimpleDateFormat formatHU = new SimpleDateFormat("yyyy.MM.dd");
	private SimpleDateFormat formatHM = new SimpleDateFormat("yyyy.MM.dd HH:mm");
	private SimpleDateFormat formatStartTime = new SimpleDateFormat("MM/dd/yyyy hh:mm");
	
	public GregorianCalendar getDayCal(String theDay) {
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
		Date startDateDate = null;
		try {
			startDateDate = formatStartTime.parse(startDate);
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

 	public String getDurationInHHMM(Event e) {
		long duration = e.getDuration();
		int hour = (int)(duration / (1000 * 60 * 60));
		int minute = (int)((duration - (hour * 1000 * 60 * 60)) / (1000 * 60));
		String hh = (hour < 10) ? "0" + hour : "" + hour;
		String mm = (minute < 10) ? "0" + minute : "" + minute;
		return hh + ":" + mm;
 	}
 	
 	public String formatDate(Day d) {
		return formatHU.format(d.getTheDay().toGregorianCalendar().getTime());
	}
 	
 	public String formatStartTime(Event event) {
		return formatHM.format(event.getStartTime().toGregorianCalendar().getTime());
	}
 	
	public String md5(String md5) {
	   try {
	        java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
	        byte[] array = md.digest(md5.getBytes());
	        StringBuffer sb = new StringBuffer();
	        for (int i = 0; i < array.length; ++i) {
	          sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
	       }
	        return sb.toString();
	    } catch (java.security.NoSuchAlgorithmException e) {
	    }
	    return null;
	}
}
