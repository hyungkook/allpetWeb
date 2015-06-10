/**
 * Created by kook_sub on 2015-06-07.
 */
angular.module('ezamc.home')
    .controller('ezamcHomeController', ezamcHomeController);

function ezamcHomeController($http, $scope, constant) {

    $scope.slides = [];
    $scope.mainImageList = [];
    $scope.myInterval = 5000;
    $scope.addSlide = function() {
        if( $scope.mainImageList ){
            for( var i =0; i < $scope.mainImageList.length; i++){
                $scope.slides.push({
                    image: constant.imagePath + $scope.mainImageList[i].s_image_path
                });
            }
        }
    };

    $scope.init = function(){
        var url_temp = constant.contextPath + 'mainData';
        var response = $http.get(url_temp);
        response.success(function (data, status, headers, config) {
            if( data && data.mainImage ){
                $scope.mainImageList =  data.mainImage;
                $scope.addSlide();
            }
        })
        response.error(function (data, status, headers, config) {
        });

    };
    $scope.init();

};