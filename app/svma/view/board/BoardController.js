angular.module('svma.home')
    .controller('BoardController', BoardController);

function BoardController($state, $stateParams, $scope, constant, $http, dataFactory) {

    var boardType = $stateParams.boardType;
    console.log(' boardType = ' + boardType);
    if( !boardType ) boardType = '01';

    $scope.init = function(pageNum, pageCon){

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

        var url = constant.contextPath + 'board/boardList?boardType=' + boardType + '&ssid=' + dataFactory.ssid + '&pageNum=' + pageNum+ '&pageCon=' + pageCon;
        $http.get(url)
            .success(function (data) {
                $scope.boardList = [];
                if( data && data.list && data.list.length > 0) {
                    var total = ( data.total % pageCon == 0 ) ?  parseInt(data.total / pageCon) : parseInt(data.total / pageCon) + 1 ;
                    for (var i = 0; i < data.list.length; i++) {
                        $scope.boardList.push(data.list[i]);
                    }

                    $('#page-selection').unbind("page");
                    $('#page-selection').bootpag({
                        total: total
                    }).on("page", function (event,  num) {
                        $scope.currentPage = num;
                        $scope.init(num , pageCon);
                    });
                }
            });
    };

    $scope.init(1, 10);
};

