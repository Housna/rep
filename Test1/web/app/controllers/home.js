angular.module('Starter')
  .controller('HomeController', function($scope, $wakandaManager) {
    $wakandaManager.getDataStore().then(function(ds) {
    	ds.Person.$all().$promise.then(function(event){
     	$scope.people = event.result;
        $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
     });
     
      console.log('Angular-Wakanda is ready!');
      //you can use datastore and handle your data 
      // ds.Item.$all().$promise.then(function(event) {
      //   $scope.tasks = event.result;
      // });
  	}).catch(function(err) {
      console.warn(err);
    });
  });