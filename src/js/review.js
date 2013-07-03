// JavaScript Document
$(document).ready(function(){
	$("div.remem-btn a.btn-success").click(function(){
		$(this).parent().parent().children("pre").slideDown("fast");
		$(this).parent().parent().children("h4").text("您记忆中的释义是否正确？");
		$(this).html("<span class='icon-ok icon-white'></span> 正确");
		$(this).parent().children("a.btn-danger").html("<span class='icon-remove icon-white'></span> 错误");
		$(this).click(function(){
			var t = $(this).parent().parent().parent().parent();
			var n = $(this).parent().parent().parent();
			$(this).parent().parent().html("<h4>恭喜，您已经巩固了这个单词。</h4>");
			setTimeout(function(){
				n.collapse('hide');
				t.next("div.accordion-group").children("div.accordion-body").collapse('show');
			}, 1000);
		});
	});
});