package com.zotyo.diary.pojos;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.UniqueConstraint;
import javax.persistence.Column;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Enumerated;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "words", uniqueConstraints={@UniqueConstraint(columnNames={"word"})})
@NamedQueries({
    @NamedQuery(name = "UniqueWordEntity.latests", query = "SELECT w FROM UniqueWordEntity w ORDER BY w.id DESC")
    })
public class UniqueWordEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(name = "kid")
	private KidEnum kid;
	
	@Column(name = "word")
	private String word;
	
	@Column(name = "original")
	private String originalWord;
	
	@Lob
	@Column(name = "description")
	@Type(type="org.hibernate.type.StringClobType")
	private String description;
	
	public UniqueWordEntity() { }
	public UniqueWordEntity(KidEnum kid, String word, String originalWord, String description) {
		setKid(kid);
		setWord(word);
		setOriginalWord(originalWord);
		setDescription(description);
	}
	
	public Integer getId() {
		return id;
	}
	public KidEnum getKid() {
		return kid;
	}
	public void setKid(KidEnum kid) {
		this.kid = kid;
	}
	public String getWord() {
		return word;
	}
	public void setWord(String word) {
		this.word = word;
	}
	public String getOriginalWord() {
		return originalWord;
	}
	public void setOriginalWord(String originalWord) {
		this.originalWord = originalWord;
	}	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
