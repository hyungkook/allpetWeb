angular.module('ezamc.home',['ui.router', 'ui.bootstrap'])
    .controller('HomeController', HomeController);

function HomeController($http, $scope, constant, dataFactory) {

    $scope.fax = '';
    $scope.corpRegNumber = '';
    $scope.email = '';
    $scope.hospitalName = '';
    $scope.representStaffName = '';

    $scope.init = function(){
        var url_temp = constant.contextPath + 'mainData';
        var response = $http.get(url_temp);
        response.success(function (data, status, headers, config) {
            if( data && data.baseInfo ){
                $scope.fax = data.baseInfo.s_fax;
                $scope.corpRegNumber = data.baseInfo.s_corp_reg_number;
                $scope.email = data.baseInfo.s_email;
                $scope.hospitalName = data.baseInfo.s_hospital_name;
                $scope.representStaffName = data.baseInfo.s_represent_staff_name;
            }
        })
        response.error(function (data, status, headers, config) {
        });
    }

    $scope.init();
};