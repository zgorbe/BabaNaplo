package com.zotyo.diary.jsonws;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.util.DateUtil;

@Controller
@RequestMapping("/days")
public class DayJSONController {
	
	@Autowired
	private DiaryDAO diaryDAO;
	
	
	@RequestMapping(method = RequestMethod.POST, consumes = "application/json")
	public void addDay(@RequestBody Day day) {
		day.setTheDay(DateUtil.resetHMS(day.getTheDay()));
		diaryDAO.addDay(day);
	}

	@RequestMapping(value = "/form", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded")
	public void addDayForm(@RequestParam String keyword, @RequestParam String theDay,
		@RequestParam String descriptionOfTheDay, @RequestParam String startDate, @RequestParam String duration,
		@RequestParam String initialEvent) {
		
		//day.setTheDay(DateUtil.resetHMS(day.getTheDay()));
		//diaryDAO.addDay(day);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Day> getDays() {
		return diaryDAO.getAllDaysInDiary();
	}
	
	@RequestMapping(value = "/{year}/{month}", method = RequestMethod.GET)
	@ResponseBody
	public List<Day> getDaysForAMonth(@PathVariable int year, @PathVariable int month) {
		return diaryDAO.getDaysForAMonth(year, month);
	}
	
	@RequestMapping(value = "/{year}/{month}/{day}", method = RequestMethod.GET)
	@ResponseBody
	public Day getDay(@PathVariable int year, @PathVariable int month, @PathVariable int day) {
		Calendar c = GregorianCalendar.getInstance();
		c.set(year, month, day);
		return diaryDAO.getDay(DateUtil.resetHMS(c.getTime()));
	}
}
