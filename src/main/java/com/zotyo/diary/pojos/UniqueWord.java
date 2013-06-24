package com.zotyo.diary.pojos;

public class UniqueWord {
	
    private Integer id;
	private KidEnum kid;
	private String word;
	private String originalWord;	
	private String description;
	
	public UniqueWord() { }
	public UniqueWord(Integer id, KidEnum kid, String word, String originalWord, String description) {
		setId(id);
		setKid(kid);
		setWord(word);
		setOriginalWord(originalWord);
		setDescription(description);
	}
	
	public void setId(Integer id) {
		this.id = id;
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
