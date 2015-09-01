angular.module("pageCtrl", [])  
.controller("PageController", function($scope){

  $scope.$on("clicked:song", function(meh, song){
    $scope.$broadcast("change:song", song)
  })

  $scope.quotes= [
  {
    quote: "One good thing about music, when it hits you, you feel no pain",
    author: "Bob Marley",
  },
   {
    quote: "Music is the soundtrack of your life",
    author: "Dick Clark",
  },
  {
    quote: "My debut album, 'Forget the World,' is all about not listening to the negativity around you and to continue to do what you love.",
    author: "Afrojack",
  },
   {
    quote: "Music is nouishment for the soul.",
    author: "MLEM",
  },
 {
    quote: "It's never too late to realize what's important in your life and it's never wrong to fight for it",
    author: "Drake",
  },
  ]

  $scope.specificQuote = _.sample($scope.quotes)


  $scope.songs = [
    { 
      title: "Alone At Night", 
      artist: "Psychic Rites", 
      url: "http://www.digitalwell.washington.edu/dw/1/51/bd/bd808f4e-4f00-4021-8690-9d21b141e613.MP3" 
    },
    { 
      title: "Victor Den", 
      artist: "MLem",
      url: "/music/mlem.mp3"
    },
    {
      title: "Roller Coaster",
      artist: "Luke Bryan",
      url:"/music/country.mp3"
    },
    { 
      title: "You & I", 
      artist: "Galantis",
      url: "/music/galantis.mp3" 
    },
    { 
      title: "Party (Summer Occasion Remix)", 
      artist: "Beyonce feat. Andre 3000",
      url: "/music/tajaa.mp3" 
    },
    { 
      title: "If You Have To Ask", 
      artist: "Red Hot Chili Peppers",
      url: "/music/carlos.mp3" 
    }
  ]

}) 