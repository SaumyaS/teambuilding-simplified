(function(){

  // data in the case of method 1 where there is no json call
  // var data = {
  //   name: "test Company",
  //   slogan: "testing placeholder slogan"
  // };

  var app = angular.module('myCompany', []);

  // 1st method not involving a json call
  // app.controller('CompanyController', function() {
  //   this.information = data;
  // });

  app.controller('CompanyController', [ "$http", function($http) {
      //make this a variable so we can use it in methods
      var company = this;
      //initialize products to an empty array so no errors occure on loading
      //data will be loaded in real time so this is neccessary
      company.products = [];


      //set-up http get request to json data and assign it to information
      //upon sucess of getting json file data (the json file) is passed into a fucntion that assigns it to
      //company.information
      $http.get('company-information.json').success( function(data) {
        company.information = data;
      });

      $http.get('company-products.json').success( function(data) {
        company.products = data;
      });
    
    }]);

})();
