angular.module("adminCtrl", [])
.controller("AdminController", function($scope){

  $scope.deleteSong = function(song, index) {
    $scope.songs.splice(index, 1)
  }

  $scope.addSong = function() {
    $scope.songs.push({
      title: $scope.title,
      artist: $scope.artist,
      url: $scope.url
    })
  }

})  