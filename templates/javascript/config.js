function <%= cameledName %>Config($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/<%= cameledName %>');

    $stateProvider
        .state('<%= cameledName %>', {
            url: '/<%= cameledName %>',
            template: '<<%= name %>></<%= name %>>'
        });
}

export default <%= cameledName %>Config;
