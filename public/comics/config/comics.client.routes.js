angular.module('comics').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/comics', {
    			templateUrl: 'comics/views/list-comics.client.view.html'
    		}).
    		when('/comics/create', {
    			templateUrl: 'comics/views/create-comic.client.view.html'
    		}).
    		when('/comics/:comicId', {
    			templateUrl: 'comics/views/view-comic.client.view.html'
    		}).
    		when('/comics/:comicId/edit', {
    			templateUrl: 'comics/views/edit-comic.client.view.html'
    		});
    }
]);
