/**
 * Created by chenxin on 2/1/2016.
 */
describe("HomeController",function(){
   var $rootScope,
       $scope,
       controller;
    beforeEach(function(){
        module('FrontEndTestApp');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("HomeController",{$scope : $scope})
        });
    });

    describe("Initialization",function(){
        it("Should instantizte interval to 8 ",function(){
            expect($scope.myInterval).toEqual(5000);
        })
    })

});