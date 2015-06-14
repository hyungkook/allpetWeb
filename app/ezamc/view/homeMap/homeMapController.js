angular.module('ezamc.home')
    .controller('homeMapController', homeMapController);

function homeMapController($timeout, $scope, constant) {

    $scope.init = function(){

        var oPoint = new nhn.api.map.LatLng(37.4848241, 126.8089309);
        nhn.api.map.setDefaultPoint('LatLng');
        oMap = new nhn.api.map.Map('testMap' ,{
            point : oPoint,
            zoom : 11,
            enableWheelZoom : true,
            enableDragPan : true,
            enableDblClickZoom : false,
            mapMode : 0,
            activateTrafficMap : false,
            activateBicycleMap : false,
            minMaxLevel : [ 1, 14 ],
            size : new nhn.api.map.Size(500, 400)
        });

        var mapZoom = new nhn.api.map.ZoomControl();
        mapZoom.setPosition({left:40, bottom:40});
        oMap.addControl(mapZoom);
        var oSize = new nhn.api.map.Size(28, 37);
        var oOffset = new nhn.api.map.Size(14, 37);
        var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);
        var oMarker1 = new nhn.api.map.Marker(oIcon, { title : '이지동물 의료센터' });
        oMarker1.setPoint(oPoint);
        oMap.addOverlay(oMarker1);
        var oLabel1 = new nhn.api.map.MarkerLabel();
        oMap.addOverlay(oLabel1);
        oLabel1.setVisible(true, oMarker1);
    };

    $timeout(function() {
        $scope.init();
    });
};


