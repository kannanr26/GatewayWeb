<template>
<ul>
<div class="clearfix">
  <div   class= " w-75 p-2  border border-primary " style="background-color: #eee;"
    v-if="!editing"

  >
   {{ country.countryName }}

    <div class="float-sm-right" >
      <button 
        @click="deleteCountry"
        type="button"
        title="delete"
         >  X
      </button>

      <button
       
        @click="editCountry"
        type="button"
        title="edit"
        
      > 
        <svg aria-hidden="true" 
            data-prefix="fas" 
            data-icon="pen" 
            class="svg-inline--fa fa-pen fa-w-16" 
            country="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-380 -380 1280 1280">
            <path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
          </svg>
        </button>

    </div>
  </div>
 

  <countryAddForm
    v-else
    :populateWith="country"
    @close="editCountry" />
     </div>
</ul>
</template>

<script>
import countryAddForm  from './countryAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    country: {
      type: Object,
      required: true
    },
    },
  components: {
    countryAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteCountry () {
    //  this.$emit('delete')
       this.$store
        .dispatch('deleteCountry', this.country)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/country' });
        });
    },
    editCountry () {
      this.$emit('edit')
      this.editing = !this.editing
    }
  }
}
</script>


<style>

</style>