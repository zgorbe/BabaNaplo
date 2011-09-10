
package com.zotyo.diary.ws.jaxws;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getAllDaysInDiaryResponse", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getAllDaysInDiaryResponse", namespace = "http://ws.diary.zotyo.com/")
public class GetAllDaysInDiaryResponse {

    @XmlElement(name = "Day", namespace = "")
    private List<com.zotyo.diary.pojos.Day> day;

    /**
     * 
     * @return
     *     returns List<Day>
     */
    public List<com.zotyo.diary.pojos.Day> getDay() {
        return this.day;
    }

    /**
     * 
     * @param day
     *     the value for the day property
     */
    public void setDay(List<com.zotyo.diary.pojos.Day> day) {
        this.day = day;
    }

}
