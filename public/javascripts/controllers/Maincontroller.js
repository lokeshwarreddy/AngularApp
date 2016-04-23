/**
 * Created by Lokesh Reddy on 4/6/2016.
 */
angular.module('exampleApp').controller('MainController', function ($scope, ZipCodes) {
        $scope.todos = [
            {action: "Get Groceries", complete: false},
            {action: "Call Plumber", complete: false},
            {action: "Buy running shoes", complete: true},
            {action: "Buy flowers", complete: false},
            {action: "Call family", complete: false}
        ]

        $scope.viewFile = function () {
            return $scope.showList ? "listdata" : "tabledata";
        }

        $scope.addNewItem = function (newItem) {
            if (angular.isUndefined(newItem) || angular.isUndefined(newItem.action))
                return;
            $scope.todos.push({
                action: newItem.action + " (" + newItem.action + ")",
                complete: false
            })
        }

        $scope.cities = ["London", "New York", "Paris"];

        $scope.city = "London";

        $scope.getCountry = function (city) {
            switch (city) {
                case 'London':
                    return 'UK';
                case 'New York':
                    return 'USA';
            }
        }

        $scope.$on('zipCodeUpdated', function (event, args) {
            $scope[args.type] = args.zip;
        });

        $scope.setAddress = function (type, zip) {
            ZipCodes.setZipCode(type, zip);
        }

        $scope.copyAddress = function () {
            $scope.zip = $scope.billingZip;
        }

        $scope.reverseText = function () {
            $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
        }

        $scope.changeCase = function () {
            var result = [];
            angular.forEach($scope.data.dataValue.split(""), function (char, index) {
                result.push(index % 2 ? char.toUpperCase() : char.toLowerCase());
            })
            $scope.data.dataValue = result.join("");
        }

        $scope.data = {};
    })
    .controller('firstChildCtrl', function ($scope) {
        $scope.changeCase = function () {
            $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
        }
    })
    .controller('secondChildCtrl', function ($scope) {
        $scope.changeCase = function () {
            $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
        }

        $scope.shiftFour = function () {
            var result = [];
            angular.forEach($scope.data.dataValue.split(""), function (char, index) {
                result.push(index < 4 ? char.toUpperCase() : char);
            });
            $scope.data.dataValue = result.join("");
        }
    })
    .controller('scopelessCtrl', function () {
        this.dataValue = 'Hello, Adam';
        this.reverseText = function () {
            this.dataValue = this.dataValue.split("").reverse().join("");
        }
    })
    .controller('thirdPartyCtrl', function ($scope) {
        $scope.dataValue = true;
        $scope.clickCounter = 0;

        $scope.handleClick = function () {
            $scope.clickCounter++;
        }

        $scope.$watch('dataValue', function (newValue) {
            $('#jqui button').button({
                disabled: !newValue
            })
        })
    })
    .service('ZipCodes', function ($rootScope) {
        return {
            setZipCode: function (type, zip) {
                this[type] = zip;
                $rootScope.$broadcast('zipCodeUpdated', {type: type, zip: zip});
            }
        }
    })