// JavaScript Document
$(document).ready(function(){
	// 自动更新游戏区域高度和行高
	$(window).resize(function(){
		var width = $("#game-board").width();
  	$("#game-board").height(width);
		$("#game-board div").css("line-height", width/5+"px");
	});
	$("#game-board").height($("#game-board").width());
	$("#game-board div").css("line-height", $("#game-board").width()/5+"px");
	
	// 激活气泡提示
	$('.my-word').popover();
	$('.his-word').popover();

	// 单击头像弹出上一次单词
	$("#his-info-area img").click(function(){
		$("div.his-last").addClass("animate");
		$("div.his-last").animate({display:'block'},650,'linear',function(){
    	$("div.his-last").removeClass("animate");
		});
	});

	$("#my-info-area img").click(function(){
		$("div.my-last").addClass("animate");
		$("div.my-last").animate({display:'block'},650,'linear',function(){
    	$("div.my-last").removeClass("animate");
		});
	});

	//
	$("#game-board div").click(function(){
		var v = $(this).text();
		$("#word-area div.clearfix").before("<div class='spelling-word'><span>"+v+"</span></div>");
		var obj = $("#word-area div.spelling-word").last();
		obj.addClass($(this).attr("class"));
		obj.addClass("flipping");
		obj.animate({display:'block'},1000,'linear',function(){
    	obj.removeClass("flipping");
		});
		$(this).addClass("used");
	});
});