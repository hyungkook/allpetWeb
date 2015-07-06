angular.module('ezamc.home')
    .controller('homeBoardController', homeBoardController)
    .controller('homeBoardViewController', homeBoardViewController);

function homeBoardController($state, $scope, constant) {


    $scope.createBoard = function(){
        $state.go('homeBoard.create', {} , {reload: true});
    };
    $scope.init = function(){

    };

    $scope.init();
};

function homeBoardViewController($state, $scope, constant) {

    //전역변수선언
    var editor_object = [];

    $scope.saveBoard = function(){
        //id가 smarteditor인 textarea에 에디터에서 대입
        editor_object.getById["smarteditor"].exec("UPDATE_CONTENTS_FIELD", []);
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


