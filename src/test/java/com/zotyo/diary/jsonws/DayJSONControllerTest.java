package com.zotyo.diary.jsonws;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.DayList;
import com.zotyo.diary.service.DiaryService;

@RunWith(MockitoJUnitRunner.class)
public class DayJSONControllerTest {
	
	@Mock
	private DiaryService diaryService; 
	
	private DayJSONController controller;
	
	@Before
	public void setUp() {
		controller = new DayJSONController();
		controller.setDiaryService(diaryService);
	}
	
	@Test
	public void testGetDays() {
		List<Day> days = spy(new ArrayList<Day>());
		when(diaryService.getAllDaysInDiary()).thenReturn(days);
		
		List<Day> result = controller.getDays();
		
		assertNotNull(result);
		assertSame(days, result);
		verify(diaryService).getAllDaysInDiary();
		verifyZeroInteractions(days);
	}
	
	@Test
	public void testGetDaysForAMonth() {
		List<Day> days = spy(new ArrayList<Day>());
		when(diaryService.getDaysForAMonth(anyInt(), anyInt())).thenReturn(days);
		
		List<Day> result = controller.getDaysForAMonth(2011, 9);
		
		assertNotNull(result);
		assertSame(days, result);
		verify(diaryService).getDaysForAMonth(2011, 8);
		verifyZeroInteractions(days);
	}
	
	@Test
	public void testGetDayListForAMonth() {
		when(diaryService.getDaysForAMonth(anyInt(), anyInt())).thenReturn(new ArrayList<Day>());
		
		DayList dl = controller.getDayListForAMonth(2011, 9);
		
		verify(diaryService).getDaysForAMonth(2011, 8);
		assertNotNull(dl);
		assertEquals(dl.getYear(), 2011);
		assertEquals(dl.getMonth(), 9);
	}
	
	@Test
	public void testGetDay() {
		Day d = spy(new Day());
		when(diaryService.getDay(any(Date.class))).thenReturn(d);
		
		Day day = controller.getDay(2011, 9, 17);
		
		assertNotNull(day);
		assertSame(d, day);
		verify(diaryService).getDay(any(Date.class));
		verifyZeroInteractions(day);		
	}
}
