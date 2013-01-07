<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form action="/m/naplo" method="POST" accept-charset="UTF-8">
	<table>
		<tr>
	        <td><label for="keyword">A keyword:</label></td>
	        <td style="background-color: #FE2383; color: #fff"><input id="keywordInput" type="password" name="keyword" data-mini="true" /></td>
	    </tr>	 
	    <tr>
	        <td><label for="theDay">A nap dátuma:</label></td>
	        <td><input id="theDayInput" name="theDay" type="text" data-mini="true" /></td>
	    </tr>
	    <tr>
	        <td><label for="name">Leírása:</label></td>
	        <td><textarea name="descriptionOfTheDay" data-mini="true" ></textarea></td>
	    </tr>
	    <tr>
	        <td><label for="startDate">Az esemény kezdete:</label></td>
	        <td><input id="startDateInput" type="text" name="startDate" data-mini="true" /></td>
	    </tr>
	    <tr>
	        <td><label for="duration">Az esemény időtartama:</label></td>
	        <td><input id="durationInput" type="text" name="duration" data-mini="true" /></td>
	    </tr>
		<tr>
	        <td><label for="initialEvent">Az esemény:</label></td>
	        <td><textarea name="initialEvent" data-mini="true" ></textarea></td>
	    </tr>
	    <tr>
	    	<td><button type="submit" data-mini="true">Küldés</button></td>
        	<td><button type="button" onclick="document.location.href='/m/naplo';" data-mini="true">Mégse</button></td>
	    </tr>
    </table>
    <input type="hidden" name="cmd" value="add_day" />
</form>
<script type="text/javascript">
	$(function(){
		$('#theDayInput').mobiscroll().date({
			theme: 'jqm',
			lang: 'hu',
        	display: 'modal',
        	mode: 'scroller',
        	dateOrder: 'yymmdd D'
		});
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
