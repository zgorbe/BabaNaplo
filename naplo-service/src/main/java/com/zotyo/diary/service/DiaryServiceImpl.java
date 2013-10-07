package com.zotyo.diary.service;

import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.pojos.UniqueWord;

@Service
public class DiaryServiceImpl implements DiaryService {
	
	private static Logger logger = Logger.getLogger(DiaryServiceImpl.class);
	
	private static final String DIARY_CACHE = "diaryCache";
	
	@Autowired
	private DiaryDAO diaryDAO;

	@Cacheable(value = DIARY_CACHE, key="'events:' + #theDay.getTime()")
	public List<Event> getEventsForADay(Date theDay) {
		return diaryDAO.getEventsForADay(theDay);
	}
	
	@Cacheable(value = DIARY_CACHE, key="'days:' + #year + '/' + #month")
	public List<Day> getDaysForAMonth(int year, int month) {
		return diaryDAO.getDaysForAMonth(year, month);
	}

	@Cacheable(value = DIARY_CACHE, key="'days'")
	public List<Day> getAllDaysInDiary() {
		return diaryDAO.getAllDaysInDiary();
	}
	
	@Cacheable(value = DIARY_CACHE, key="'events'")
	public List<Event> getAllEvents() {
		return diaryDAO.getAllEvents();
	}

	@Cacheable(value = DIARY_CACHE, key="'days:' + #theDay.getTime()")
	public Day getDay(Date theDay) {
		return diaryDAO.getDay(theDay);
	}

	public List<Event> searchEvents(String searchTerm) {
		return diaryDAO.searchEvents(searchTerm);
	}

	public List<String> searchTerms(String term) {
		return diaryDAO.searchTerms(term);
	}
	
	@Cacheable(value = DIARY_CACHE, key="'days:count'")
	public long getDayCount() {
		return diaryDAO.getDayCount();
	}

	@Cacheable(value = DIARY_CACHE, key="'events:count'")
	public long getEventCount() {
		return diaryDAO.getEventCount();
	}

	@CacheEvict(value = DIARY_CACHE, allEntries = true)
	public int addDay(Day day) {
		return diaryDAO.addDay(day);
	}

	@CacheEvict(value = DIARY_CACHE, allEntries = true)
	public int addEvent(Date theDay, Event event) {
		return diaryDAO.addEvent(theDay, event);
	}
	
	@CacheEvict(value = DIARY_CACHE, allEntries = true)
	public int addWord(UniqueWord word) {
		return diaryDAO.addWord(word);
	}

	@Cacheable(value = DIARY_CACHE, key="'words:' + #count")
	public List<UniqueWord> getLatestWords(int count) {
		return diaryDAO.getLatestWords(count);
	}
	
	@Cacheable(value = DIARY_CACHE, key="'words'")
	public List<UniqueWord> getAllWords() {
		return diaryDAO.getAllWords();
	}

	@Cacheable(value = DIARY_CACHE, key="'words:count'")
	public long getWordCount() {
		return diaryDAO.getWordCount();
	}
	
	public void setDiaryDAO(DiaryDAO diaryDAO) {
		this.diaryDAO = diaryDAO;
	}
}
