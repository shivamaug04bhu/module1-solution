(function(){
    'use strict';
    angular.module("LunchCheck",[])

    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        $scope.message = "";
        $scope.borderColor = "";

        $scope.checkStatus = function(){
            if($scope.message == "" || $scope.message == undefined){
                $scope.borderColor = "ff1111";
                $scope.noMessage = true;
                $scope.Message1 = false;
                $scope.Message2 = false;
            }
            else{
                $scope.borderColor = "29ff08";
                $scope.message = $scope.message.split(",");
                if($scope.message.length>3){
                    $scope.noMessage = false;
                    $scope.Message1 = true;
                    $scope.Message2 = false;
                }else{
                    $scope.noMessage = false;
                    $scope.Message1 = false;
                    $scope.Message2 = true;
                }
            }
        }
    }
})();