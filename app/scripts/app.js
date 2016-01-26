'use strict';

/**
 * @ngdoc overview
 * @name FrontEndTestApp
 * @description
 * # FrontEndTestApp
 *
 * Main module of the application.
 */


angular
  .module('FrontEndTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayerController',
        controllerAs: 'players'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamController',
        controllerAs: 'teams'
      })
      .when('/404.html',{
        templateUrl:'views/404.html',
        controller:'Error404Controller'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  })
  //first way using controller
  .controller('navctrl',['$scope','$location',function ($scope,$location) {
    // body...
    // $scope.navLinks = [{
    //     Title: '',
    //     LinkText: 'Home',
    // }, {
    //     Title: 'players',
    //     LinkText: 'Players'
    // }, {
    //     Title: 'teams',
    //     LinkText: 'Teams'
    // }];
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) ;
        // alert($location.path());
        return page === currentRoute ? 'active' : '';
    }; 
  }])
  .controller('Error404Controller',function () {
    // body...

  })
  .controller('footerCtrl',['$scope',function  ($scope) {
    // body...
    $scope.getfooter=function  () {
      // body...
      var footerH = $('.footer');
        var fH = footerH.height();

        // $('.fTab').on('click', function() {
          $(this).toggleClass('current');
          $('.footer').slideToggle(500);
        // });
    }
  }])
  //second way use directive
  .directive('navDirect',function(){
    return {
      restrict:'A',
      link :function (scope,element,attrs) {
        // body...

        //use watch
        scope.$watch(function() {console.log("start watch"); return $location.path(); }, 
        function(path) {
            console.log("then watch");
            // alert("false");
            var url = element.find('a').attr('href');
            if (url) {
                url = url.substring(1);
            }
            if (path == url) {
                element.addClass('active');
            } else {
                element.removeClass('active');
            }
        });


        //use select element on
        // element.on('click',function  (element) {
        //   // body...
        //   element.preventDefault();
        //   // alert(JSON.stringify(element));
        //   $element.parent().find('.active').removeClass('active').end().end().addClass('active');

    
        // })

        }
      }
    }
  )
// .filter('searchForLast', function(){

//   // All filters must return a function. The first parameter
//   // is the data that is to be filtered, and the second is an
//   // argument that may be passed with a colon (searchFor:searchString)

//   return function(arr, searchString){

//     if(!searchString){
//       return arr;
//     }

//     var result = [];

//     searchString = searchString.toLowerCase();

//     // Using the forEach helper method to loop through the array
//     angular.forEach(arr, function(item){

//       if(item.title.toLowerCase().indexOf(searchString) !== -1){
//         result.push(item);
//       }

//     });

//     return result;
//   };

// });
  
   

  
