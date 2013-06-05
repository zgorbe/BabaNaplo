package com.zotyo.diary.jsonws;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.util.DateUtil;

@Controller
@RequestMapping("/events")
public class EventJSONController extends BaseJSONController {
	
	@RequestMapping(value = "/form", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded")
	@ResponseBody
	public Event addEventForm(@RequestParam String keyword,
			@RequestParam String theDay,
			@RequestParam String startDate, @RequestParam String duration,
			@RequestParam String initialEvent) {
		if (diaryHelper.md5(keyword).equals(password)) {
			Event event = new Event();
			event.setDescription(initialEvent);
			event.setDuration(diaryHelper.getDuration(duration));
			GregorianCalendar startDateCal = diaryHelper
					.getStartDateCal(startDate);
			event.setStartTime(startDateCal.getTime());
			
			event.setId(diaryDAO.addEvent(DateUtil.resetHMS(diaryHelper.getDayCal(theDay).getTime()), event));

			return event;
		}
		return new Event();
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Event> getAllEvents() {
		return diaryDAO.getAllEvents();
	}
	
	@RequestMapping(value = "/latests/{count}", method = RequestMethod.GET)
	@ResponseBody
	public List<Event> getLatests(@PathVariable int count) {
		List<Event> allEvents = diaryDAO.getAllEvents();
		count = (count < 3) ? 3 : count;
		List<Event> events = new ArrayList<Event>(count);
		for (int i=0; i < count; i++) {
			events.add(allEvents.get(i));
		}
		return events;
	}
	
	@RequestMapping(value = "/{year}/{month}/{day}", method = RequestMethod.POST)
	public void addEvent(@RequestBody Event event, @PathVariable int year, @PathVariable int month, @PathVariable int day) {
		Calendar c = GregorianCalendar.getInstance();
		c.set(year, month, day);
		diaryDAO.addEvent(DateUtil.resetHMS(c.getTime()), event);
	}
	
	@RequestMapping(value = "/{year}/{month}/{day}", method = RequestMethod.GET)
	@ResponseBody
	public List<Event> getEventsForADay(@PathVariable int year, @PathVariable int month, @PathVariable int day) {
		Calendar c = GregorianCalendar.getInstance();
		c.set(year, month, day);
		return diaryDAO.getEventsForADay(DateUtil.resetHMS(c.getTime()));
	}
	
	@RequestMapping(value = "/search/{searchTerm}", method = RequestMethod.GET)
	@ResponseBody
	public List<Event> searchEvents(@PathVariable String searchTerm) throws UnsupportedEncodingException {
		searchTerm = URLDecoder.decode(searchTerm, "UTF8");
		return diaryDAO.searchEvents(searchTerm);
	}

	@RequestMapping(value = "/search/terms/{term}", method = RequestMethod.GET)
	@ResponseBody
	public List<String> searchTerms(@PathVariable String term) throws UnsupportedEncodingException {
		term = URLDecoder.decode(term, "UTF8");
		if (term.length() < 2) {
			return new ArrayList<String>();
		}
		return diaryDAO.searchTerms(term.toLowerCase());
	}
	
	@RequestMapping(value = "/count", method = RequestMethod.GET)
	@ResponseBody
	public long getEventCount() {
		return diaryDAO.getEventCount();
	}
}
