angular.module('ezamc.home')
    .controller('homeInfoController', homeInfoController)
    .controller('homeEquipmentController', homeEquipmentController)
    .controller('ezamcHomeStaffController', ezamcHomeStaffController)
    .controller('ezamcHomeStaffDetailController', ezamcHomeStaffDetailController);

function homeInfoController($http, $scope, constant) {

};
function homeEquipmentController($http, $scope, constant) {

};

function ezamcHomeStaffController($http, $scope, $state, constant) {

    $scope.tabs = [];
    $scope.selectTab =  function(tab){
        $state.go('homeInfo.staff.detail' , {'cmid' : tab.cmid });
    };
    $scope.init =  function(){
        var url_temp = constant.contextPath + 'staffInfo';
        var response = $http.get(url_temp);
        response.success(function (data, status, headers, config) {
            if( data && data.staffMenuList ){
                for(var i=0; i<data.staffMenuList.length; i++){
                    var d = data.staffMenuList[i];
                    var tab = {
                        title: d.s_name,
                        cmid: d.s_cmid
                    }
                    $scope.tabs.push(tab);
                    if( i == 0 ){
                        $state.go('homeInfo.staff.detail' , {'cmid' : d.s_cmid });
                    }
                }
            }
        })
        response.error(function (data, status, headers, config) {
        });
    };
    $scope.init();
};

function ezamcHomeStaffDetailController($http, $scope, constant, $state, $stateParams, dataFactory) {
    $scope.cmid = $stateParams.cmid;
    $scope.staffList = [];
    $scope.init =  function(){
        // http를 최소화 하기 위하여, 한번 로드된 상태이면 다시 호출하지 않도록 dataFactory 에 저장하여 놓는다.
        if( dataFactory.isStaffInfo($scope.cmid) ){
            $scope.staffList = dataFactory.getStaffInfo($scope.cmid);
        }else {
            var url_temp = constant.contextPath + 'staffDetailInfo?category=' + $scope.cmid;
            var response = $http.get(url_temp);
            response.success(function (data, status, headers, config) {
                if (data && data.staffList) {
                    for (var i = 0; i < data.staffList.length; i++) {
                        var s_stid = data.staffList[i].s_stid;

                        angular.forEach(data.staffDetailList, function (value, key) {
                            var workTimeView = false;
                            var staffHistoryView = false;
                            var staffCareerView = false;
                            var staffBooksView = false;
                            if (key == s_stid) {
                                var staffHistory = [];  // 이력사항
                                var staffCareer = [];   // 학술활동
                                var staffBooks = [];    // 저서
                                if (value) {
                                    for (var j = 0; j < value.length; j++) {
                                        if (value[j].s_type == '10001') {
                                            staffHistory.push(value[j]);
                                            staffHistoryView = true;
                                        } else if (value[j].s_type == '10002') {
                                            staffCareer.push(value[j]);
                                            staffCareerView = true;
                                        } else if (value[j].s_type == '10003') {
                                            staffBooks.push(value[j]);
                                            staffBooksView = true;
                                        }
                                    }
                                }
                                var imagePath = '';
                                if (data.staffList[i].image_path) {
                                    imagePath = constant.imagePath + data.staffList[i].image_path;
                                }
                                var wt1 = [];
                                var wt2 = [];
                                var wt3 = [];
                                if (data.staffList[i].s_working_time) {
                                    var worktime = data.staffList[i].s_working_time;
                                    var worktimeArray = worktime.split('|');
                                    var w1 = worktimeArray[0].split(';');   // 오전
                                    for (var ww = 0; ww < w1.length; ww++) {
                                        wt1.push(w1[ww]);
                                    }
                                    var w2 = worktimeArray[1].split(';');   // 오후
                                    for (var ww = 0; ww < w2.length; ww++) {
                                        wt2.push(w2[ww]);
                                    }
                                    var w3 = worktimeArray[2].split(';');   // 야간
                                    for (var ww = 0; ww < w3.length; ww++) {
                                        wt3.push(w3[ww]);
                                    }
                                    workTimeView = true;
                                }
                                var staffDetail = {
                                    s_stid: data.staffList[i].s_stid,
                                    s_name: data.staffList[i].s_name,
                                    s_position: data.staffList[i].s_position,
                                    wt1: wt1,
                                    wt2: wt2,
                                    wt3: wt3,
                                    s_specialty: data.staffList[i].s_specialty,
                                    image_path: imagePath,
                                    workTimeView: workTimeView,
                                    staffHistoryView: staffHistoryView,
                                    staffCareerView: staffCareerView,
                                    staffBooksView: staffBooksView,
                                    staffHistory: staffHistory,
                                    staffCareer: staffCareer,
                                    staffBooks: staffBooks
                                };
                                $scope.staffList.push(staffDetail);
                            }
                        });

                    }
                }
                dataFactory.addStaffInfo($scope.cmid, $scope.staffList);
            })
            response.error(function (data, status, headers, config) {
            });
        }
    };
    $scope.init();
};


