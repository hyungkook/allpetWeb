angular.module('svma.home',['ui.router' ,'ui.bootstrap'])
    .controller('MainController', MainController)
    .controller('HomeController', HomeController)
    .controller('LoginController', LoginController);

function MainController($http, $scope, constant, $modal, store) {

};

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
                alert('로그인 정보를 확인하여 주세요.');
                return;
            }
        }, function () {
        });

    };
    $scope.init = function(){

    }

    $scope.init();
};

function LoginController($http, $scope, constant, $modal, store) {

};