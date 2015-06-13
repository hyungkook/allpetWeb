angular.module('ezamc.home').factory('dataFactory', function() {

    var dataFactory = {};

    var staffInfoList = [];

    dataFactory.isStaffInfo = function(cmid) {
        var returnData = false;
        for( var i=0; i <staffInfoList.length; i++){
            if( cmid == staffInfoList[i].cmid ){
                returnData = true;
            }
        }
        return returnData;
    };
    dataFactory.getStaffInfo = function(cmid) {
        var returnData = null;
        for( var i=0; i <staffInfoList.length; i++){
            if( cmid == staffInfoList[i].cmid ){
                returnData = staffInfoList[i].list;
            }
        }
        return returnData;
    };
    dataFactory.addStaffInfo = function(cmid , list) {
        var isYn = false;
        for( var i=0; i <staffInfoList.length; i++){
            if( cmid == staffInfoList[i].cmid ){
                isYn = true;
            }
        }
        if( !isYn ){
            staffInfoList.push({
                cmid : cmid,
                list : list
            });
        }
    };
    return dataFactory;
});