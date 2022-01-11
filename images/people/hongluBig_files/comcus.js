(function(){
	$.extend($.fn,{
		BswitchMove:function(options){//上下-左右移动(包括禁止选择)
			var defaults={
				scrollPrevBtn:null, //左边按钮className
				scrollNextBtn:null, //右边按钮className
				scrollPrevDisabledBtn:null, //左边按钮禁止className
				scrollNextDisabledBtn:null, //右边按钮禁止className
				scrollBox:null, //滑动内容块className
				number:1, //每页展示多少个
				rollNumber:1, //单次滑动个数
				direction:'x',//滑动方向 x轴 y轴
				speed:300,//滑动速度
				callback:function(){}
			};
			var options = $.extend(true,defaults,options);
			this.each(function(){
				var self=this,
					$prev=$('.'+options.scrollPrevBtn,self),
					$next=$('.'+options.scrollNextBtn,self),
					$scrollBox=$('.'+options.scrollBox,self),
					$scrollMain=$scrollBox.children(),
					$scrollList=$scrollMain.children(),
					length=$scrollList.length,
					width=$scrollList.outerWidth(true),
					height=$scrollList.outerHeight(true),
					maxScrollNumber=length-options.number,//最大移动位置
					lastScrollNumber=length%options.number,//最后一次移动位置
					scrollNumber=0;
				var S={
					disabledScrollContent:function(){//禁止移动
						if(maxScrollNumber<=0){
							$prev.addClass(options.scrollPrevDisabledBtn);
							$next.addClass(options.scrollNextDisabledBtn);
						}else{
							if(scrollNumber==maxScrollNumber){
								$prev.removeClass(options.scrollPrevDisabledBtn).bind('click mouseover',{callback:S.prevScrollContent},S.scrollContent);
								$next.addClass(options.scrollNextDisabledBtn).unbind('click mouseover');
							}else if(scrollNumber==0){
								$prev.addClass(options.scrollPrevDisabledBtn).unbind('click mouseover');
								$next.removeClass(options.scrollNextDisabledBtn).bind('click mouseover',{callback:S.nextScrollContent},S.scrollContent);
							}else{
								$prev.removeClass(options.scrollPrevDisabledBtn).bind('click mouseover',{callback:S.prevScrollContent},S.scrollContent);
								$next.removeClass(options.scrollNextDisabledBtn).bind('click mouseover',{callback:S.nextScrollContent},S.scrollContent);
							};
						};
					},
					scrollContent:function(e){
						if(!$scrollMain.is(":animated")){
							//$('body').css({'-moz-user-select':'none','-webkit-user-select':'none','-o-user-select':'none','user-select':'none'});
							e.data.callback();
							switch(options.direction){
								case 'x' : S.scrollContentCall(0,width);break;
								case 'y' : S.scrollContentCall(1,height);break;
								default  : break;
							};
						};
					},
					prevScrollContent:function(){//上一页
						scrollNumber-=options.rollNumber;
						scrollNumber=Math.max(scrollNumber,0);
					},
					nextScrollContent:function(){//下一页
						scrollNumber+=options.rollNumber;
						scrollNumber=Math.min(scrollNumber,maxScrollNumber);
					},
					scrollContentCall:function(a,b){
						switch(a){
							case 0 :
								$scrollMain.animate({'margin-left':-scrollNumber*b},options.speed,function(){
									S.disabledScrollContent();
									options.callback();
								});
								break;
							case 1 :
								$scrollMain.animate({'margin-top':-scrollNumber*b},options.speed,function(){
									S.disabledScrollContent();
									options.callback();
								});
								break;
							default: break;
						};
					}
				};
				S.disabledScrollContent();
			});
			return this;
		}
	});
})(jQuery);
$(function(){
	$(".search-submit").click(function(event){
		$(this).removeAttr("name");
		event.preventDefault();
		var val = $.trim($(".search-title").val());
		if(val!==""){
			$(".wp-search").find("form").submit();
		}else{
			alert("请输入关键词");
		}
		return false;
	});
	
	/*导航*/
	/*$.fn.sudyNav = function(){};
	$(".wp-menu li").hover(function() {
		$(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
		$(this).children('.sub-menu').stop(true,true).slideDown(200);
		$(this).addClass('hover');
	}, function() {
		$(this).children('.sub-menu').stop(true,true).slideUp(150);
		$(this).removeClass('hover');
    });
	
	$(".wp-menu li").each(function(){
		$(this).children(".menu-switch-arrow").appendTo($(this).children(".menu-link"));
	});*/
	

	/*媒体链接*/
	$(".shares li").each(function(){
		$(this).children("a").hover(function(){
			$(this).parent().find(".con").stop(true,true).fadeIn();			
		},function(){
			$(this).parent().find(".con").stop(true,true).fadeOut();
		});
	});	
       
        //历史沿革
	$('.ui-history-container').BswitchMove({
		scrollPrevBtn:'ui-history-prev',
		scrollNextBtn:'ui-history-next',
		scrollPrevDisabledBtn:'ui-history-btn-disabled hide',
		scrollNextDisabledBtn:'ui-history-btn-disabled hide',
		scrollBox:'ui-history-content',
		speed:300,
		number:Math.floor($(".ui-history-content").width()/300),
		callback:function(){}
	});

});