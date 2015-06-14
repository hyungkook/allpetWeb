(function() {
    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when("/", "/ezamc")
            .when("", "/ezamc")
            .otherwise("/ezamc");

        $stateProvider
            .state('ezamc', {
                url: '/ezamc',
                controller: ezamcHomeController,
                templateUrl: 'view/indexHome.html'
            })
            .state('homeInfo',{
                url: '/homeInfo',
                views: {
                    '': {
                        templateUrl: 'view/homeInfo/main.html',
                        controller: homeInfoController
                    },
                    'menu@homeInfo': {
                        templateUrl: 'view/homeInfo/leftMenu.html'
                    }
                }
            })
            .state('homeInfo.info',{
                templateUrl: 'view/homeInfo/hospitalInfo.html',
                controller: ezamcHomeController
            })
            .state('homeInfo.staff',{
                templateUrl: 'view/homeInfo/hospitalStaff.html',
                controller: ezamcHomeStaffController
            })
            .state('homeInfo.staff.detail',{
                templateUrl: 'view/homeInfo/hospitalStaffDetail.html',
                controller: ezamcHomeStaffDetailController,
                params: {'cmid' : '' }
            })
            .state('homeInfo.equipment',{
                templateUrl: 'view/homeInfo/hospitalEquipment.html',
                controller: ezamcHomeController
            })
            .state('homeMap',{
                url: '/homeMap',
                views: {
                    '': {
                        templateUrl: 'view/homeMap/main.html',
                        controller: homeMapController
                    },
                    'menu@homeInfo': {
                        templateUrl: 'view/homeMap/leftMenu.html'
                    }
                }
            });
        }
})();