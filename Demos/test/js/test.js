
      var testapp =  angular.module('myApp', []);
testapp.controller("FruitCtrl",function($scope){
    $scope.fruit = [
        {'name': 'Apple', 'colour': 'Red'},
        {'name': 'OrangeRed', 'colour': 'Orange'},
        {'name': 'cherry', 'colour': 'Red'},
        {'name': 'tamato', 'colour': 'Red'},
        {'name': 'Banana', 'colour': 'Yellow'}];
    
    $scope.colourIncludes = [];
    
    $scope.includeColour = function(y) {
        var i = $.inArray(y, $scope.colourIncludes);
        if (i > -1) {
            $scope.colourIncludes.splice(i, 1);
        } else {
            $scope.colourIncludes.push(y);
           
        }
    }
    
    $scope.colourFilter = function(x) {
        if ($scope.colourIncludes.length > 0) {
            if ($.inArray(x.colour, $scope.colourIncludes) < 0)
                return;
        }
        
        return x;
        alert(x);
    }
});

        