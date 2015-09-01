angular.module("listCtrl", [])
.controller("ListController", function($scope, $route, $routeParams, $timeout){

  $scope.changeSong = function(song) {
    $scope.$emit("clicked:song", song)
  }

  if ($routeParams.id) {
    var id = parseInt($routeParams.id)
    if (id) {
      $timeout(function(){
        var song = $scope.songs[parseInt($routeParams.id) - 1]
        
        $scope.changeSong(song)
      }, 20)
    }
  }

}) 