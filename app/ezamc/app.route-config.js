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
            controller: 'ezamcHomeController',
            templateUrl: 'view/indexHome.html'
          });
    }
})();