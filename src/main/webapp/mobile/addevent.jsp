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
    <select id="theDay" name="theDay" data-native-menu="false" data-mini="true">
        <c:forEach items="${recentDays}" var="day">
            <option value="<%= diaryHelper.formatDate((Day)pageContext.getAttribute("day")) %>">
                <%= diaryHelper.formatDate((Day)pageContext.getAttribute("day")) %> - <c:out value="${day.descriptionOfTheDay}" />
            </option>
        </c:forEach>
    </select>

    <label for="startDate">Az esemény kezdete:</label>
    <input id="startDateInput2" type="text" name="startDate" data-mini="true" />

    <label for="duration">Az esemény időtartama:</label>
    <input id="durationInput2" type="text" name="duration" data-mini="true" value="00:00" />

    <label for="initialEvent2">Az esemény:</label>
    <textarea id="initialEvent2" name="initialEvent"></textarea>
    
    <div data-role="controlgroup" data-type="horizontal">
        <button type="submit" data-role="button" data-inline="true" data-mini="true">Küldés</button>
    	<button type="button" data-role="button" data-inline="true" data-mini="true" onclick="document.location.href='/m/naplo';">Mégse</button>
	</div>
    <input type="hidden" name="cmd" value="add_event" />
</form>
<script type="text/javascript">
	$(function() {
        mobileJS.initAddEventPage();
    });
</script>