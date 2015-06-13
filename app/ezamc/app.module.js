'use strict';

angular
    .module('app', [
        'ezamc.home',
        'ui.router'
    ])
    .constant("constant", {
        "imagePath": "http://14.63.174.249/getImages",
        //"contextPath": "http://localhost:8280/allpetapi/v1/",
        "contextPath": "http://14.63.174.249:8280/allpetapi/v1/",
        "resourcePath": ""
    });