package com.zotyo.diary.web;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.zotyo.diary.client.Diary;
import com.zotyo.diary.client.Day;

public class DiaryCache {
	
	private static Logger logger = Logger.getLogger(DiaryCache.class);
	
	private static DiaryCache cache = null;
	private Map<String, List<Integer>> eventDays;
	
	private DiaryCache() {
		eventDays = Collections.synchronizedMap(new HashMap<String, List<Integer>>());
	}
	
	public static DiaryCache getInstance() {
		if (cache == null) {
			cache = new DiaryCache();
		}
		return cache;
	}

	public List<Integer> getEventDays(String key, Diary diary) {
		if (eventDays.containsKey(key)) {
			logger.info("Value for " + key + " is returned from cache");
			return eventDays.get(key);
		}
		int year = Integer.parseInt(key.split("-")[0]);
		int month = Integer.parseInt(key.split("-")[1]);
		
		List<Day> days = diary.getDaysForAMonth(year, month);
		List<Integer> dayNumbers = new ArrayList<Integer>();
		for (Day d : days) {
			Calendar c = d.getTheDay().toGregorianCalendar();
			dayNumbers.add(c.get(Calendar.DAY_OF_MONTH));
		}
		
		logger.info("Value: " + dayNumbers.toString() + " for " + key + " is being cached");
		eventDays.put(key, dayNumbers);
		return dayNumbers;
	}
	
	public void purgeKey(String key) {
		eventDays.remove(key);
		logger.info("Value for " + key + " is removed from cache");
	}
}
