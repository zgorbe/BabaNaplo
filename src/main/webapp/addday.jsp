<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<b>Új nap hozzáadása</b>
<form action="/diaryweb" method="POST" accept-charset="UTF-8">
	<table class="box-table-a">
		<tr style="background-color: maroon;">
	        <td><label for="keyword">A keyword:</label></td>
	        <td><input id="keywordInput" type="password" name="keyword" /></td>
	    </tr>	 
	    <tr>
	        <td><label for="theDay">A nap dátuma:</label></td>
	        <td><input id="theDayInput" type="text" name="theDay" /></td>
	    </tr>
	    <tr>
	        <td><label for="name">Leírása:</label></td>
	        <td><textarea name="descriptionOfTheDay" cols="56" rows="2" ></textarea></td>
	    </tr>
	    <tr>
	        <td><label for="startDate">Az esemény kezdete:</label></td>
	        <td><input id="startDateInput" type="text" name="startDate" /></td>
	    </tr>
	    <tr>
	        <td><label for="duration">Az esemény időtartama:</label></td>
	        <td><input id="durationInput" type="text" name="duration" /></td>
	    </tr>
		<tr>
	        <td><label for="initialEvent">Az esemény:</label></td>
	        <td><textarea name="initialEvent" cols="56" rows="6" ></textarea></td>
	    </tr>
	    <tr>
	    	<td><input type="submit" value="Küldés" /></td>
	    	<td><input type="button" value="Mégse" onclick="document.location='/diaryweb';" /></td>
	    </tr>
    </table>
    <input type="hidden" name="action" value="add_day" />
</form>
<script type="text/javascript">
	$(function(){
		$("#theDayInput").val(selectedDay);
		$("#theDayInput").datepicker();
		$('#startDateInput').datetimepicker();
		$('#durationInput').timepicker({});
	});
</script>
