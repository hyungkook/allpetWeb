/**
 * Created by kook_sub on 2015-06-07.
 */
angular.module('ezamc.home',['ui.router', 'ui.bootstrap'])
    .controller('ezamcHomeController', ezamcHomeController);

function ezamcHomeController($http, $scope) {

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300'
        });
    };
    for (var i=0; i<5; i++) {
        $scope.addSlide();
    }
};