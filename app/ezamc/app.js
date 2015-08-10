angular.module('ezamc.home',['ui.router', 'ui.bootstrap'])
    .controller('HomeController', HomeController)
    .controller('loginCtrl', loginCtrl);

function HomeController($http, $scope, constant, $modal, store) {

    $scope.fax = '';
    $scope.corpRegNumber = '';
    $scope.email = '';
    $scope.hospitalName = '';
    $scope.representStaffName = '';

    $scope.isAdmin = store.get('isAdmin');

    $scope.adminLogout = function(){
        store.set('isAdmin', false);
        $scope.isAdmin = false;
    };
    $scope.adminLogin = function(){
        var modalInstance = $modal.open({
            templateUrl: '../components/adminLogin/adminLogin.html',
            controller: 'loginCtrl',
            scope: $scope,
            windowClass: 'app-modal-window',
            resolve: {
            }
        });
        modalInstance.result.then(function (selectedItem) {
            if( selectedItem == 'true' ){
                store.set('isAdmin', true);
                $scope.isAdmin = true;
            }else{
                store.set('isAdmin', false);
                $scope.isAdmin = false;
                alert('๋ก๊ทธ?ธ? ?ค?จ??จ?ต??ค');
                return;
            }
        }, function () {
        });

    };
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

function loginCtrl($http, $scope, constant, $modalInstance) {
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.login = function(){
        $modalInstance.close('true');
        /*
        var url_temp = constant.contextPath + 'adminLogin';
        var response = $http.get(url_temp);
        response.success(function (data, status, headers, config) {
            if( data ){
                $modalInstance.close('true');
            }else{
                $modalInstance.close('false');
            }
        })
        response.error(function (data, status, headers, config) {
            $modalInstance.close('false');
        });
        */
    };
};