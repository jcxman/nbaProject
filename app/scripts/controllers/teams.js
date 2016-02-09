'use strict';

/**
 * @ngdoc function
 * @name FrontEndTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the FrontEndTestApp
 */
angular.module('FrontEndTestApp')
  .controller('TeamController',  function ($http,$scope,$uibModal,$log) {

    var vm = this;

    function getTeams() {
      $http.get('/data/teams.json').then(function (response) {
        var payload = response.data.payload;
        var teamList = payload.listGroups[0].teams.concat(payload.listGroups[1].teams);
        vm.teamList = teamList;
      })
    }

    getTeams();

    $scope.sort = {
        column: '',
        descending: false
    };    
    $scope.changeSorting = function(column) {
        var sort = $scope.sort;

        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };

    $scope.items = [];
    $scope.animationsEnabled = true;

    $scope.open = function (element) {
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'playerModalContent.html',
          controller: 'playerModalInstanceCtrl',
          resolve: {
            items: function () {
              return element;
            }
          }
        });
      };

  })
//controller for modal
    .controller('playerModalInstanceCtrl', function ($http, $scope, $modalInstance, items) {

      $scope.team= items;
      $scope.players=[];
      function getPlayers() {
        $http.get('/data/players.json').then(function (response) {
            var payload = response.data.payload;
            var playerList = payload.players;
            for(var i=0;i<playerList.length;i++){
                if($scope.team==playerList[i].teamProfile.name){
                    $scope.players.push(playerList[i].playerProfile.displayName);
                }
            }
        })
      }
      getPlayers();
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
});
