angular.module('comics').controller('ComicsController', ['$scope','orderByFilter', '$routeParams', '$location', 'Comics',
function($scope, orderBy, $routeParams, $location, Comics) {
  // Max Lengths for inputs
  $scope.descriptionMaxLength = 500;
  $scope.titleMaxLength = 50;

  // Sorting
  $scope.propertyName = '';
  $scope.reverse = true;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
    ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.comics = orderBy($scope.comics, $scope.propertyName, $scope.reverse);
  };

  // CRUD
  $scope.create = function() {
    var comic = new Comics({
      title: this.title,
      description: this.description,
      publishDate : this.publishDate
    });

    comic.$save(function(response) {
      $location.path('comics/' + response._id);
    }, function(errorResponse) {
      $scope.error = errorResponse.data;
    });
  };

  $scope.find = function() {
    $scope.comics = Comics.query();
  };

  $scope.findOne = function() {
    $scope.comic = Comics.get({
      comicId: $routeParams.comicId
    });
  };

  $scope.update = function() {
    $scope.comic.$update(function() {
      $location.path('comics/' + $scope.comic._id);
    }, function(errorResponse) {
      $scope.error = errorResponse.data.message;
    });
  };

  $scope.delete = function(comic) {
    if (comic) {
      comic.$remove(function() {
        for (var i in $scope.comics) {
          if ($scope.comics[i] === comic) {
            $scope.comics.splice(i, 1);
          }
        }
      });
    } else {
      $scope.comic.$remove(function() {
        $location.path('comics');
      });
    }
  };
}
]);
