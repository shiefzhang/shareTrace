angular.module('starter.controllers', ['starter.services'])

.controller('DashCtrl', function($scope) {
  var longitude = 113.738487;
  var latitude = 34.361282;
  $scope.mapOptions = {
    center: {
      longitude:longitude,
      latitude:latitude
    },
    zoom:15,
    city:'Xinzheng',
    markers:[{
      longitude:longitude,
      latitude:latitude,
      icon:'http://img.coolwp.com/wp-content/uploads/2015/04/48-map-marker.png',
      width:48,
      height:48,
      title:'在哪儿',
      content:'新郑市梨河镇'
    }]
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
