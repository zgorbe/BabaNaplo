package com.zotyo.diary.service;

import java.util.Date;
import java.util.List;

import net.spy.memcached.MemcachedClient;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.pojos.UniqueWord;

@Service
public class DiaryServiceImpl implements DiaryService {
	
	private static Logger logger = Logger.getLogger(DiaryServiceImpl.class);
	
	private static final String DIARY_CACHE = "diarycache";
	
	@Autowired
	private DiaryDAO diaryDAO;

	//@Autowired
	private MemcachedClient memcachedClient;
	
	public List<Event> getEventsForADay(Date theDay) {
		return diaryDAO.getEventsForADay(theDay);
	}

	public List<Day> getDaysForAMonth(int year, int month) {
		return diaryDAO.getDaysForAMonth(year, month);
	}

	public List<Day> getAllDaysInDiary() {
		return diaryDAO.getAllDaysInDiary();
	}

	public List<Event> getAllEvents() {
		return diaryDAO.getAllEvents();
	}

	public Day getDay(Date theDay) {
		return diaryDAO.getDay(theDay);
	}

	public List<Event> searchEvents(String searchTerm) {
		return diaryDAO.searchEvents(searchTerm);
	}

	public List<String> searchTerms(String term) {
		return diaryDAO.searchTerms(term);
	}
	
	public int addDay(Day day) {
		return diaryDAO.addDay(day);
	}

	public int addEvent(Date theDay, Event event) {
		return diaryDAO.addEvent(theDay, event);
	}

	public long getDayCount() {
		return diaryDAO.getDayCount();
	}

	public long getEventCount() {
		return diaryDAO.getEventCount();
	}

	public int addWord(UniqueWord word) {
		return diaryDAO.addWord(word);
	}

	public List<UniqueWord> getLatestWords(int count) {
		return diaryDAO.getLatestWords(count);
	}

	public List<UniqueWord> getAllWords() {
		return diaryDAO.getAllWords();
	}

	public long getWordCount() {
		return diaryDAO.getWordCount();
	}
	
	public void setDiaryDAO(DiaryDAO diaryDAO) {
		this.diaryDAO = diaryDAO;
	}
	
	public void setMemcachedClient(MemcachedClient memcachedClient) {
		this.memcachedClient = memcachedClient;
	}

}
