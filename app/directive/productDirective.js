angular.module('angularAssessment').directive('productDirective', function() {

    return {
      restrict: 'E',
      templateUrl: './views/product-tmpl.html',
      scope: {
        product: '='
      },
      controller: 'mainCtrl'
    }

  })
