angular.module('ezamc.home')
    .controller('homeBoardController', homeBoardController)
    .controller('homeBoardViewController', homeBoardViewController);

function homeBoardController($state, $stateParams, $scope, constant, $http, dataFactory) {

    var boardType = $stateParams.boardType;
    if( !boardType ) boardType = '01';

    $scope.boardType = boardType;

    $scope.boardList = [];
    $scope.createBoard = function(){
        $state.go('homeBoard.create', { viewType : 'create'});
    };

    $scope.viewBoard = function(boardSeq) {
        $state.go('homeBoard.view', { viewType : 'view', boardSeq : boardSeq});
    };
    $scope.editRow = function(rowEntity) {

    };
    $scope.removeRow = function(row) {

    };
    $scope.init = function(pageNum, pageCon){
        var url = constant.contextPath + 'board/boardList?boardType=' + boardType + '&ssid=' + dataFactory.ssid + '&pageNum=' + pageNum+ '&pageCon=' + pageCon;
        $http.get(url)
            .success(function (data) {
                $scope.boardList = [];
                if( data && data.list && data.list.length > 0) {
                    var total = ( data.total % pageCon == 0 ) ?  parseInt(data.total / pageCon) : parseInt(data.total / pageCon) + 1 ;
                    for (var i = 0; i < data.list.length; i++) {
                        $scope.boardList.push(data.list[i]);
                    }
                    $('#page-selection').bootpag({
                        total: total
                    }).on("page", function (event,  num) {
                        $scope.init(num , pageCon);
                    });
                }
            });
    };

    $scope.init(1, 10);
};

function homeBoardViewController($state, $stateParams, $scope, $http, constant, dataFactory) {
    var viewType = $stateParams.viewType;
    var boardSeq = $stateParams.boardSeq;
    var boardType = $stateParams.boardType;
    if( !boardSeq ) boardSeq = 0;
    if( !boardType ) boardType = '01';

    $scope.boardType = boardType;

    $scope.editBoard = function(){
        $state.go('homeBoard.create', { viewType : 'edit', boardSeq : boardSeq});
    };
    $scope.saveBoard = function(){
        //id가 smarteditor인 textarea에 에디터에서 대입
        editor_object.getById["smarteditor"].exec("UPDATE_CONTENTS_FIELD", []);
        var url = constant.contextPath + 'board/saveBoard?viewType=' +viewType + '&boardSeq=' + boardSeq;
        var requestParam = {
            title : $scope.title,
            content : $('#smarteditor').val(),
            boardType : boardType,
            ssid : dataFactory.ssid
        }
        var response = $http.post(url, requestParam);
        response.success(function (data, status, headers, config) {
            $state.go('homeBoard', {} , {reload: true});
        })
        response.error(function (data1, status, headers, config) {
        });
    };
    $scope.cancelBoard = function(){
        $state.go('homeBoard', {} , {reload: true});
    };
    $scope.deleteBoard = function(){
        if( confirm('정말 삭제하시겠습니까? ') ){
            var url = constant.contextPath + 'board/deleteBoard?boardSeq=' + boardSeq;
            $http.get(url)
                .success(function (data) {
                    $state.go('homeBoard', {} , {reload: true});
                });
        }
    };

    $scope.viewInit = function(){
        var url = constant.contextPath + 'board/getBoard?boardSeq=' + boardSeq;
        $http.get(url)
            .success(function (data) {
                if( data ){
                    $scope.title =  data.title;
                    $scope.content =  data.content;
                    //if( editor_object && editor_object.length != 0 && editor_object.getById["smarteditor"] ){
                    //    editor_object.getById["smarteditor"].exec("UPDATE_CONTENTS_FIELD", []);
                    //}
                    if( $('#contents') ){
                        $('#contents').html(data.content);
                    }
                }

            });
    };
    if( viewType == 'create'){
    }else if(viewType == 'edit'){
        $scope.viewInit();
    }else if(viewType == 'view'){
        $scope.viewInit();
    }


};


