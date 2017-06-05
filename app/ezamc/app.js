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
                alert('로그인 정보를 확인하여 주세요.');
                return;
            }
        }, function () {
        });

    };

    $scope.setCookie = function( name, value, expiredays ) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    $scope.closePop = function () {
        if ( document.pop_form.chkbox.checked ){
            $scope.setCookie( "maindiv", "done" , 1 );
        }
        document.all['pop'].style.visibility = "hidden";
    }
    $scope.closePop1 = function () {
        if ( document.pop_form1.chkbox1.checked ){
            $scope.setCookie( "maindiv1", "done" , 1 );
        }
        document.all['pop1'].style.visibility = "hidden";
    }


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

        cookiedata = document.cookie;
        if ( cookiedata.indexOf("maindiv=done") < 0 ){
            document.all['pop'].style.visibility = "visible";
        }
        else {
            document.all['pop'].style.visibility = "hidden";
        }
        $( "#pop" ).draggable();

        if ( cookiedata.indexOf("maindiv1=done") < 0 ){
            document.all['pop1'].style.visibility = "visible";
        }
        else {
            document.all['pop1'].style.visibility = "hidden";
        }
        $( "#pop1" ).draggable();
    }

    $scope.init();
};

function loginCtrl($http, $scope, constant, $modalInstance) {
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.login = function(){
        console.log($scope.id);
        console.log($scope.pw);
        if('ezamc' == $scope.id && 'ezamc' == $scope.id){
            $modalInstance.close('true');
        }else{
            $modalInstance.close('false');
        }

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