<template>
  <div>
    <!--    <button @click="enableSave">Enable</button>
    <button @click="go()">goto</button>-->
    <vue-wizard ref="wizard" :steps="steps" :onNext="nextClicked" :onBack="backClicked">
      <!--       <form name="form" @submit.prevent="handleFamily">-->
      <div slot="page1">
        <!--  <template src ="./PersonalRegistration.vue" >
        </template> <PersonalRegistration/>-->

        <div class="form-group row">
          <!-- Wizard 1 -->

          <div class="form-group row">
            <label for="registration" class="col-sm-2 col-form-label">Registration:</label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Registration..."
                v-model.trim="familyDetails.registration"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="registrationdate" class="col-sm-2 col-form-label">Date:</label>
            <div class="col-sm-6">
              <input type="Date" class="form-control" v-model.trim="familyDetails.registrationDate" />
            </div>
          </div>

          <div class="form-group row">
            <label for="registrationCollected" class="col-sm-2 col-form-label">Collected:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select">
                <option selected>Select Collected...</option>
                <option
                  v-for="item in familyDetails.operators"
                  :value="item.operatorName"
                  :key="item.operatorName"
                >{{ item.operatorName }}</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="registrationEntered" class="col-sm-2 col-form-label">Entered:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select">
                <option selected>Select Entered...</option>
                <option
                  v-for="item in familyDetails.operators"
                  :value="item.operatorName"
                  :key="item.operatorName"
                >{{ item.operatorName }}</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="registrationComputed" class="col-sm-2 col-form-label">Computed:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select">
                <option selected>Select Computed...</option>
                <option
                  v-for="item in familyDetails.operators"
                  :value="item.operatorName"
                  :key="item.operatorName"
                >{{ item.operatorName }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div slot="page2">
        <!-- Wizard 1 -->
        <input id="step2" v-model="step2" rows="15" />
      </div>
      <div slot="page3"></div>
    </vue-wizard>
  </div>
</template>

<script>
// import { GoodWizard } from '../dist/vue-good-wizard.es.js';
//import PersonalRegistration from '@/components/family/PersonalRegistration';
//import { mapGetters } from 'vuex'

export default {
  name: 'demo',
  data() {
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
          },
        },
      ],
      //  family:'',
      /*operatorCollected:[],
    operatorEntered:[],
    operatorComputered:[],
*/
      familyDetails: '',
    };
  },
  computed: {
    //...mapGetters(['getFamilyDetails'])
  },
  mounted() {
    console.log(' Mount Wizard ');
    this.$store
      .dispatch('getinitializeWizard')
      .then((data) => {
        console.log('Created in get wizard' + data.id);
        this.loading = false;
        this.familyDetails = data;
        console.log(' Mount ' + this.familyDetails.operators[0].operatorName);
        console.log(' Mount ' + this.familyDetails.operators);
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    nextClicked(currentPage) {
      console.log('next clicked', currentPage);
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
    },
  },
  components: {
    //     PersonalRegistration : PersonalRegistration,
  },
};
</script>


