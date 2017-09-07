import <%= cameledName %>Config from './<%= cameledName %>.config';
import <%= cameledName %>Service from './services/<%= cameledName %>.service';
import <%= cameledName %>Dal from './dal/<%= cameledName %>.dal';

export default angular.module('<%= cameledName %>App', [
    'ui.router',
    'BaseDalModule'
])
.config(<%= cameledName %>Config)
.factory(<%= cameledName %>Service.name, <%= cameledName %>Service)
.factory(<%= cameledName %>Dal.name, <%= cameledName %>Dal)
.name;
