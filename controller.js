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
        var apiKey = "d09ed5268a212e0873b62f503e6fa146";

        var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+vm.lat+"&lon="+vm.lon+"&appid="+apiKey;

        $http.get(openWeatherURL).then(function (response) {
            var wDetails = response.data;
            vm.description = wDetails.weather[0].description;
            vm.speed =(2.237* wDetails.wind.speed).toFixed(1)+"mph";
            vm.name=wDetails.name;
            vm.temp=wDetails.main.temp;
            vm.ftemp=(vm.temp*(9/5)-459.67).toFixed(1)+" (F)";
            vm.ctemp=(vm.temp-273).toFixed(1)+" (C)";
            vm.icon="http://openweathermap.org/img/w/"+wDetails.weather[0].icon+".png";
            
            switch(vm.description){
                case 'scattered clouds1':{
                    vm.weatherBackground={
                        "background":"url('http://avante.biz/wp-content/uploads/Clouds-Desktop-Wallpapers/Clouds-Desktop-Wallpapers-045.jpg')",
                        "background-size":"cover"
                    };
                    break;

                
                }
                default:
                vm.weatherBackground={
                    "background":"url('https://i.ytimg.com/vi/BQxBh-Oen1w/maxresdefault.jpg')",
                    "background-size":"cover"
                };
            }

        });

    });
});