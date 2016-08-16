angular.module('npsWise').controller('dashboardCtrl', function ($scope, dashboardService) {
    
    $scope.getNpsData = function () {
        dashboardService.getNpsData().then(function(response) {
            
            var most = 0;
            
            for (var prop in response) {
                if (response.hasOwnProperty(prop) && response[prop] > most) {
                    most = response[prop];
                }
            }
            
            var oneHeight = (response.one / most) * 83;
            if (response.one > 0) {
                document.getElementById("oneBar").style.display = "none";
            }
            document.getElementById("one").style.height = oneHeight + "px";
            
            var twoHeight = (response.two / most) * 83;
            if (response.two > 0) {
                document.getElementById("twoBar").style.display = "none";
            }
            document.getElementById("two").style.height = twoHeight + "px";
            
            var threeHeight = (response.three / most) * 83;
            if (response.three > 0) {
                document.getElementById("threeBar").style.display = "none";
            }
            document.getElementById("three").style.height = threeHeight + "px";
            
            var fourHeight = (response.four / most) * 83;
            if (response.four > 0) {
                document.getElementById("fourBar").style.display = "none";
            }
            document.getElementById("four").style.height = fourHeight + "px";
            
            var fiveHeight = (response.five / most) * 83;
            if (response.five > 0) {
                document.getElementById("fiveBar").style.display = "none";
            }
            document.getElementById("five").style.height = fiveHeight + "px";
            
            var sixHeight = (response.six / most) * 83;
            if (response.six > 0) {
                document.getElementById("sixBar").style.display = "none";
            }
            document.getElementById("six").style.height = sixHeight + "px";
            
            var sevenHeight = (response.seven / most) * 83;
            if (response.seven > 0) {
                document.getElementById("sevenBar").style.display = "none";
            }
            document.getElementById("seven").style.height = sevenHeight + "px";
            
            var eightHeight = (response.eight / most) * 83;
            if (response.eight > 0) {
                document.getElementById("eightBar").style.display = "none";
            }
            document.getElementById("eight").style.height = eightHeight + "px";
            
            var nineHeight = (response.nine / most) * 83;
            if (response.nine > 0) {
                document.getElementById("nineBar").style.display = "none";
            }
            document.getElementById("nine").style.height = nineHeight + "px";
            
            var tenHeight = (response.ten / most) * 83;
            if (response.ten > 0) {
                document.getElementById("tenBar").style.display = "none";
            }
            document.getElementById("ten").style.height = tenHeight + "px";
            
            var bad = response.one + response.two + response.three + response.four + response.five + response.six;
            var medium = response.seven + response.eight;
            var good = response.nine + response.ten;
            var total = bad + good + medium;
            
            $scope.average = Math.round((response.one + response.two * 2 + response.three * 3 + response.four * 4 + response.five * 5 + response.six * 6 + response.seven * 7 + response.eight * 8 + response.nine * 9 + response.ten * 10) / (bad + medium + good));
            
            $scope.responses = response.responses;
            
            
            $scope.badPercent = Math.round((bad / total) * 100);
            $scope.mediumPercent = Math.round((medium / total) * 100);
            $scope.goodPercent = Math.round((good / total) * 100);
            
        })
    }
    
    $scope.getNpsData();
    
})