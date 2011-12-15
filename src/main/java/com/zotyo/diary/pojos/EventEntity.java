package com.zotyo.diary.pojos;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "events")
public class EventEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

	@Lob
    @Column(name = "text")
	private String description;
	
	@Column(name = "startTime")
	@Temporal(TemporalType.TIMESTAMP) 
	private Date startTime;
	
	@Column(name = "duration")
	private long duration;
	
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="day_id", updatable=false)
    private DayEntity theDay;
    
	public EventEntity() {}
	public EventEntity(String description, Date startTime, long duration) {
		setDescription(description);
		setStartTime(startTime);
		setDuration(duration);
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public long getDuration() {
		return duration;
	}
	public void setDuration(long duration) {
		this.duration = duration;
	}

	public DayEntity getTheDay() {
		return theDay;
	}
	public void setTheDay(DayEntity theDay) {
		this.theDay = theDay;
	}
	
}

