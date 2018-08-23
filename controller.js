var classApp = angular.module("myApp", []);
classApp.controller('weatherCtrl', function ($scope, $http) {
    var vm = $scope;
    vm.channelInfo = {
        heading: "Open Weather API Project",
        subheading1: "MS ANAND",
        subheading2: {
            name: "checkout my github account",
            link: "https://github.com/msanand333",
        }
    };

    $http.get('http://ip-api.com/json').then(function (response) {
        var coordinates = response.data;
        vm.lat = coordinates.lat;
        vm.lon = coordinates.lon;
        //var apiKey = "f25685044cab99c5424955a8456a6430"
        
        var openWeatherURL = "https://api.darksky.net/forecast/0959f17defe032b7f89403ad2834b56a/13.0833,80.2833";

        $http.get(openWeatherURL).then(function (response) {
            var wDetails = response.data;
            vm.summary = wDetails.currently.summary;
            vm.speed = wDetails.currently.windSpeed;
        });

    });
});