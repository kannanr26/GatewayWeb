<template>
<ul>
<div class="clearfix">
  <div   class= " w-75 p-2  border border-primary " style="background-color: #eee;"
    v-if="!editing"

  >
   {{ kulam.kulamName }}

    <div class="float-sm-right" >
      <button 
        @click="deleteKulam"
        type="button"
        title="delete"
         >  X
      </button>

      <button
       
        @click="editKulam"
        type="button"
        title="edit"
        
      > Edit
        </button>

    </div>
  </div>
 

  <kulamAddForm
    v-else
    :populateWith="kulam"
    @close="editKulam" />
     </div>
</ul>
</template>

<script>
import kulamAddForm  from './kulamAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    kulam: {
      type: Object,
      required: true
    },
    },
  components: {
    kulamAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteKulam () {
      this.$emit('delete');
    },
    editKulam () {
      this.$emit('edit')
      this.editing = !this.editing
    }
  }
}
</script>


<style>

</style>