var app = angular.module("playlistApp", [ 
  "ngRoute", 
  "pageCtrl", 
  "songCtrl", 
  "adminCtrl", 
  "listCtrl"  
])

app.config(function($routeProvider){

  $routeProvider
    .when("/song/:id", {
      templateUrl: "templates/landing.html"
    })
    .when("/admin", {
      templateUrl: "templates/admin.html",
      controller: "AdminController"
    })
    .otherwise({
      templateUrl: "templates/landing.html"
    })

}) 