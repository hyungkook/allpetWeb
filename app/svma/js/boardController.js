/**
 * Created by kook_sub on 2015-10-20.
 */

var ssid = 'svma';
var targetUrl = 'http://14.63.174.249:8280/allpetapi/v1/';
var resourceUrl = 'http://14.63.174.249:8280/allpetapi/resource/';

//var targetUrl = 'http://localhost:8280/allpetapi/v1/';
//var resourceUrl = 'http://localhost:8280/allpetapi/resource/';

$(document).ready(function() {
    jQuery.support.cors = true;
    // 로그인 로그아웃 버튼 보여주기
    if( $.cookie ){
        var loginFlag = $.cookie('cookie_svma_login');
        if( loginFlag == true || loginFlag == 'true' ){
            $('.loginTrue').show();
            $('.loginFalse').hide();
        }else{
            $('.loginTrue').hide();
            $('.loginFalse').show();
        }
    }
});


var logout = function(){
    if( $.cookie ) {
        $.cookie('cookie_svma_login', false);
        location.reload();
    }
};

