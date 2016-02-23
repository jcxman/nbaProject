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
        it("Should instantizte interval to 5000 ",function(){
            expect($scope.myInterval).toEqual(5000);
        });
        it("Should set noWrapSlides to false",function(){
            expect($scope.noWrapSlides).toEqual(false);
        })
    });

    describe("Check Items are right",function(){
        it("Should set the items to blank",function(){
            expect($scope.items).toEqual([]);
        });
        it("Should check addItem function works for blank",function(){
            $scope.items = [];
            $scope.addItem("newname");
            expect($scope.items).toEqual(["newname"]);
        });
        it("Should check addItem function works for string who already exists in items", function () {
            $scope.items=[];
            $scope.addItem("newname");
            spyOn(window,'alert');
            $scope.addItem("newname");
            expect(window.alert).toHaveBeenCalledWith('This player is already in your list, try a new one..')
            //expect($scope.addItem("newname")).to
        })
    });
});