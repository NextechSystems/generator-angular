import template from './<%= cameledName %>.html'
import controller from './<%= cameledName %>.controller'

let <%= cameledName %> = {
    bindings: {
    },
    template,
    controller,
    name: '<%= classedName %>'
}

export default <%= cameledName %>;
