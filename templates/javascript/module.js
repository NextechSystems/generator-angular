'use strict';

import <%= cameledName %>Config from './<%= cameledName %>.config';

export default angular.module('<%= cameledName %>App', [
    'ui.router'
])
.config(<%= cameledName %>Config)
.name;
