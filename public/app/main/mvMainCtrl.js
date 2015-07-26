angular.module('app').controller('mvMainCtrl', function($scope){
	$scope.courses = [
		{name: 'Cours 1', featured: true, published: new Date('1/2/2014')},
		{name: 'Cours 2', featured: true, published: new Date('14/2/2014')},
		{name: 'Cours 3', featured: true, published: new Date('5/3/2014')},
		{name: 'Cours 4', featured: true, published: new Date('22/4/2014')},
		{name: 'Cours 5', featured: true, published: new Date('1/5/2014')},
		{name: 'Cours 6', featured: true, published: new Date('19/5/2014')},
		{name: 'Cours 7', featured: true, published: new Date('12/6/2014')},
		{name: 'Cours 8', featured: true, published: new Date('21/6/2014')},
		{name: 'Cours 9', featured: true, published: new Date('11/9/2014')},
		{name: 'Cours 10', featured: true, published: new Date('29/10/2014')},
		{name: 'Cours 11', featured: true, published: new Date('10/11/2014')},
		{name: 'Cours 12', featured: true, published: new Date('27/12/2014')}
	];
});