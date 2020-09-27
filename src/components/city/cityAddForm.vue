<template>
  <form @submit.prevent="submitCity">
    <div class="flex flex-grow justify-center" :class="{ 'sm:flex-grow-1': populateWith.empty }">
      &nbsp;&nbsp;
      <input
        class="w-75 p-3 rounded border border-success justify-center"
        placeholder="Add Area.."
        v-model.trim="city.cityName"
      />

      <input
        class="w-75 p-3 rounded border border-success justify-center"
        placeholder="Add Pincode.." list="pinlist"
        v-model.trim="city.pincode"
      />

          <datalist id="pinlist">
             <option v-for="item in getPincodes" :key="item" :value="item" />
    </datalist>


      &nbsp;&nbsp;
      <button
        type="submit"
        title="save"
        class="bg-white flex-grow active:bg-green-800 text-green-500 border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
        :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'"
      >{{ populateWith.empty ? 'Add' : 'Save' }}</button>

      <button
        v-if="!populateWith.empty"
        @click="close"
        type="button"
        title="cancel"
        class="bg-white active:bg-green-800 text-green-500 border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
        :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'"
      >Cancel</button>
    </div>
  </form>
</template>


<script>
import {  mapGetters } from 'vuex';

export default {
  name: 'cityAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  computed: {
    ...mapGetters(['getDistrictSelected','getPincodes'])
  
  },
  data() {
    return {
      city: {
        cityName: '',
        pincode:''
      },
    };
  },
mounted() {
  console.log(' Mount City ');

      this.$store
      .dispatch('getPincode')
      .then(() => {
        console.log('Created in get pin');       
      })
      .catch(() => {
        this.loading = false;
      });
       this.loading = false;
  },
 
 
 methods: {
    
    submitCity() {
      this.loading = true;
      this.city.district= this.$store.getters.getDistrictSelected;
      this.city.state= this.$store.getters.getStateSelected;
      this.city.country= this.$store.getters.getCountrySelected;
      if (this.city.cityName !== '' && this.city.pincode !== '') {
        this.$store
        .dispatch('addCity', this.city)
        .then(() => {
          this.saved();
          if (!this.isEditing) 
            this.clearForm();
        })
        .catch(() => {
          this.isEditing = false;
        });

        this.loading = false;
        this.close()
      }
    },
    clearForm() {
      this.city = {
        cityName: ''
      };
//      this.isCountrySelected=false;
    },

    close() {
      this.$emit('close');
      this.isEditing = false;
    },
    saved() {
      if (!this.city.empty) {
        this.populateWith.cityName = this.city.cityName;
      }
    }
  },
  created() {
    if (!this.populateWith.empty) {
      this.city = Object.assign({}, this.populateWith);
      //this.country = this.populateWith
    }
  }
}
</script>

<style scoped>
.border-3 {
  border-width: 2px !important;
}
</style>
