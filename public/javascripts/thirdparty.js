/**
 * Created by Lokesh Reddy on 4/21/2016.
 */
$(function () {
    $('#jqui button').button().click(function (e) {
        angular.element(angularRegion).scope().$apply('handleClick()');
    })
})
