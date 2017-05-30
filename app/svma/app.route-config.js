(function() {
    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when("/", "svma")
            .when("", "svma")
            .otherwise("svma");

        $stateProvider
            .state('svma', {
                url: '/svma',
                controller: HomeController,
                templateUrl: 'indexHome.html'
            })
            .state('companyInfo.login', {
                url: '/login',
                controller: LoginController,
                templateUrl: 'view/login.html'
            })
            .state('companyInfo.loginPw', {
                url: '/loginPw',
                controller: LoginController,
                templateUrl: 'view/loginPwReset.html'
            })
            .state('companyInfo', {
                url: '/companyInfo',
                controller: CompanyController,
                templateUrl: 'view/company/companyMain.html'
            })
            .state('companyInfo.company01', {
                url: '/company01',
                templateUrl: 'view/company/company01.html'
            })
            .state('companyInfo.company02', {
                url: '/company02',
                templateUrl: 'view/company/company02.html'
            })
            .state('companyInfo.company03', {
                url: '/company03',
                templateUrl: 'view/company/company03.html'
            })
            .state('companyInfo.company04', {
                url: '/company04',
                templateUrl: 'view/company/company04.html'
            })
            .state('companyInfo.company05', {
                url: '/company05',
                templateUrl: 'view/company/company05.html'
            })
            .state('companyInfo.company06', {
                url: '/company06',
                templateUrl: 'view/company/company06.html'
            })
            .state('boardInfo', {
                url: '/boardInfo',
                controller: BoardController,
                templateUrl: 'view/board/boardMain.html'
            })
            .state('boardInfo.list01', {
                url: '/list01/:boardType',
                templateUrl: 'view/board/list01.html'
            })
            .state('boardInfo.list02', {
                url: '/list02/:boardType',
                templateUrl: 'view/board/list02.html'
            })
            .state('boardInfo.list03', {
                url: '/list03/:boardType',
                templateUrl: 'view/board/list03.html'
            })
            .state('reserveInfo', {
                url: '/reserveInfo',
                controller: ReserveController,
                templateUrl: 'view/reserve/reserveMain.html'
            })
            .state('reserveInfo.list01', {
                url: '/list01',
                templateUrl: 'view/reserve/list01.html'
            })

    }
})();