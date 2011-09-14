package com.zotyo.diary.client;

import java.util.GregorianCalendar;
import java.util.List;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;

public class MainClient {
	private static DatatypeFactory df = null;

	static {
        try {
            df = DatatypeFactory.newInstance();
        } catch (DatatypeConfigurationException dce) {
            throw new IllegalStateException(
                "Exception while obtaining DatatypeFactory instance", dce);
        }
    }  

	public static void main(String[] args) {
		DiaryImplService service = new DiaryImplService();
		Diary diary = service.getDiaryImplPort();
/*		Day day = new Day();
		day.setDescriptionOfTheDay("Ez lesz az elso teszt nap a naploban");
		day.setTheDay(df.newXMLGregorianCalendar(new GregorianCalendar(2011, 8, 12, 14, 13, 12)));
		
		Event event1 = new Event();
		event1.setDescription("Ez az elso teszt esemeny");
		event1.setDuration(1000 * 60 * 60);
		event1.setStartTime(df.newXMLGregorianCalendar(new GregorianCalendar(2011, 8, 12, 15, 15, 0)));

		Event event2 = new Event();
		event2.setDescription("Ez a masodik teszt esemeny");
		event2.setDuration(1000 * 60 * 60 * 20);
		event2.setStartTime(df.newXMLGregorianCalendar(new GregorianCalendar(2011, 8, 12, 18, 30, 0)));
		
		day.getEventsOfTheDay().add(event1);
		day.getEventsOfTheDay().add(event2);
		diary.addDay(day);

*/
		List<Event> events = diary.getEventsForADay(df.newXMLGregorianCalendar(new GregorianCalendar(2011, 8, 12, 14, 13, 12)));
		for (Event e : events) {
			System.out.println(e.getDescription());
		}
		
		List<Day> days = diary.getDaysForAMonth(2011, 8);
		for (Day d : days) {
			System.out.println(d.getDescriptionOfTheDay());
		}
/*		Event event1 = new Event();
		event1.setDescription("Ez a harmadik teszt esemeny");
		event1.setDuration(1000 * 60 * 60 * 11);
		event1.setStartTime(df.newXMLGregorianCalendar(new GregorianCalendar(2011, 8, 12, 10, 10, 0)));
		
		diary.addEvent(df.newXMLGregorianCalendar(new GregorianCalendar(2011, 8, 11, 14, 13, 12)), event1);
	*/	
	}
	
}
