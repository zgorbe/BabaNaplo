<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="java.util.Date"%>
<%@page import="java.text.ParseException"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.zotyo.diary.client.Event"%>
<%@page import="com.zotyo.diary.client.Day"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div class="post">
	<h1 class="title">A naplóban szereplő napok</h1>
	<table border="0" cellspacing="0" cellpadding="3" style="width:100%;">
		<tr>
			<td align="center" id="loader_all" style="display: none;"><img src="images/loading_pink.gif"></td>
			<td align="right">
				Év,hónap:
				<select id="yearFilter" name="yearFilter">
					<option value="2011">2011</option>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
				</select>
				<select id="monthsFilter" name="monthsFilter">
					<option value="01">Január</option>
					<option value="02">Február</option>
					<option value="03">Március</option>
					<option value="04">Április</option>
					<option value="05">Május</option>
					<option value="06">Június</option>
					<option value="07">Július</option>
					<option value="08">Augusztus</option>
					<option value="09">Szeptember</option>
					<option value="10">Október</option>
					<option value="11">November</option>
					<option value="12">December</option>
				</select>					
			</td>
		</tr>
	</table>
	<br />
	<div id="isotope_container">
		<c:choose>	
			<c:when test="${fn:length(alldays) > 0}">
				<c:forEach items="${alldays}" var="day">
					<c:forEach items="${day.eventsOfTheDay}" var="event">
						<div class="isotope_item <%= diaryHelper.formatMonth((Day)pageContext.getAttribute("day")) %>">
							<b><%= diaryHelper.formatDate((Day)pageContext.getAttribute("day")) %></b>
							<c:out value="${event.description}" />
							<c:if test="${event.duration > 0}">
								<br />Időtartam (óra:perc):
								<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
							</c:if>
						</div>
					</c:forEach>
				</c:forEach>
			</c:when>
			<c:otherwise>
				A kiválasztott hónapra nincs nap a naplóban. 
			</c:otherwise>
		</c:choose>
	</div>
	<script type="text/javascript">
	$(function() {
		$('#sidebar').hide();
		$('#content').css('float','none').css('width','900px');
		$("#monthsFilter").val('09');
    smiley();
		var $container = $('#isotope_container'); 
		$container.isotope({
			itemSelector: '.isotope_item',
			filter: '.m2011-09'
		});
    $container.isotope({
      sortBy : 'original-order', 
      sortAscending : false
    });
    
		$('div.post select').on('change', function() {
			var year = $('#yearFilter').val();
			var months = $('#monthsFilter').val();
			var filterStr = '.m' + year + '-' + months;
			$container.isotope({
				itemSelector: '.isotope_item',
				filter: filterStr
			});
      $container.isotope({
        sortBy : 'original-order', 
        sortAscending : false
      });
		});	
	});
	</script>
</div>
