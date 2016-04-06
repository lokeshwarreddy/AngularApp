/**
 * Created by Lokesh Reddy on 4/6/2016.
 */
angular.module('exampleApp').controller('MainController', function ($scope) {
    $scope.todos = [
        {action: "Get Groceries", complete: false},
        {action: "Call Plumber", complete: false},
        {action: "Buy running shoes", complete: true},
        {action: "Buy flowers", complete: false},
        {action: "Call family", complete: false}
    ]
})