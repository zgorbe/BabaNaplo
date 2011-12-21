<%@page contentType="text/javascript" %>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
/*
var days = '<c:out value="${days}" />'.replace(/\&\#034;/g, '"');
console.log(days);
$('#datepicker1 tr').each(function() {
  $.each(this.cells, function() {
    var cellAnchor = $(this).find('a');
    if (cellAnchor) {
      var cellData = cellAnchor.html();
      if (cellData) {
        $.each(days, function(index, value) {
          if (value == cellData) {
            cellAnchor.css('color', 'red');
          }        
        });
      }
    }
  });
});*/
