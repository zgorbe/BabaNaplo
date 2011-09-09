
package com.zotyo.diary.ws.jaxws;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getEventsForADayResponse", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getEventsForADayResponse", namespace = "http://ws.diary.zotyo.com/")
public class GetEventsForADayResponse {

    @XmlElement(name = "return", namespace = "")
    private List<com.zotyo.diary.pojos.Event> _return;

    /**
     * 
     * @return
     *     returns List<Event>
     */
    public List<com.zotyo.diary.pojos.Event> getReturn() {
        return this._return;
    }

    /**
     * 
     * @param _return
     *     the value for the _return property
     */
    public void setReturn(List<com.zotyo.diary.pojos.Event> _return) {
        this._return = _return;
    }

}
