import GoodWizard from './Wizard.vue';

var GoodWizardPlugin = {
  install: function(Vue) {
    Vue.component(GoodWizard.name, GoodWizard);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GoodWizardPlugin);
}

export default GoodWizardPlugin;
export { GoodWizard };
