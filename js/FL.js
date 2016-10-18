
for(var i = 0 ;i < $(".leftSide li").length; i++){
	$($(".leftSide li").get(i)).attr("index" , i);
}
$(".leftSide li").bind("tap" , function(e){
	e.preventDefault();
	var n = $(this).attr("index");
	for(var i = 0 ;i < $(".leftSide li").length; i++){
		$(".leftSide li span").get(i).className = "";
	}
	$(this).children().children().get(0).className = "current";
	$(".rightSide ul").css("display" , "none !important")
	
	$($(".rightSide ul").get(n)).css("display" , "block !important");
});