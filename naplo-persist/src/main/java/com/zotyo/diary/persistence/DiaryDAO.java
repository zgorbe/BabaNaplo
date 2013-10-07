package com.zotyo.diary.persistence;

import java.util.Date;
import java.util.List;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.pojos.UniqueWord;

public interface DiaryDAO {
	List<Event> getEventsForADay(Date theDay);
	List<Day> getDaysForAMonth(int year, int month);
	List<Day> getAllDaysInDiary();
	List<Event> getAllEvents();
	Day getDay(Date theDay);
	List<Event> searchEvents(String searchTerm);
	List<String> searchTerms(String term);
	
	int addDay(Day day);
	int addEvent(Date theDay, Event event);
	long getDayCount();	
	long getEventCount();
	
	int addWord(UniqueWord word);
	List<UniqueWord> getLatestWords(int count);
	List<UniqueWord> getAllWords();
	long getWordCount();
}
