package com.zotyo.diary.persistence;

import javax.persistence.EntityManager;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DiaryDAOTest {
	
	@Mock
	private EntityManager em;

	private DiaryDAOJPAImpl diaryDAO; 
	
	@Before
	public void setUp() {
		diaryDAO = new DiaryDAOJPAImpl();
		diaryDAO.setEm(em);
	}
	
	@Test
	public void todoTest() {
		
	}
}
