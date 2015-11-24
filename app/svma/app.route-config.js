(function() {
    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when("/", "/svma")
            .when("", "/svma")
            .otherwise("/svma");

        }
})();