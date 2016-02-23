'use strict';

/**
 * @ngdoc function
 * @name FrontEndTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the FrontEndTestApp
 */
angular.module('FrontEndTestApp')
  .controller('HomeController', function ($scope,$uibModal) {

  	  $scope.myInterval = 5000;
	  $scope.noWrapSlides = false;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = slides.length + 1;
	    slides.push({
	      image: '../media/images/nba_img/' + newWidth + '.jpg',
	      text: ['NBA','Favourite','Tim','Kevin','Stephen'][slides.length % 5] + ' ' +
	        ['Teams', 'Teams', 'Duncun', 'Garnett','Curry'][slides.length % 5]
	    });
	  };
	  for (var i=0; i<5; i++) {
	    $scope.addSlide();
	  }
	$scope.oneAtATime = true;

	  $scope.groups = [
	    {
	      title: 'Which team do you like?',
	      content: 'Spurs'
	    },
	    {
	      title: 'Any team else?',
	      content: 'Rockets with YaoMing, Clippers!'
	    }
	  ];

	  $scope.items = [];
	  $scope.addnewname="";
	  $scope.addItem = function(addnewname) {
	    var temp=addnewname;
	    if($scope.items.indexOf(temp)>=0){
	    	alert("This player is already in your list, try a new one..")
	    }else{
	    	$scope.items.push(temp);
	    }
	    
	  };

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };




	$scope.animationsEnabled = true;
	$scope.deleteItem=function  (item) {
		var index=$scope.items.indexOf(item);
		if(index>=0){
			$scope.items.splice(index,1);
		}
	};
  	$scope.open = function (item) {

	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      resolve: {
	        items: function () {
	          return item;
	        }
	      }
	    });
  	};
     $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };


  })

    .controller('ModalInstanceCtrl', function ($http,$scope, $modalInstance, items) {

        $scope.item=items;
        (function getPlayers() {
        $http.get('/data/players.json').then(function (response) {
            var payload = response.data.payload;
            var playerList = payload.players;
            for(var i=0;i<playerList.length;i++){
                if($scope.item==playerList[i].playerProfile.displayName){
                    $scope.infoForSelect=playerList[i];
                }
            }
        })
        }());


        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
});
