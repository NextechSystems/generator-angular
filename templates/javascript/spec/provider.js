'use strict';

describe('Service: <%= cameledName %>', function () {

  // instantiate service
  var <%= cameledName %>,
    init = function () {
      inject((_<%= cameledName %>_) => {
        <%= cameledName %> = _<%= cameledName %>_;
      });
    };

  // load the service's module
  beforeEach(module('<%= scriptAppName %>'));

  it('should do something', () => {
    init();

    expect(!!<%= cameledName %>).toBe(true);
  });

  it('should be configurable', () => {
    module(function (<%= cameledName %>Provider) {
      <%= cameledName %>Provider.setSalutation('Lorem ipsum');
    });

    init();

    expect(<%= cameledName %>.greet()).toEqual('Lorem ipsum');
  });

});
