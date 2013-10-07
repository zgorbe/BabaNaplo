
package com.zotyo.diary.ws.jaxws;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getAllEventsResponse", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getAllEventsResponse", namespace = "http://ws.diary.zotyo.com/")
public class GetAllEventsResponse {

    @XmlElement(name = "Event", namespace = "")
    private List<com.zotyo.diary.pojos.Event> event;

    /**
     * 
     * @return
     *     returns List<Event>
     */
    public List<com.zotyo.diary.pojos.Event> getEvent() {
        return this.event;
    }

    /**
     * 
     * @param event
     *     the value for the event property
     */
    public void setEvent(List<com.zotyo.diary.pojos.Event> event) {
        this.event = event;
    }

}
