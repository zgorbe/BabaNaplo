package com.zotyo.diary.jsonws;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.DayList;
import com.zotyo.diary.util.DateUtil;
import com.zotyo.diary.pojos.Event;

@Controller
@RequestMapping("/days")
public class DayJSONController extends BaseJSONController {
	private static Logger logger = Logger.getLogger(DayJSONController.class);

	@RequestMapping(value = "/form", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded")
	@ResponseBody
	public Day addDayForm(@RequestParam String keyword,
			@RequestParam String theDay,
			@RequestParam String descriptionOfTheDay,
			@RequestParam String startDate, @RequestParam String duration,
			@RequestParam String initialEvent) {
		if (diaryHelper.md5(keyword).equals(password)) {
			Day day = new Day();
			GregorianCalendar theDayCal = diaryHelper.getDayCal(theDay);
			day.setTheDay(DateUtil.resetHMS(theDayCal.getTime()));
			day.setDescriptionOfTheDay(descriptionOfTheDay);

			Event event = new Event();
			event.setDescription(initialEvent);
			event.setDuration(diaryHelper.getDuration(duration));
			GregorianCalendar startDateCal = diaryHelper
					.getStartDateCal(startDate);
			event.setStartTime(startDateCal.getTime());
			day.getEventsOfTheDay().add(event);
			day.setId(diaryService.addDay(day));

			return day;
		}
		return new Day();
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Day> getDays() {
		return diaryService.getAllDaysInDiary();
	}

	@RequestMapping(value = "/{year}/{month}", method = RequestMethod.GET)
	@ResponseBody
	public List<Day> getDaysForAMonth(@PathVariable int year, @PathVariable int month) {
		return diaryService.getDaysForAMonth(year, month - 1);
	}

	@RequestMapping(value = "/list/{year}/{month}", method = RequestMethod.GET)
	@ResponseBody
	public DayList getDayListForAMonth(@PathVariable int year,
			@PathVariable int month) {
		List<Day> days = diaryService.getDaysForAMonth(year, month - 1);
		DayList dayList = new DayList();
		dayList.setYear(year);
		dayList.setMonth(month);
		Set<Integer> dates = new HashSet<Integer>();
		for (Day day : days) {
			Calendar cal = GregorianCalendar.getInstance();
			cal.setTime(day.getTheDay());
			dates.add(cal.get(Calendar.DAY_OF_MONTH));
		}
		dayList.setDates(dates);
		return dayList;
	}

	
	@RequestMapping(value = "/{year}/{month}/{day}", method = RequestMethod.GET)
	@ResponseBody
	public Day getDay(@PathVariable int year, @PathVariable int month,
			@PathVariable int day) {
		Calendar c = GregorianCalendar.getInstance();
		c.set(year, month - 1, day);
		Date date = DateUtil.resetHMS(c.getTime());
		Day d = diaryService.getDay(date);

		/*if (d == null) {
			throw new DayNotFoundException("Day not found");
		}*/
		return d;
	}

/*	@ExceptionHandler(DayNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Day not found in diary!")
	public void handleDataFormatException(DayNotFoundException ex) {

		logger.warn("Handlng DayNotFoundException - Catching: "
				+ ex.getClass().getSimpleName());
	}
*/
}
