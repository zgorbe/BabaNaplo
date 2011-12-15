
package com.zotyo.diary.ws.jaxws;

import java.util.Date;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getDay", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getDay", namespace = "http://ws.diary.zotyo.com/")
public class GetDay {

    @XmlElement(name = "arg0", namespace = "")
    private Date arg0;

    /**
     * 
     * @return
     *     returns Date
     */
    public Date getArg0() {
        return this.arg0;
    }

    /**
     * 
     * @param arg0
     *     the value for the arg0 property
     */
    public void setArg0(Date arg0) {
        this.arg0 = arg0;
    }

}
