
angular.module('Starter', []).controller('namesCtrl', function($scope) {
    
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
