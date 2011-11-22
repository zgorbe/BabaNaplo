<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form action="/diaryweb" method="POST" accept-charset="UTF-8">
	<table class="box-table-a">
		<tr style="background-color: #FE2383; color: #fff">
	        <td><label for="keyword">A keyword:</label></td>
	        <td><input id="keywordInput" type="password" name="keyword" /></td>
	    </tr>	        
	    <tr>
	        <td><label for="theDay">A nap dátuma:</label></td>
	        <td><input id="theDayInput" type="text" name="theDay" readonly="readonly" /></td>
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
	    	<td><button type="submit">Küldés</button></td>
	    	<td><button onclick="document.location='/diaryweb';">Mégse</button></td>
	    </tr>
    </table>
    <input type="hidden" name="action" value="add_event" />
</form>
<script type="text/javascript">
	$(function(){
		$("#theDayInput").val(selectedDay);
		$('#startDateInput').datetimepicker();
		$('#durationInput').timepicker({});
	});
</script>
