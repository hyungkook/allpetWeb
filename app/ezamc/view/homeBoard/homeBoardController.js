angular.module('ezamc.home')
    .controller('homeBoardController', homeBoardController)
    .controller('homeBoardViewController', homeBoardViewController);

function homeBoardController($state, $scope, constant, $http, dataFactory) {


    $scope.createBoard = function(){
        $state.go('homeBoard.create', {} , {reload: true});
    };

    var paginationOptions = {
        pageNumber: 1,
        pageSize: 10,
        sort: null
    };

    $scope.gridOptions = {
        paginationPageSizes: [10, 20, 30],
        paginationPageSize: 10,
        useExternalPagination: true,
        useExternalSorting: true,
        columnDefs: [
            { name: '이벤트 이름', field: 'statEvetNm', width:'200' },
            { name: '작성자', field: 'amdrId', enableSorting: false },
            { name: '작성일자', field: 'amdDt', enableSorting: false },
            { name: 'STATUS', field: 'evetSttusCd', enableSorting: false },
            { name: 'ACTION',   enableSorting: false,
                cellTemplate: '<button ng-click="grid.appScope.editRow(row.entity)" class="btn btn-primary">수정</button> ' +
                '<button ng-click="grid.appScope.removeRow(row.entity)" class="btn btn-warning">삭제</button>'
            }
        ],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
                if (sortColumns.length == 0) {
                    paginationOptions.sort = null;
                } else {
                    paginationOptions.sort = sortColumns[0].sort.direction;
                }
                init();
            });
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                init();
            });
        }
    };

    $scope.editRow = function(rowEntity) {

    };
    $scope.removeRow = function(row) {
        var url = constant.contextPath + '';
        $http.put(url).success(function (data) {
            var index = $scope.gridOptions.data.indexOf(row);
            $scope.gridOptions.data.splice(index,1);
        });

    };
    $scope.init = function(){
        var boardType = '01';
        var url = constant.contextPath + 'board/boardList?boardType=' + boardType + '&ssid=' + dataFactory.ssid;
        $http.get(url)
            .success(function (data) {
                //console.log(data.data);
                if( data && data.data ){
                    $scope.gridOptions.totalItems = data.data.length;
                    var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
                    $scope.gridOptions.data = data.data.slice(firstRow, firstRow + paginationOptions.pageSize);
                }

            });
    };

    $scope.init();
};

function homeBoardViewController($state, $scope, $http, constant, dataFactory) {

    //전역변수선언
    var editor_object = [];

    $scope.saveBoard = function(){
        //id가 smarteditor인 textarea에 에디터에서 대입
        editor_object.getById["smarteditor"].exec("UPDATE_CONTENTS_FIELD", []);
        var url = constant.contextPath + 'board/saveBoard';
        var boardType = '01';   // 게시판
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

    $scope.init = function(){
        nhn.husky.EZCreator.createInIFrame({
            oAppRef: editor_object,
            elPlaceHolder: "smarteditor",
            sSkinURI: "../components/smarteditor/SmartEditor2Skin.html",
            htParams : {
                // 툴바 사용 여부 (true:사용/ false:사용하지 않음)
                bUseToolbar : true,
                // 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
                bUseVerticalResizer : true,
                // 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
                bUseModeChanger : true
            }
        });
    };

    $scope.init();

};


