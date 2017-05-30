angular.module('svma.home')
    .controller('svmaHomeController', svmaHomeController);

function svmaHomeController($http, $scope, $state, constant) {

    $scope.cancle = function(){
        $scope.userType = "";
        $scope.userNameKo = "";
        $scope.userNameEn = "";
        $scope.userCreditId = "";
        $scope.hospitalName = "";
        $scope.hospitalAddr = "";
        $scope.phoneNo = "";
    };
    $scope.save = function(){
        var viewType = 'save';
        var data = {
            viewType : viewType,
            ssid : constant.ssid,
            parentBoardSeq : $scope.list.boardSeq,
            userType : $scope.userType,
            userNameKo : $scope.userNameKo,
            userNameEn : $scope.userNameEn,
            userCreditId : $scope.userCreditId,
            hospitalName : $scope.hospitalName,
            hospitalAddr : $scope.hospitalAddr,
            phoneNo : $scope.phoneNo
        }
        var url_temp = constant.contextPath + 'svma/saveEduUser';
        var response = $http.post(url_temp, data);
        response.success(function(data, status, headers, config) {
            alert('저장되었습니다.');
            location.href = "../index.html";
        });
        response.error(function(data, status, headers, config) {
            alert( "Exception details: " + JSON.stringify({data: data}));
        });

    };
    $scope.changeView = function(){
        var data = $scope.list;

        $scope.eduDate = data.eduDate;

    };

    $scope.eduView = false;
    $scope.init =  function(){
        var url_temp = constant.contextPath + 'svma/eduList?ssid='+constant.ssid+ '&boardType=10';
        var response = $http.get(url_temp);
        response.success(function (data, status, headers, config) {
            $scope.listData = data.list;
            if( $scope.listData != null && $scope.listData.length > 0 ){
                $scope.list = $scope.listData[0];
                $scope.eduView = true;
                $scope.changeView();
            }
            console.log(data);
        })
        response.error(function (data, status, headers, config) {
        });
    };
    $scope.init();
};



