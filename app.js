angular.module('infoscreenApp', [])
.controller('infoscreenCtrl', function ($scope, $http) {
    $scope.data = {};
    
    $scope.submit = function () {
        $('#loader').removeClass('hidden');
        var arr = {};
        angular.forEach($scope.data, function (value, name) {
            if ($scope.form.hasOwnProperty(name)) {
                this[name] = value;
            }
        }, arr);
        $http({
            data: arr
            ,headers: {
                'Content-Type': 'application/json'
            }
            ,method: 'POST'
            ,url: 'http://wsjohrun2:8380/TinglysingInfoskjermWS/infoskjerm/sett'
        }).success(function (result) {
            console.log(result);
            $scope.form.$setPristine();
            $('#loader').addClass('hidden');
        });
    };
    
    $http({
        data: []
        ,headers: {
            'Content-Type': 'application/json'
        }
        ,method: 'GET'
        ,url: 'http://wsjohrun2:8380/TinglysingInfoskjermWS/infoskjerm/hent'
    }).success(function (result) {
        $scope.data = result;
        $('#loader').addClass('hidden');
    });
});