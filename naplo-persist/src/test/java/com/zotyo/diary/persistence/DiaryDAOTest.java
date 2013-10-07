package com.zotyo.diary.persistence;

import java.util.Date;

import javax.persistence.EntityManager;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.DayEntity;

@RunWith(MockitoJUnitRunner.class)
public class DiaryDAOTest {
	
	private EntityManager em;

	private DiaryDAOJPAImpl diaryDAO; 
	
	@Before
	public void setUp() {
		diaryDAO = new DiaryDAOJPAImpl();
		em = mock(EntityManager.class, RETURNS_DEEP_STUBS);
		diaryDAO.setEm(em);
	}
	
	@Test
	public void testGetDay() {
		DayEntity day = spy(new DayEntity());
		when(em.createNamedQuery(anyString(), eq(DayEntity.class)).getSingleResult()).thenReturn(day);

		Day result = diaryDAO.getDay(new Date());

		assertNotNull(result);
		verify(em).createNamedQuery(anyString(), eq(DayEntity.class));
	}
}
