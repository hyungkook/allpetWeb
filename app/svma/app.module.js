'use strict';

angular
    .module('app', [
        'svma.home',
        'angular-storage',
        'ui.router'
    ])
    .constant("constant", {
        "ssid": "svma",
        //"imagePath": "http://14.63.174.249/getImages",
        "contextPath": "http://localhost:8280/allpetapi/v1/",
        //"contextPath": "http://14.63.174.249:8280/allpetapi/v1/",
        "resourcePath": "http://localhost:8280/allpetapi/resource/"
        //"resourcePath": "http://14.63.174.249:8280/allpetapi/resource/"
    });
