
package com.zotyo.javatest.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getTeamResponse", namespace = "http://javatest.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getTeamResponse", namespace = "http://javatest.zotyo.com/")
public class GetTeamResponse {

    @XmlElement(name = "return", namespace = "")
    private com.zotyo.javatest.Team _return;

    /**
     * 
     * @return
     *     returns Team
     */
    public com.zotyo.javatest.Team getReturn() {
        return this._return;
    }

    /**
     * 
     * @param _return
     *     the value for the _return property
     */
    public void setReturn(com.zotyo.javatest.Team _return) {
        this._return = _return;
    }

}
