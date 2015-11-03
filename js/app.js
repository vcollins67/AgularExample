/**
 * Created by vic on 12/10/2015.
 */
var myApp = angular.module("myApp", [
    "ngRoute",
    "artistControllers"
]);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
        when("/list", {
            templateUrl: "../partials/list.html",
            controller: "ListController"
        }).
        when("/detail/:itemId", {
            templateUrl: "../partials/detail.html",
            controller: "DetailController"
        }).
        otherwise({
            redirectTo: "/list"
        });
}]);