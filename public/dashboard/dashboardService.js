angular.module('npsWise').service('dashboardService', function ($q, $http) {
    
    this.getNpsData = function () {
        var deferred = $q.defer();
        $http.get('/api/npsData').then(function(response) {
            var npsNumbers = {
                one: 0,
                two: 0,
                three: 0,
                four: 0,
                five: 0,
                six: 0,
                seven: 0,
                eight: 0,
                nine: 0,
                ten: 0
            };
            response.data.forEach(function(set) {
                for (var i = 1; i < set.npsData.length; i++) {
                    for (var j = 0; j < set.npsData[i].length; j++) {
                        if (set.npsData[i][j] === 1) {
                            npsNumbers.one++;
                        } else if (set.npsData[i][j] === 2) {
                            npsNumbers.two++;
                        } else if (set.npsData[i][j] === 3) {
                            npsNumbers.three++;
                        } else if (set.npsData[i][j] === 4) {
                            npsNumbers.four++;
                        } else if (set.npsData[i][j] === 5) {
                            npsNumbers.five++;
                        } else if (set.npsData[i][j] === 6) {
                            npsNumbers.six++;
                        } else if (set.npsData[i][j] === 7) {
                            npsNumbers.seven++;
                        } else if (set.npsData[i][j] === 8) {
                            npsNumbers.eight++;
                        } else if (set.npsData[i][j] === 9) {
                            npsNumbers.nine++;
                        } else if (set.npsData[i][j] === 10) {
                            npsNumbers.ten++;
                        }
                    }
                }
            })
            deferred.resolve(npsNumbers);
        })
        return deferred.promise;
    }
    
});