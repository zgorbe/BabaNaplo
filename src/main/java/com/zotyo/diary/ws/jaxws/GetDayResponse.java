
package com.zotyo.diary.ws.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getDayResponse", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getDayResponse", namespace = "http://ws.diary.zotyo.com/")
public class GetDayResponse {

    @XmlElement(name = "Day", namespace = "")
    private com.zotyo.diary.pojos.Day day;

    /**
     * 
     * @return
     *     returns Day
     */
    public com.zotyo.diary.pojos.Day getDay() {
        return this.day;
    }

    /**
     * 
     * @param day
     *     the value for the day property
     */
    public void setDay(com.zotyo.diary.pojos.Day day) {
        this.day = day;
    }

}
