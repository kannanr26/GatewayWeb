
<template>

<form @submit.prevent="submitCountry" >

  <div  class="flex flex-grow justify-center" :class="{ 'sm:flex-grow-1': populateWith.empty }" >
     &nbsp;&nbsp;
      <input  class=" w-75 p-3 rounded border border-success justify-center "
        placeholder="Add Country..."
        v-model.trim="country.countryName"
      >
    &nbsp;&nbsp;

    <button 
      type="submit"
      title="save"
      class=" bg-white  flex-grow active:bg-green-800 text-green-500  border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'" >
        {{ populateWith.empty ? 'Add' : 'Save' }}
    </button>

    <button
      v-if="!populateWith.empty"
      @click="close"
      type="button"
      title="cancel"
      class=" bg-white active:bg-green-800 text-green-500  border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'" >
        Cancel
    </button>
</div>
</form>
</template>


<script>
export default {
  name: 'countryAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data () {
    return {
      country: {
        countryName: '',
        
      }
    }
  },
  methods: {
    clearForm () {
      this.country = {
        countryName: ''
      }
    },
    submitCountry () {
      if (this.country.countryName !== '') {
        //this.$emit('submit', this.country)
 
        this.saved();
        this.$store
        .dispatch('addCountry', this.country)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/country' });
        });

        this.clearForm()
        this.close()
      }
    },
    close () {
      this.$emit('close')
      this.isEditing = false;
    },
    saved () {
      if (!this.country.empty) {
        this.populateWith.countryName =  this.country.countryName;
      }
    },
  },
  created () {
    if (!this.populateWith.empty) {
      this.country =  Object.assign({}, this.populateWith);
      //this.country = this.populateWith
    }
  }
}
</script>

<style scoped>
.border-3 {
    border-width:2px !important;
}
</style>
