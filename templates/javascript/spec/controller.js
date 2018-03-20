describe('<%= cameledName %>: ', function () {

    var scope, component, controller, compile, element, componentController;

    var buildUIElement = function () {
        var elementString = '<<%= kebabedName %>></<%= kebabedName %>>';
        element = nxElement.set(elementString);
        element = compile(element)(scope);

        component = componentController('<%= cameledName %>', { $scope: scope });
        controller = element.controller('<%= cameledName %>');
    };

    beforeEach(angular.mock.module('App'));
    beforeEach(angular.mock.module(function ($provide) {
        $provide.factory('Service', () => mockService);
    }));
    beforeEach(inject(function ($rootScope, $compile, _$componentController_) {
        scope = $rootScope.$new();
        compile = $compile;
        componentController = _$componentController_;

        //TODO Initialize stuff here
    }));

    describe('UI Tests: ', function () {
    });

    describe('Functional Tests: ', function () {
    });

});
