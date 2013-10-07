package com.zotyo.diary.jsonws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.KidEnum;
import com.zotyo.diary.pojos.UniqueWord;

@Controller
@RequestMapping("/words")
public class UniqueWordJSONController extends BaseJSONController {
	
	@RequestMapping(value = "/form", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded")
	@ResponseBody
	public UniqueWord addVideoForm(@RequestParam String keyword,
			@RequestParam String kid,
			@RequestParam String word,
			@RequestParam String original,
			@RequestParam String description) {
		if (diaryHelper.md5(keyword).equals(password)) {
			UniqueWord uw = new UniqueWord();
			uw.setKid(KidEnum.valueOf(kid));
			uw.setWord(word);
			uw.setOriginalWord(original);
			uw.setDescription(description);
			
			uw.setId(diaryService.addWord(uw));
			
			return uw;
		}
		return new UniqueWord();
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public Iterable<UniqueWord> getAllEvents() {
		return diaryService.getAllWords();
	}
	
	@RequestMapping(value = "/latests/{count}", method = RequestMethod.GET)
	@ResponseBody
	public List<UniqueWord> getLatests(@PathVariable int count) {
		return diaryService.getLatestWords(count);
	}
}
