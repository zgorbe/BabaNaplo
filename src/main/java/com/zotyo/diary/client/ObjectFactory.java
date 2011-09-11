
package com.zotyo.diary.client;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.zotyo.diary.client package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _GetDaysForAMonthResponse_QNAME = new QName("http://ws.diary.zotyo.com/", "getDaysForAMonthResponse");
    private final static QName _GetAllDaysInDiaryResponse_QNAME = new QName("http://ws.diary.zotyo.com/", "getAllDaysInDiaryResponse");
    private final static QName _GetDaysForAMonth_QNAME = new QName("http://ws.diary.zotyo.com/", "getDaysForAMonth");
    private final static QName _AddDay_QNAME = new QName("http://ws.diary.zotyo.com/", "addDay");
    private final static QName _GetAllEventsResponse_QNAME = new QName("http://ws.diary.zotyo.com/", "getAllEventsResponse");
    private final static QName _GetAllDaysInDiary_QNAME = new QName("http://ws.diary.zotyo.com/", "getAllDaysInDiary");
    private final static QName _AddEvent_QNAME = new QName("http://ws.diary.zotyo.com/", "addEvent");
    private final static QName _GetEventsForADayResponse_QNAME = new QName("http://ws.diary.zotyo.com/", "getEventsForADayResponse");
    private final static QName _GetAllEvents_QNAME = new QName("http://ws.diary.zotyo.com/", "getAllEvents");
    private final static QName _GetEventsForADay_QNAME = new QName("http://ws.diary.zotyo.com/", "getEventsForADay");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.zotyo.diary.client
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetAllEvents }
     * 
     */
    public GetAllEvents createGetAllEvents() {
        return new GetAllEvents();
    }

    /**
     * Create an instance of {@link GetAllDaysInDiaryResponse }
     * 
     */
    public GetAllDaysInDiaryResponse createGetAllDaysInDiaryResponse() {
        return new GetAllDaysInDiaryResponse();
    }

    /**
     * Create an instance of {@link AddDay }
     * 
     */
    public AddDay createAddDay() {
        return new AddDay();
    }

    /**
     * Create an instance of {@link GetEventsForADayResponse }
     * 
     */
    public GetEventsForADayResponse createGetEventsForADayResponse() {
        return new GetEventsForADayResponse();
    }

    /**
     * Create an instance of {@link AddEvent }
     * 
     */
    public AddEvent createAddEvent() {
        return new AddEvent();
    }

    /**
     * Create an instance of {@link GetAllEventsResponse }
     * 
     */
    public GetAllEventsResponse createGetAllEventsResponse() {
        return new GetAllEventsResponse();
    }

    /**
     * Create an instance of {@link Day }
     * 
     */
    public Day createDay() {
        return new Day();
    }

    /**
     * Create an instance of {@link GetAllDaysInDiary }
     * 
     */
    public GetAllDaysInDiary createGetAllDaysInDiary() {
        return new GetAllDaysInDiary();
    }

    /**
     * Create an instance of {@link Event }
     * 
     */
    public Event createEvent() {
        return new Event();
    }

    /**
     * Create an instance of {@link GetDaysForAMonth }
     * 
     */
    public GetDaysForAMonth createGetDaysForAMonth() {
        return new GetDaysForAMonth();
    }

    /**
     * Create an instance of {@link GetEventsForADay }
     * 
     */
    public GetEventsForADay createGetEventsForADay() {
        return new GetEventsForADay();
    }

    /**
     * Create an instance of {@link GetDaysForAMonthResponse }
     * 
     */
    public GetDaysForAMonthResponse createGetDaysForAMonthResponse() {
        return new GetDaysForAMonthResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDaysForAMonthResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getDaysForAMonthResponse")
    public JAXBElement<GetDaysForAMonthResponse> createGetDaysForAMonthResponse(GetDaysForAMonthResponse value) {
        return new JAXBElement<GetDaysForAMonthResponse>(_GetDaysForAMonthResponse_QNAME, GetDaysForAMonthResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllDaysInDiaryResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getAllDaysInDiaryResponse")
    public JAXBElement<GetAllDaysInDiaryResponse> createGetAllDaysInDiaryResponse(GetAllDaysInDiaryResponse value) {
        return new JAXBElement<GetAllDaysInDiaryResponse>(_GetAllDaysInDiaryResponse_QNAME, GetAllDaysInDiaryResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDaysForAMonth }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getDaysForAMonth")
    public JAXBElement<GetDaysForAMonth> createGetDaysForAMonth(GetDaysForAMonth value) {
        return new JAXBElement<GetDaysForAMonth>(_GetDaysForAMonth_QNAME, GetDaysForAMonth.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddDay }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "addDay")
    public JAXBElement<AddDay> createAddDay(AddDay value) {
        return new JAXBElement<AddDay>(_AddDay_QNAME, AddDay.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllEventsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getAllEventsResponse")
    public JAXBElement<GetAllEventsResponse> createGetAllEventsResponse(GetAllEventsResponse value) {
        return new JAXBElement<GetAllEventsResponse>(_GetAllEventsResponse_QNAME, GetAllEventsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllDaysInDiary }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getAllDaysInDiary")
    public JAXBElement<GetAllDaysInDiary> createGetAllDaysInDiary(GetAllDaysInDiary value) {
        return new JAXBElement<GetAllDaysInDiary>(_GetAllDaysInDiary_QNAME, GetAllDaysInDiary.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddEvent }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "addEvent")
    public JAXBElement<AddEvent> createAddEvent(AddEvent value) {
        return new JAXBElement<AddEvent>(_AddEvent_QNAME, AddEvent.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEventsForADayResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getEventsForADayResponse")
    public JAXBElement<GetEventsForADayResponse> createGetEventsForADayResponse(GetEventsForADayResponse value) {
        return new JAXBElement<GetEventsForADayResponse>(_GetEventsForADayResponse_QNAME, GetEventsForADayResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllEvents }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getAllEvents")
    public JAXBElement<GetAllEvents> createGetAllEvents(GetAllEvents value) {
        return new JAXBElement<GetAllEvents>(_GetAllEvents_QNAME, GetAllEvents.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEventsForADay }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.diary.zotyo.com/", name = "getEventsForADay")
    public JAXBElement<GetEventsForADay> createGetEventsForADay(GetEventsForADay value) {
        return new JAXBElement<GetEventsForADay>(_GetEventsForADay_QNAME, GetEventsForADay.class, null, value);
    }

}
