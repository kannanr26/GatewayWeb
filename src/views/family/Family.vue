<template>
  <div>
    <button @click="enableSave">Enable</button>
    <button @click="go()">goto</button>
    <vue-wizard
      ref="wizard"
      :steps="steps"
      :onNext="nextClicked" 
      :onBack="backClicked">
      <div slot="page1">
    <!--  <template src ="./PersonalRegistration.vue" >
    </template> <PersonalRegistration/>-->
     
     <div class="form-group row">
     <label for="registration" class="col-sm-2 col-form-label">
       Registration:</label>
     </div>
     
        </div>
      <div slot="page2">
        <input
        id="step2"
        v-model="step2"
        rows="15"
        />
        </div>
      <div slot="page3">
      </div>
    </vue-wizard>
  </div>
</template>

<script>
// import { GoodWizard } from '../dist/vue-good-wizard.es.js';
import PersonalRegistration from '@/components/family/PersonalRegistration';
export default {
  name: 'demo',
  data(){
    return {
      step1: '',
      step2: '',
      cStep: 1,
      steps: [
        {
          label: 'Select Items',
          slot: 'page1',
        },
        {
          label: 'Add Constraints',
          slot: 'page2',
        },
        {
          label: 'Review',
          slot: 'page3',
        },
        {
          label: 'Apply',
          slot: 'page4',
          options: {
            nextDisabled: true,
          }
        }
      ],
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    },
    enableSave() {
      this.steps[3].options.nextDisabled = false;
    },
    go() {
      this.$refs.wizard.goTo(this.cStep++);
    }
  },
   components: {
     PersonalRegistration : PersonalRegistration,
   }
};
</script>


