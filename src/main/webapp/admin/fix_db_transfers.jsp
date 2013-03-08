<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.pojos.Day"%>
<%@page import="com.zotyo.diary.pojos.Event"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>


<c:choose>
	<c:when test="${not empty wordsToFix}">
		<div id="editwords">
			<div class="sticky-div"><button type="submit">Módosít</button></div>
			<form class="editwordsform" action="/naplo/admin" method="POST" accept-charset="UTF-8">
				<table class="box-table-a">
					<c:forEach items="${wordsToFix}" var="entry">
					<tr>
				        <td><label for="word_<c:out value="${entry.key}" />"><c:out value="${entry.key}" /></label></td>
				        <td><input class="words" id="word_<c:out value="${entry.key}" />" type="text" value="<c:out value="${entry.value}" />" /></td>
				        <td class="updated"></td>
				    </tr>
					</c:forEach>
			    </table>
			    <input type="hidden" name="cmd" value="edit_words" />
			</form>
		</div>
	</c:when>
	<c:otherwise>
		<c:out value="${dayString}" /> nem szerepel a naplóban.
	</c:otherwise>
</c:choose>

<script type="text/javascript">
	$(function(){
		$('.sticky-div').waypoint('sticky');
		$('#editwords').on('change', '.words', function() {
			$(this).parent().parent().find('.updated').html('<img src="/images/done.png" />');
		});
	});
</script>
