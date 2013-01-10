<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form action="/m/naplo" method="POST" accept-charset="UTF-8">
    <label for="keywordInput">A keyword:</label>
    <input id="keywordInput" type="password" name="keyword" data-mini="true" style="background-color: #FE2383; color: #fff" />

    <label for="theDayInput1">A nap dátuma:</label>
    <input id="theDayInput1" name="theDay" type="text" data-mini="true" />

    <label for="descriptionOfTheDay">Leírása:</label>
    <textarea id="descriptionOfTheDay" name="descriptionOfTheDay"></textarea>

    <label for="startDateInput1">Az esemény kezdete:</label>
    <input id="startDateInput1" type="text" name="startDate" data-mini="true" />

    <label for="durationInput1">Az esemény időtartama:</label>
    <input id="durationInput1" type="text" name="duration" data-mini="true" value="00:00" />

    <label for="initialEvent1">Az esemény:</label>
    <textarea id="initialEvent1" name="initialEvent"></textarea>
    
    <div data-role="controlgroup" data-type="horizontal">
    	<button type="submit" data-role="button" data-inline="true" data-mini="true">Küldés</button>
    	<button type="button" data-role="button" data-inline="true" onclick="document.location.href='/m/naplo';" data-mini="true">Mégse</button>
	</div>
    <input type="hidden" name="cmd" value="add_day" />
</form>
<script type="text/javascript">
	$(function() {
        mobileJS.initAddDayPage();
    });
</script>