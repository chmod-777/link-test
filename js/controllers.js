angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $window) {

	$scope.open_google = function() {
          $window.open('https://www.google.com/', '_system');
        }

})
 