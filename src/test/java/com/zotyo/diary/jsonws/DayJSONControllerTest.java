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

import com.zotyo.diary.persistence.DiaryDAOJPAImpl;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.DayList;

@RunWith(MockitoJUnitRunner.class)
public class DayJSONControllerTest {
	
	@Mock
	private DiaryDAOJPAImpl diaryDAO; 
	
	private DayJSONController controller;
	
	@Before
	public void setUp() {
		controller = new DayJSONController();
		controller.setDiaryDAO(diaryDAO);
		
	}
	
	@Test
	public void testGetDays() {
		List<Day> days = spy(new ArrayList<Day>());
		when(diaryDAO.getAllDaysInDiary()).thenReturn(days);
		
		controller.getDays();
		
		verify(diaryDAO).getAllDaysInDiary();
		verifyNoMoreInteractions(diaryDAO);
		verifyNoMoreInteractions(days);
	}
	
	@Test
	public void testGetDaysForAMonth() {
		List<Day> days = spy(new ArrayList<Day>());
		when(diaryDAO.getDaysForAMonth(anyInt(), anyInt())).thenReturn(days);
		
		controller.getDaysForAMonth(2011, 9);
		
		verify(diaryDAO).getDaysForAMonth(2011, 8);
		verifyNoMoreInteractions(diaryDAO);
		verifyNoMoreInteractions(days);
	}
	
	@Test
	public void testGetDayListForAMonth() {
		when(diaryDAO.getDaysForAMonth(anyInt(), anyInt())).thenReturn(new ArrayList<Day>());
		
		DayList dl = controller.getDayListForAMonth(2011, 9);
		
		verify(diaryDAO).getDaysForAMonth(2011, 8);
		assertNotNull(dl);
		assertEquals(dl.getYear(), 2011);
		assertEquals(dl.getMonth(), 9);
	}
	
	@Test
	public void testGetDay() {
		when(diaryDAO.getDay(any(Date.class))).thenReturn(new Day());
		
		Day day = controller.getDay(2011, 9, 17);
		
		verify(diaryDAO).getDay(any(Date.class));
	}
}
