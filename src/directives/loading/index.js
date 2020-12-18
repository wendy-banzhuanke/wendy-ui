import directive from './directive'

export default {
  ...directive,
  install: Vue => Vue.directive(directive.name, directive),
}
