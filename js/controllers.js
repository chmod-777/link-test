angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $window, $cordovaInAppBrowser) {

	$scope.open_google = function() {
          cordova.InAppBrowser.open('https://www.yahoo.com/', '_system', 'clearcache=yes');
          // I also tried this
          //$window.open('https://www.msn.com/', '_system', 'location=yes');
          // and this
          //window.open('https://www.netflix.com/', '_system', 'location=yes');
        }

})
 