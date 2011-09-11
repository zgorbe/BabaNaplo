
package com.zotyo.diary.client;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for day complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="day">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="descriptionOfTheDay" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="eventsOfTheDay" type="{http://ws.diary.zotyo.com/}event" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="theDay" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "day", propOrder = {
    "descriptionOfTheDay",
    "eventsOfTheDay",
    "theDay"
})
public class Day {

    protected String descriptionOfTheDay;
    @XmlElement(nillable = true)
    protected List<Event> eventsOfTheDay;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar theDay;

    /**
     * Gets the value of the descriptionOfTheDay property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescriptionOfTheDay() {
        return descriptionOfTheDay;
    }

    /**
     * Sets the value of the descriptionOfTheDay property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescriptionOfTheDay(String value) {
        this.descriptionOfTheDay = value;
    }

    /**
     * Gets the value of the eventsOfTheDay property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the eventsOfTheDay property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getEventsOfTheDay().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Event }
     * 
     * 
     */
    public List<Event> getEventsOfTheDay() {
        if (eventsOfTheDay == null) {
            eventsOfTheDay = new ArrayList<Event>();
        }
        return this.eventsOfTheDay;
    }

    /**
     * Gets the value of the theDay property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getTheDay() {
        return theDay;
    }

    /**
     * Sets the value of the theDay property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setTheDay(XMLGregorianCalendar value) {
        this.theDay = value;
    }

}
