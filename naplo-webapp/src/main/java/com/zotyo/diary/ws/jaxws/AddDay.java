
package com.zotyo.diary.ws.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "addDay", namespace = "http://ws.diary.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "addDay", namespace = "http://ws.diary.zotyo.com/")
public class AddDay {

    @XmlElement(name = "arg0", namespace = "")
    private com.zotyo.diary.pojos.Day arg0;

    /**
     * 
     * @return
     *     returns Day
     */
    public com.zotyo.diary.pojos.Day getArg0() {
        return this.arg0;
    }

    /**
     * 
     * @param arg0
     *     the value for the arg0 property
     */
    public void setArg0(com.zotyo.diary.pojos.Day arg0) {
        this.arg0 = arg0;
    }

}
