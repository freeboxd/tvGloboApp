var app = angular.module('tvGloboApp', ['ngRoute']);

app.config(function($routeProvider) {

    var partials = '_partials/';

    $routeProvider
        .when('/', {
            title: 'Início',
            templateUrl: partials + 'inicio.html'
        })
        .when('/programacao', {
            title: 'Programação',
            controller: 'programacaoCtrl',
            templateUrl: partials + 'programacao.html',
        })
        .when('/adicionar-programa', {
            title: 'Adicionar programa',
            controller: 'addCardCtrl',
            templateUrl: partials + 'programacao.html'
        })
        .when('/programas', {
            title: 'Programas',
            templateUrl: partials + 'programas.html'
        })
        .when('/filmes', {
            title: 'Filmes',
            templateUrl: partials + 'filmes.html'
        })
        .otherwise({ redirectTo: '/' });

});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);