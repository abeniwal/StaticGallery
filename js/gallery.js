(function(angular) {
    'use strict';
    angular.module('gallery', ['images'])
    .controller('galleryController', ['imageService', function(imageService) {
	    this.photos = [];
	    this.categories = imageService.categories;

	    this.loadPhotos = function (category) {
	    	this.photos = imageService.allPhotos[category ? category : this.categories[0]];
	    }
	}]);
})(window.angular);