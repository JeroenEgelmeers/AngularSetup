/**
 * Created by JEGELMEE on 18-11-2016.
 */

angular.module('myApp').controller('MainController', MainController);

function MainController() {
    var vm = this;

    vm.pageTitle = "AngularJS web application";
    vm.pageDescription = "To make a quick start for your webapp!";
}