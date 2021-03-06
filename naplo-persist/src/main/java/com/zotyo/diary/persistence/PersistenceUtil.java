package com.zotyo.diary.persistence;

import java.util.ArrayList;
import java.util.List;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.DayEntity;
import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.pojos.EventEntity;
import com.zotyo.diary.pojos.UniqueWord;
import com.zotyo.diary.pojos.UniqueWordEntity;

public class PersistenceUtil {

	public static Event getEvent(EventEntity ee) {
		return new Event(ee.getId(), ee.getDescription(), ee.getStartTime(), ee.getDuration());
	}

	public static Day getDay(DayEntity de) {
		Day rv = new Day();
		rv.setId(de.getId());
		rv.setTheDay(de.getTheDay());
		rv.setDescriptionOfTheDay(de.getDescriptionOfTheDay());
		List<Event> events = new ArrayList<Event>();
		for (EventEntity ee : de.getEventsOfTheDay()) {
			events.add(getEvent(ee));
		}
		rv.setEventsOfTheDay(events);
		return rv;
	}

	public static EventEntity getEventEntity(Event e) {
		return new EventEntity(e.getDescription(), e.getStartTime(), e.getDuration());
	}
	
	public static DayEntity getDayEntity(Day day) {
		DayEntity rv = new DayEntity();
		rv.setTheDay(day.getTheDay());
		rv.setDescriptionOfTheDay(day.getDescriptionOfTheDay());
		List<EventEntity> events = new ArrayList<EventEntity>();
		for (Event e : day.getEventsOfTheDay()) {
			EventEntity ee = getEventEntity(e);
			ee.setTheDay(rv);
			events.add(ee);
		}
		rv.setEventsOfTheDay(events);
		return rv;
	}

	public static UniqueWord getWord(UniqueWordEntity we) {
		return new UniqueWord(we.getId(), we.getKid(), we.getWord(), we.getOriginalWord(), we.getDescription());
	}
	
	public static UniqueWordEntity getWordEntity(UniqueWord w) {
		return new UniqueWordEntity(w.getKid(), w.getWord(), w.getOriginalWord(), w.getDescription());
	}
}
