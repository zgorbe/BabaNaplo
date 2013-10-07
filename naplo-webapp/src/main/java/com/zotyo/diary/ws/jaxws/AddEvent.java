
package com.zotyo.diary.ws.jaxws;

import java.util.Date;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "addEvent", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "addEvent", namespace = "http://ws.diary.zotyo.com/", propOrder = {
    "arg0",
    "arg1"
})
public class AddEvent {

    @XmlElement(name = "arg0", namespace = "")
    private Date arg0;
    @XmlElement(name = "arg1", namespace = "")
    private com.zotyo.diary.pojos.Event arg1;

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

    /**
     * 
     * @return
     *     returns Event
     */
    public com.zotyo.diary.pojos.Event getArg1() {
        return this.arg1;
    }

    /**
     * 
     * @param arg1
     *     the value for the arg1 property
     */
    public void setArg1(com.zotyo.diary.pojos.Event arg1) {
        this.arg1 = arg1;
    }

}
