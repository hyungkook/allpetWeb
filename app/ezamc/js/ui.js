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
    //home.ui.gnb();
});

$(window).bind("resize",function(){

});

//-----------------------------------------------------------------
//-----------------------------------------------------------------
var home = home || {};
home.ui={

};