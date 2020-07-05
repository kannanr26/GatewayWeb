<template>
<ul>
<div class="clearfix">
  <div   class= " w-75 p-2  border border-primary " style="background-color: #eee;"
    v-if="!editing"

  >
   {{ maritalstatus.maritalStatusName }}

    <div class="float-sm-right" >
      <button 
        @click="deleteMaritalstatus"
        type="button"
        title="delete"
         >  X
      </button>

      <button
       
        @click="editMaritalstatus"
        type="button"
        title="edit"
        
      > 
        <svg aria-hidden="true" 
            data-prefix="fas" 
            data-icon="pen" 
            class="svg-inline--fa fa-pen fa-w-16" 
            maritalstatus="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-380 -380 1280 1280">
            <path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
          </svg>
        </button>

    </div>
  </div>
 

  <maritalstatusAddForm
    v-else
    :populateWith="maritalstatus"
    @close="editMaritalstatus" />
     </div>
</ul>
</template>

<script>
import maritalstatusAddForm  from './maritalstatusAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    maritalstatus: {
      type: Object,
      required: true
    },
    },
  components: {
    maritalstatusAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteMaritalstatus () {
    //  this.$emit('delete')
       this.$store
        .dispatch('deleteMaritalstatus', this.maritalstatus)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/maritalstatus' });
        });
    },
    editMaritalstatus () {
      this.$emit('edit')
      this.editing = !this.editing
    }
  }
}
</script>


<style>

</style>