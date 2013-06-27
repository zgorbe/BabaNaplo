package com.zotyo.diary.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.code.ssm.api.ParameterValueKeyProvider;
import com.google.code.ssm.api.ReadThroughSingleCache;
import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.pojos.UniqueWord;

@Service
public class DiaryServiceImpl implements DiaryService {
	
	private DiaryDAO diaryDAO;

	@Autowired
	public void setDiaryDAO(DiaryDAO diaryDAO) {
		this.diaryDAO = diaryDAO;
	}
	
	public List<Event> getEventsForADay(Date theDay) {
		return diaryDAO.getEventsForADay(theDay);
	}

	@ReadThroughSingleCache(namespace = "diarycache", expiration = 86400)
	public List<Day> getDaysForAMonth(@ParameterValueKeyProvider(order = 1) int year, 
				@ParameterValueKeyProvider(order = 2) int month) {
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
}
