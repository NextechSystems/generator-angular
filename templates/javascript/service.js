function <%= cameledName %>Service(<%= cameledName %>Dal) {
    'ngInject';

    var service = {};

    service.getList = () => {
        return <%= cameledName %>Dal.getList();
    };

    return service;
}

export default <%= cameledName %>Service;
