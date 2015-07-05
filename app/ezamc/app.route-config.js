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
            })
            .state('homeBeauty',{
                url: '/homeBeauty',
                views: {
                    '': {
                        templateUrl: 'view/homeBeauty/main.html',
                        controller: homeBeautyController
                    },
                    'menu@homeInfo': {
                        templateUrl: 'view/homeBeauty/leftMenu.html'
                    }
                }
            })
            .state('homeBoard',{
                url: '/homeBoard',
                views: {
                    '': {
                        templateUrl: 'view/homeBoard/main.html',
                        controller: homeBoardController
                    },
                    'menu@homeInfo': {
                        templateUrl: 'view/homeBoard/leftMenu.html'
                    }
                }
            })
            .state('homeBoard.create',{
                templateUrl: 'view/homeBoard/homeBoardCreate.html',
                controller: homeBoardViewController
            });
        }
})();