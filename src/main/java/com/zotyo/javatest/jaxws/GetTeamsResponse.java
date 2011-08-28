
package com.zotyo.javatest.jaxws;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "getTeamsResponse", namespace = "http://javatest.zotyo.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getTeamsResponse", namespace = "http://javatest.zotyo.com/")
public class GetTeamsResponse {

    @XmlElement(name = "return", namespace = "")
    private List<com.zotyo.javatest.Team> _return;

    /**
     * 
     * @return
     *     returns List<Team>
     */
    public List<com.zotyo.javatest.Team> getReturn() {
        return this._return;
    }

    /**
     * 
     * @param _return
     *     the value for the _return property
     */
    public void setReturn(List<com.zotyo.javatest.Team> _return) {
        this._return = _return;
    }

}
