$(function(){
	//导航上边框动画
	$(".header .youcaidan ul li:gt(0)").hover(
		function() {
			$(".header .youcaidan ul li").removeClass("daohangshangbiankuangdonghua");
			$(this).addClass("daohangshangbiankuangdonghua")
		},
		function() {
			$(this).removeClass("daohangshangbiankuangdonghua")
		}
	)
	//下拉菜单
	$(".header .youcaidan ul li:nth-child(6) ").hover(function() {
		$(this).find("dl").stop().slideDown();
	}, function() {
		$(this).find("dl").stop().slideUp();
	})
	
	// 底部donghua
	$(".dibudonghua").on("click", function() {
		$("html,body").stop().animate({
			scrollTop: 0
		})
	});
	//监听滚动事件
	$(window).scroll(function() {
		var t = $(document).scrollTop();
		console.log(t);
	});
	
})