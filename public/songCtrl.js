angular.module("songCtrl", []) 
.controller("SongController", function($scope){

  var howlSong

  $scope.$on("change:song", function(meh, song){
    console.log("clicked", song)
    
    if (howlSong) {
      howlSong.stop()
    }

    $scope.song = song

    howlSong = new Howl({
      urls: [ song.url ],
      loop:true,
    }).play()

    $scope.isPlaying = true
  })

  $scope.playPause = function() {
    if ($scope.isPlaying) {
      howlSong.pause()
    }
    else {
      howlSong.play()
    }

    $scope.isPlaying = !$scope.isPlaying
  }

  $scope.song = {}

})