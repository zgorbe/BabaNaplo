<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.client.Day"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<form action="/m/naplo" method="POST" accept-charset="UTF-8">
    <label for="keyword">A keyword:</label>
    <input id="keywordInput" type="password" name="keyword" data-mini="true" style="background-color: #FE2383; color: #fff" />

    <label for="theDay">A nap:</label>
    <select name="theDay" data-native-menu="false" data-mini="true">
        <c:forEach items="${recentDays}" var="day">
            <option value="<%= diaryHelper.formatDate((Day)pageContext.getAttribute("day")) %>">
                <%= diaryHelper.formatDate((Day)pageContext.getAttribute("day")) %> - <c:out value="${day.descriptionOfTheDay}" />
            </option>
        </c:forEach>
    </select>

    <label for="startDate">Az esemény kezdete:</label>
    <input id="startDateInput" type="text" name="startDate" data-mini="true" />

    <label for="duration">Az esemény időtartama:</label>
    <input id="durationInput" type="text" name="duration" data-mini="true" value="00:00" />

    <label for="initialEvent">Az esemény:</label>
    <textarea name="initialEvent"></textarea>
	<fieldset class="ui-grid-a">
		<div class="ui-block-a"><button type="submit" data-mini="true">Küldés</button></div>
		<div class="ui-block-b"><button type="button" onclick="document.location.href='/m/naplo';" data-mini="true">Mégse</button></div>
	</fieldset>
    <input type="hidden" name="cmd" value="add_event" />
</form>
<script type="text/javascript">
	$(function(){
		$('#startDateInput').mobiscroll().datetime({
			theme: 'jqm',
			lang: 'hu',
        	display: 'modal',
        	mode: 'scroller'
		});
		$('#durationInput').mobiscroll().time({
			theme: 'jqm',
			lang: 'hu',
        	display: 'modal',
        	mode: 'scroller'
		});
	});
</script>