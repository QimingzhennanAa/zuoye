/**
 +-------------------------------------------------------------------------------------------------------------
 * [QQ空间长度展示方式]插件 jquery.longPicShow
 +-------------------------------------------------------------------------------------------------------------
 * @author   Mr.Mao
 * @version  1.0
 * @file  	 jquery.longPicShow.js
 * @info  	 报告BUG、建议、索取最新版本 请Mail：maoshili@qq.com(注：邮件标题请包含longPicShow 以便于邮箱自动归档)
 * @date  	 2013-12-19
 +-------------------------------------------------------------------------------------------------------------
 */	
(function($){
		$.fn.longPicShow=function(px){
			if(px==undefined){
				px=150;
			}else if(/^\d*$/.test(px)){
				px=parseInt(px);
			}else{
				alert("Param error!");
				return;
			}
			var m={};
			m.self=this;
			m.innerImg= $(m.self).find("img");
			//样式
			m.setCss=function(){
				var cssCode='<style type="text/css">';
				cssCode+='*{padding:0px;margin:0px;}';
				cssCode+='.topDiv{height:'+(m.self.height()/2)+'px;width:'+m.self.width()+'px;cursor:pointer;background:#fff;position:absolute;filter:alpha(opacity=0);opacity:0;}';
				cssCode+='.bottomDiv{height:'+(m.self.height()/2)+'px;width:'+m.self.width()+'px;cursor:pointer;background:#fff;position:absolute;filter:alpha(opacity=0);opacity:0;top:'+(m.self.height()/2)+'px;}';
				cssCode+='.imgDiv{position:absolute;}';
				cssCode+='</style>';
				$("head").append($(cssCode));
			}
			//布局
			m.setLayOut=function(){
				var $topDiv=$('<div class="topDiv"></div>');
				var $bottomDiv = $('<div class="bottomDiv"></div>');
				$(m.self).append($topDiv)
				$(m.self).append($bottomDiv)
				$(m.self).find('img').addClass('imgDiv');
			}
			//展示效果！
			m.setAnimate=function(){
				//向上移动
				$($(m.self).find('div')[1]).hover(function(){
					var $high = m.innerImg.height();
					var topStr= m.innerImg.css("top").split("px")[0];
					if(topStr.split("-")[1]==undefined){
						var $time = ($high)/px;
					}else{
						var $top = parseFloat(topStr.split("-")[1]);
						var $time = ($high-$top)/px;
					}
					m.innerImg.animate({top:-$high+m.self.height()},$time*1000,"linear");
				},function(){
					m.innerImg.stop();
				});
				//向下移动
				$($(m.self).find('div')[0]).hover(function(){
					var $high = m.innerImg.height();
					var topStr= m.innerImg.css("top").split("px")[0];
					var $top = parseFloat(topStr.split("-")[1]);
					var $time = $top/px;
					m.innerImg.animate({top:0} ,$time*1000,"linear");
				},function(){
					m.innerImg.stop();
				});
			}
			m.run=function(){
				m.setCss();
				m.setLayOut();
				m.setAnimate();
			}
			m.run();	
		}
})(jQuery);