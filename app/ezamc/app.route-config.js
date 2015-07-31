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
            .state('homeInfo.institution',{
                templateUrl: 'view/homeInfo/hospitalInstitution.html',
                controller: ezamcHomeController
            })
            .state('homeInfo.equipment',{
                templateUrl: 'view/homeInfo/hospitalEquipment.html',
                controller: homeEquipmentController
            })
            .state('homeMedicalParts1',{
                url: '/homeMedicalParts1',
                views: {
                    '': {
                        templateUrl: 'view/medicalParts1/main.html',
                        controller: homeBoardController
                    },
                    'menu@homeMedicalParts1': {
                        templateUrl: 'view/medicalParts1/leftMenu.html'
                    }
                }
            })
            .state('homeMedicalParts1.parts1',{
                templateUrl: 'view/medicalParts1/medicalParts1_1.html'
            })
            .state('homeMedicalParts1.parts2',{
                templateUrl: 'view/medicalParts1/medicalParts1_2.html'
            })
            .state('homeMedicalParts1.parts3',{
                templateUrl: 'view/medicalParts1/medicalParts1_3.html'
            })
            .state('homeMedicalParts1.parts4',{
                templateUrl: 'view/medicalParts1/medicalParts1_4.html'
            })
            .state('homeMedicalParts1.parts5',{
                templateUrl: 'view/medicalParts1/medicalParts1_5.html'
            })
            .state('homeMedicalParts1.parts6',{
                templateUrl: 'view/medicalParts1/medicalParts1_6.html'
            })
            .state('homeMedicalParts2',{
                url: '/homeMedicalParts2',
                views: {
                    '': {
                        templateUrl: 'view/medicalParts2/main.html',
                        controller: homeBoardController
                    },
                    'menu@homeMedicalParts2': {
                        templateUrl: 'view/medicalParts2/leftMenu.html'
                    }
                }
            })
            .state('homeMedicalParts2.parts1',{
                templateUrl: 'view/medicalParts2/medicalParts2_1.html'
            })
            .state('homeMedicalParts2.parts2',{
                templateUrl: 'view/medicalParts2/medicalParts2_2.html'
            })
            .state('homeMedicalParts2.parts3',{
                templateUrl: 'view/medicalParts2/medicalParts2_3.html'
            })
            .state('homeMedicalParts2.parts4',{
                templateUrl: 'view/medicalParts2/medicalParts2_4.html'
            })
            .state('homeMedicalParts2.parts5',{
                templateUrl: 'view/medicalParts2/medicalParts2_5.html'
            })
            .state('homeMedicalParts2.parts6',{
                templateUrl: 'view/medicalParts2/medicalParts2_6.html'
            })
            .state('homeMedicalParts2.parts7',{
                templateUrl: 'view/medicalParts2/medicalParts2_7.html'
            })
            .state('homeMedicalParts2.parts8',{
                templateUrl: 'view/medicalParts2/medicalParts2_8.html'
            })
            .state('homeMap',{
                url: '/homeMap',
                views: {
                    '': {
                        templateUrl: 'view/homeMap/main.html',
                        controller: homeMapController
                    },
                    'menu@homeMap': {
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
                    'menu@homeBeauty': {
                        templateUrl: 'view/homeBeauty/leftMenu.html'
                    }
                }
            })
            .state('homeBoard',{
                url: '/homeBoard/:boardType',
                views: {
                    '': {
                        templateUrl: 'view/homeBoard/main.html',
                        controller: homeBoardController
                    },
                    'menu@homeBoard': {
                        templateUrl: 'view/homeBoard/leftMenu.html'
                    }
                }
            })
            .state('homeBoard.create',{
                url: '/create/:boardType',
                templateUrl: 'view/homeBoard/homeBoardCreate.html',
                controller: homeBoardViewController,
                params : {viewType : 'create', boardSeq : 0}
            })
            .state('homeBoard.view',{
                url: '/view/:boardType',
                templateUrl: 'view/homeBoard/homeBoardView.html',
                controller: homeBoardViewController,
                params : {viewType : 'view' , boardSeq : 0}
            });
        }
})();