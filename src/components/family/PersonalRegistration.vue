<template>
<form   @submit.prevent="submit"  >
  
  <br>
  
  <div class="form-group row">
     <label for="registration" class="col-sm-2 col-form-label">Registration:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Registration..."
          v-model.trim="registration.Number">
       </div>
  </div>

  <div class="form-group row">
     <label for="registrationdate" class="col-sm-2 col-form-label">Date:</label>
       <div class="col-sm-6">
         <input type="Date" class="form-control" 
          v-model.trim="registration.Date">
       </div>
  </div>

  <div class="form-group row">
     <label for="registrationCollected" class="col-sm-2 col-form-label">Collected:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Collected...</option>
            <option v-for="item in regCollected" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>


  <div class="form-group row">
     <label for="registrationEntered" class="col-sm-2 col-form-label">Entered:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Entered...</option>
            <option v-for="item in regEntered" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>


  <div class="form-group row">
     <label for="registrationComputed" class="col-sm-2 col-form-label">Computed:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Computed...</option>
            <option v-for="item in regComputed" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

</form>
</template>

<script>

export default {
  name: 'PersonalRegistration',
  data() {
    return {
      registration: {
        Number: '',
        Date: '',
        Collected: '',
        Entered: '',
        Computed: '',
      },
      loading: false,

regCollected: [
        {
          Name: 'xxx',
          Mobile: '90',
        },
        {
          Name: 'yyy',
          Mobile: '80',
        },
        {
          Name: 'zzz',
          Mobile: '1830',
        },
      ],

regEntered: [
        {
          Name: 'xxx1',
          Mobile: '90',
        },
        {
          Name: 'yyy2',
          Mobile: '80',
        },
        {
          Name: 'zzz3',
          Mobile: '1830',
        },
      ],

regComputed: [
        {
          Name: 'xxx232',
          Mobile: '90',
        },
        {
          Name: 'yyy3432',
          Mobile: '80',
        },
        {
          Name: 'zzz324324',
          Mobile: '1830',
        },
      ],

    };
  },

  components: {
  }, 
  computed: {
    
  },mounted() {
  },
  methods: {
  }
}
</script>
