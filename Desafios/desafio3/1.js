angular.module('BeMEAM', []).controller('tabelaCtrl', ['$scope', function($scope) {
  $scope.users = [{name:'Breno', email:'brenao@gmail.com'},
  {name:'Bruno', email:'brunin@gmail.com'},
  {name:'Marcio', email:'marciao@gmail.com'},
  {name:'Francieli', email:'yyy@gmail.com'},
  {name:'Rhuan', email:'linux@gmail.com'},
  {name:'Ângel', email:'zzz@gmail.com'}];
  
  let reverse = false;
  $scope.ordenar = function (key) {
    if (key == 'name') {
      if (reverse == false) {
        $scope.users.sort(function(a,b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        reverse = true;
      } else {
        $scope.users.sort(function(a,b) {
          return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
        });
        reverse = false;
      }
    } else if (key == 'email') {
      if (reverse == false) {
        $scope.users.sort(function(a,b) {
          return a.email < b.email ? -1 : a.email > b.email ? 1 : 0;
        });
        reverse = true;
        
      } else {
        $scope.users.sort(function(a,b) {
          return a.email > b.email ? -1 : a.email < b.email ? 1 : 0;
        });
        reverse = false;
      }
    }
  }
}]);
