

$(document).ready(function(){
	$('li').click(function(){
		alert("You clicked on " +$(this).text());
		console.log($(this).text());
	});
});