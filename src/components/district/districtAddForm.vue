<template>
  <form @submit.prevent="submitDistrict">
    <div class="flex flex-grow justify-center" :class="{ 'sm:flex-grow-1': populateWith.empty }">
      &nbsp;&nbsp;
      <input
        class="w-75 p-3 rounded border border-success justify-center"
        placeholder="Add District.."
        v-model.trim="district.districtName"
      />

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
  name: 'districtAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  computed: {
    ...mapGetters(['getStateSelected'])
  
  },
  data() {
    return {
      district: {
        districtName: ''
      },
    };
  },

 methods: {
    
    submitDistrict() {
      this.loading = true;
      this.district.stateId= this.$store.getters.getStateSelected.id;
      if (this.district.districtName !== '') {
        this.$store
        .dispatch('addDistrict', this.district)
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
      this.district = {
        districtName: ''
      };
//      this.isCountrySelected=false;
    },

    close() {
      this.$emit('close');
      this.isEditing = false;
    },
    saved() {
      if (!this.district.empty) {
        this.populateWith.districtName = this.district.districtName;
      }
    }
  },
  created() {
    if (!this.populateWith.empty) {
      this.district = Object.assign({}, this.populateWith);
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
