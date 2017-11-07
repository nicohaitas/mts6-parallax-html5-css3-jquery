
$(document).ready(function() {
    $.ajaxSetup({cache: false});
    $("#tabs").tabs();
    set_datepicker();
    set_tablesorter();
	submit_form();
	
}
);

function set_tablesorter(){
    $("#tablesorterDaily").tablesorter();
    $("#tablesorterWeekly").tablesorter();
    $("#tablesorterFinal").tablesorter();
    $("#tablesorterBonus").tablesorter();
}

function set_datepicker()
{
	//$.datepicker.setDefaults($.datepicker.regional['fr']);

	// Datepicker daily
	$('#dailyDate').datepicker({
        onSelect: function(dateText, inst){
            $("#dailyDate").val(dateText);
            $('#formDaily').submit();
        }
	});
	
	$('#weeklyDate').datepicker({
	    onSelect: function(dateText, inst){
            $("#weeklyDate").val(dateText);
            $('#formWeekly').submit();
        }
	});

	$('#finalDate').datepicker({
	    onSelect: function(dateText, inst){
            $("#finalDate").val(dateText);
            $('#formFinal').submit();
        }
	});
	
	$('#bonusDate').datepicker({
	    onSelect: function(dateText, inst){
            $("#bonusDate").val(dateText);
            $('#formBonus').submit();
        }
	});
	
}
	

function submit_form()
{
	var serviceURL="getWinnersProxy.jsp";
    var loadingHtml='<tr style="text-align:center;"><td colspan="100%"><img src="../ajax-loader.gif" alt="Please wait. Loading winners data."></td><tr>';
    var istest = false;
    var action_type ="websitewinners";
    
    $("#formDaily").submit(function() {
	   var dateVal = $("#dailyDate").val();
	   var daily_type = "daily";
	   $("#tablesorterDaily tbody").html(loadingHtml);
       
	   $.post(serviceURL, {action:action_type,type:daily_type,date:dateVal,istest:istest}, function(data) {
            $("#tablesorterDaily tbody").html(data);
            $("#tablesorterDaily").trigger("update");
            $("#dailyDate").val("")
        });
        return false;
    });
    
    $("#formWeekly").submit(function() {
 	   var dateVal = $("#weeklyDate").val();
 	   var weekly_type = "weekly";
 	   $("#tablesorterWeekly tbody").html(loadingHtml);
        
 	   $.post(serviceURL, {action:action_type,type:weekly_type,date:dateVal,istest:istest}, function(data) {
             $("#tablesorterWeekly tbody").html(data);
             $("#tablesorterWeekly").trigger("update");
             $("#weeklyDate").val("");
         });
         return false;
     });

    
    $("#formFinal").submit(function() {
  	   var dateVal = $("#finalDate").val();
  	   var final_type = "final";
  	   $("#tablesorterFinal tbody").html(loadingHtml);
         
  	   $.post(serviceURL, {action:action_type,type:final_type,date:dateVal,istest:istest}, function(data) {
              $("#tablesorterFinal tbody").html(data);
              $("#tablesorterFinal").trigger("update");
              $("#finalDate").val("");
          });
          return false;
      });

    $("#formBonus").submit(function() {
   	   var dateVal = $("#bonusDate").val();
   	   var bonus_type = "DRAW_CUSTOM";
   	   $("#tablesorterBonus tbody").html(loadingHtml);
          
   	   $.post(serviceURL, {action:action_type,type:bonus_type,date:dateVal,istest:istest}, function(data) {
               $("#tablesorterBonus tbody").html(data);
               $("#tablesorterBonus").trigger("update");
               $("#bonusDate").val("");
           });
           return false;
       });

}



