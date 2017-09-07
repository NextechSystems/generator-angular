function <%= cameledName %>Dal(baseDal) {
    'ngInject';

    return {
        getList: function (){
            return baseDal.http({
                method: 'GET',
                url: '',
                params:{}
            });
        }
    };
}

export default <%= cameledName %>Dal;