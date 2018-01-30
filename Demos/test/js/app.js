
var app = angular.module('myApp', ['ui-rangeSlider']);
app.controller('productsCtrl', function ($scope, $http) {
        $scope.demo1 = {
            min: 0,
            max: 1000
        };
    $http.get("js/products.json").then(function (response) {
        
        $scope.productsList = response.data.products;
        $scope.filterRange = function (x) {
            return x.price > $scope.demo1.min && x.price <= $scope.demo1.max;
        };
        
        $scope.order = function(x){
         if($scope.mySort == x)
         {
            $scope.reverseSort = !$scope.reverseSort;
            return;
         }
        $scope.mySort = x;
        $scope.reverseSort = false;
        }

        //Checkbox filter

        $scope.productTypeArray = [];

        $scope.ItemType = function (y) {
            var i = $.inArray(y, $scope.productTypeArray);
            if (i > -1) {
                $scope.productTypeArray.splice(i, 1);
            } else {
                $scope.productTypeArray.push(y);
                
            }
        }

        $scope.itemTypeFilter = function(x){
            if ($scope.productTypeArray.length > 0) {
                if ($.inArray(x.Type, $scope.productTypeArray) < 0)
                {
                    return;
                }
            }
            return x;
        }
        //end of checkbox filter
    });
});