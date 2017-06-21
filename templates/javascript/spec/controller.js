'use strict';

describe('<%= cameledName %>: ', function () {

  var scope, component, controller;

  beforeEach(angular.mock.module('<%= scriptAppName %>'));

  beforeEach(inject(function ($controller, $rootScope, _$componentController_) {
    scope = $rootScope.$new();

    element = angular.element('<<%= name %>></<%= name %>>');
    element = $compile(element)(scope);

    component = _$componentController_('<%= cameledName %>', { $scope: scope });
    controller = element.controller('<%= cameledName %>');
  }));

  describe('UI Tests: ', function () {
  });

  describe('Functional Tests: ', function () {
  });

});
