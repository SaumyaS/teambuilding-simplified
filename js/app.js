(function(){

  var data = {
    name: "test Company",
    slogan: "testing placeholder slogan"
  };

  var app = angular.module('myCompany', []);

  app.controller('CompanyController', function() {
    this.information = data;
  });

})();
