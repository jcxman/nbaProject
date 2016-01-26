'use strict';

/**
 * @ngdoc function
 * @name FrontEndTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the FrontEndTestApp
 */
angular.module('FrontEndTestApp')
  .controller('PlayerController', ['$http','$scope', function ($http,$scope) {
    $scope.filtered=[];
    $scope.currentPage=1;
    $scope.numPerPage=50;
    $scope.maxSize=5;


    var vm = this;
    
//funtion to get basic info from json
    function getPlayers() {
      $http.get('/data/players.json').then(function (response) {
        var payload = response.data.payload;
        var playerList = payload.players;
        vm.playerList = playerList;
        $scope.lengthForAll=vm.playerList.length;

        getlist(playerList);
        $scope.$watch('lastname',function () {
          getlist(playerList);
          $scope.lengthForList=$scope.list.length;
          showlist();
        })
        $scope.$watch('currentPage',function  () {
          showlist();
        });
      })
    }


    getPlayers();
//get list for based on the last nam
    function getlist (playerList) {
      if(!$scope.lastname){
        $scope.list =playerList;
      }else{
        $scope.list=[];
        for(var i=0;i<$scope.lengthForAll;i++){
          if(playerList[i].playerProfile.lastName.toLowerCase().indexOf($scope.lastname.toLowerCase())>=0){  
            $scope.list.push(playerList[i])
          }
        }        
      }
    }

    function showlist () {
      var begin=(($scope.currentPage-1)*$scope.numPerPage);
      var end=function(){
        return (begin+$scope.numPerPage)<$scope.lengthForList?begin+$scope.numPerPage:$scope.lengthForList;
      }
      $scope.filtered=$scope.list.slice(begin,end());
    }


  }]);
