$(function() {
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

	$(".header .youcaidan ul li:nth-child(6) dl dd a").hover(
		function() {
			$(this).next("span").css({
				"display": "inline-block",
			})
		},
		function() {
			$(this).next("span").css({
				"display": "none",
			})
		}
	)






	//banner轮播图
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环模式选项
		autoplay: true,

		// 如果需要分页器
		/* pagination: {
			el: '.swiper-pagination',
		}, */

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// 如果需要滚动条
		/* scrollbar: {
			el: '.swiper-scrollbar',
		}, */
	}) //轮播结束


	// 滚动动画
	//new WOW().init();

	/* $(window).resize(function(){
		var w=$(this).width();
		var h=$(this).height();
		 console.log(w,h);
		if(w<1700 && w>1120){
			new WOW().init();
		}
		
			
	
	}
	) */


	// yiloudonghua
	$(".louyi .neirong .tupian").hover(
		function() {
			// $(".louyi .neirong p")
			$(this).next("p").css({
				"color": "#007AFF",
			})
		},
		function() {
			$(this).next("p").css({
				"color": "#595959",
			})
		}
	)

	// 二楼箭头
	$(".erlou .container .jiantou").hover(
		function() {
			$(this).css({
				"background-color": "#00C0FF",
			})
			// $(".erlou .container .jiantou").find(".jiantou1").slideUp(200)
			$(this).find(".jiantou1").stop().animate({
				marginTop: "-50px",
			});
			$(this).find(".jiantou2").stop().animate({
				marginTop: "-40px",
			});

		},
		function() {
			$(this).css({
				"background-color": "#FFFFFF",
			})
			// $(".erlou .container .jiantou").find(".jiantou1").slideDown();
			$(this).find(".jiantou1").stop().animate({
				marginTop: "0px",
			});
			$(this).find(".jiantou2").stop().animate({
				marginTop: "40px",
			});


		}
	)
	// wulounianling
	$(".wulou .nianling .nl").hover(
		function() {
			$(this).css({
				"background-color": "#00C0FF",
				"color": "#FFFFFF"
			})

		},
		function() {
			$(this).css({
				"background-color": "#FFFFFF",
				"color": "#666"
			})
		}
	)


	// wulouhengxiantianchong
	$(".wulou .tupiandonghua>div").hover(
		function() {
			var xiabiao = $(this).index();
			var heng = $(".wulou .hengxian>div");
			heng.eq(xiabiao).css({
				"background-color": "#666",
			})


		},
		function() {
			var xiabiao = $(this).index();
			var heng = $(".wulou .hengxian>div");
			heng.eq(xiabiao).css({
				"background-color": "#E0E0E0",
			})
		}
	)
	// wuloumore
	$(".wulou .container .more").hover(
		function() {
			$(this).css({
				"background-color": "#666",
			})
		},
		function() {
			$(this).css({
				"background-color": "#D70C0C",
			})
		}
	)

	// liuloujiantou
	$(".liulou .container .jiantou").hover(
		function() {
			$(this).css({
				"background-color": "#00C0FF",
			})
			//$(".liulou .container .jiantou").find(".jiantou1").slideUp(200)
			$(".liulou .container .jiantou").stop().find(".jiantou1").animate({
				marginTop: "-50px"
			})
			$(".liulou .container .jiantou").stop().find(".jiantou2").animate({
				marginTop: "-40px"
			})
		},
		function() {
			$(this).css({
				"background-color": "#FFFFFF",
			})
			//$(".liulou .container .jiantou").find(".jiantou1").slideDown();
			$(".liulou .container .jiantou").stop().find(".jiantou1").animate({
				marginTop: "0px"
			})
			$(".liulou .container .jiantou").stop().find(".jiantou2").animate({
				marginTop: "40px"
			})

		}
	)
	/* $(".liulou .container .jiantou").hover(
	function(){
		$(".liulou .container .jiantou").find(".jiantou1").animate({
			marginTop:"-10px",
		})
	},
	function(){}
	) */

	// 六楼列表动画
	$(".liulou .liebiao ul li").hover(function() {
		$(this).css({
			"color": "#2B2727",
		})
	}, function() {
		$(this).css({
			"color": "#BFBFBF",
		})
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
		// console.log(t);
	});

	//zijiaoyiloudonghua
	$(".louyi .container .neirong .tupian").parent().hover(
		function() {
			$(this).stop().animate({
				marginTop: "-30px",
			}, 300)
		},
		function() {
			$(this).stop().animate({
				marginTop: "0",
			}, 300)
		}
	)



	//new WOW().init();
	// 响应式停动画
	/* $(window).resize(function(){
		var w=$(this).width();
		var h=$(this).height();
		 console.log(w,h);
		 if(w<1150){
			.removeClass("wow slideInUp");
		} 
		if(w<1700 && w>1150){
			
		}
			
	
	}
	) */
	//new WOW().init();
	var wdth = window.innerWidth;
	console.log(wdth);
	if (wdth < 1700 && wdth > 960) {
		// $(".louyi .container .biaoti").removeClass("wow slideInUp").addClass("")
		new WOW().init();
	}

	if (wdth < 1120) {
		var heig = window.innerHeight;
		console.log(heig);

		$(".louyi .container .biaoti").css({
			"display": "none"
		});
		if (heig > 410) {
			$(".louyi .container .biaoti").fadeIn(1400);
		}
		$(".louyi .container .swiper-container").css({
			"display": "none"
		});
		if (heig > 500) {
			$(".louyi .container .swiper-container").fadeIn(1700);
		}
		// erlouzi

		$(".erlou .container .biaoti").css({
			"display": "none"
		});
		if (heig > 507) {
			$(".erlou .container .biaoti").fadeIn(1730);
		}

		$(".erlou .container .neirong").css({
			"display": "none"
		});
		if (heig > 510) {
			$(".erlou .container .neirong").fadeIn(1750);
		}



		$(".sanloufu .sanlou").css({
			"display": "none"
		});
		if (heig > 515) {
			$(".sanloufu .sanlou").fadeIn(1800);
		}

	}

	// 页脚微信qq微博动画
// 	$(".footer .container .yejiaodengfen>div").eq(0).children(".t").hover(
// 		function() {
// 			$(this).css({
// 				"background-color": "#5C5C5C",
// 			})
// 
// 		},
// 		function() {
// 			$(this).css({
// 				"background-color": "#AAAAAA",
// 			})
// 
// 		}
// 	)


})
