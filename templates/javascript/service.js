function <%= cameledName %>Service(<%= cameledName %>Dal) {
    'ngInject';

    var service = {};

    service.getList = function () {
        return <%= cameledName %>Dal.getList();
    };

    return service;
}

export default <%= cameledName %>Service;
