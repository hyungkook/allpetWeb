//-----------------------------------------------------------------
// IE console.log 보완
//-----------------------------------------------------------------
if (window['console'] === undefined || console.log === undefined ) {
 	console = { log: function() {} };
}

//-----------------------------------------------------------------
// binding event
//-----------------------------------------------------------------
$(window).bind("load",function(){
    home.ui.gnb();
});

$(window).bind("resize",function(){

});

//-----------------------------------------------------------------
// portal.ui
//-----------------------------------------------------------------
var home = home || {};
home.ui={

	/**
     * GNB
     * @param {형식} 인자값 - 설명
     */
	gnb:function(){
		var nav = $("nav.gnb");
		$(">ul>li",nav).bind("mouseenter",function(){
			//$(".bg",nav).not(":animated").slideDown(200,"swing");
			$(">ul",this).not(":animated").show();
			menuSize($(this));
		});
		$(">ul>li",nav).bind("mouseleave",function(){
			//$(".bg",nav).not(":animated").slideUp(200,"swing");
			$(">ul",this).not(":animated").hide();
			menuSize($(this));
		});

		/* SNB 사이즈 조절 */
		function menuSize(target){
			//alert("X");
			var menu = $(">ul",target);
			var menus = $(">ul>li", target);
			var exSize = 30;//크로스브라우징 위한 여백
			var totalSize = 0;
			$.each(menus,function(){
				totalSize += parseInt($(this).outerWidth());
			});

			if ( menu.outerWidth() < totalSize){
				menu.width(totalSize+exSize);
			}
			//console.log(totalSize+exSize);
			//menu.css("left","0px");
			if ( menu.outerWidth() > $(target).outerWidth() ){
				if ( (totalSize+menu.position().left) > nav.outerWidth() || menu.css("right") == "0px"){
					menu.css("right","0px");
				}else if (menu.position().left <= 1){
					//menu.css("left","5px");
				}else{
					menu.css("margin-left","-"+parseInt((totalSize/2)-($(target).width()/2-menu.css("padding-left").replace(/[a-z]/gi,"")))+"px");
				}
			}else{
				menu.css("margin-left",parseInt(($(target).width()/2-menu.css("padding-left").replace(/[a-z]/gi,""))-(totalSize/2))+"px");
			}


		}


	},

};