angular.module('svma.home')
    .controller('CompanyController', CompanyController);

function CompanyController($http, $scope, $state, constant, store) {
    $scope.init = function(){
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
    }

    $scope.init();
};