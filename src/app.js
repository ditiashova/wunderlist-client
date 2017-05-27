let app = angular.module('Wunderlist', [ngRoute]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: 'src/dashboard/tmpl/dashboard.tmpl.html',
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            })
        .otherwise({redirectTo: '/'})
});