'use strict';

angular
    .module('app', [
        'allpet.home',
        'ezamc.home',
        'ui.router'
    ])
    .run(function($rootScope, $state, $location) {
        var path = $location.path(); // will tell you the current path
        console.log(path);
        path = path.substr(1).split('/'); // you still have to split to get the application context
        console.log(path);
        // path() is also a setter
        $location.path(path[0] + '/ezamc');
    });