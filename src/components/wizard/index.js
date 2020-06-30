import Wizard from './Wizard.vue';

var WizardPlugin = {
  install: function(Vue) {
    Vue.component(Wizard.name, Wizard);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WizardPlugin);
}

export default WizardPlugin;
export { Wizard };
