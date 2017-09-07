describe('Service: <%= cameledName %>', function () {

  var <%= cameledName %>Service;

  var mock<%= classedName %>Dal = {};

  // load the service's module
  beforeEach(angular.mock.module('<%= cameledName %>App'));

  // instantiate service
  beforeEach(angular.mock.module(function ($provide) {
        $provide.factory('<%= cameledName %>Dal', () => mock<%= classedName %>Dal);
  }));
  beforeEach(inject(function ($injector) {
    <%= cameledName %>Service = $injector.get('<%= cameledName %>Service');
  }));

  it('should do something', function () {
    expect(false).toBe(true);
  });

});
