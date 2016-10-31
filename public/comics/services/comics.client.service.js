angular.module('comics').factory('Comics', ['$resource',
    function($resource) {
        return $resource(
          'api/comics/:comicId', // URL
          {comicId: '@_id'},     // paramDefaults
          {update: {method: 'PUT'}} // actions
        );
    }
]);
