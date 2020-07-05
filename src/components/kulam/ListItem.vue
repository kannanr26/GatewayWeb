<template>
<ul>
<div class="clearfix">
  <div   class= " w-75 p-2  border border-primary " style="background-color: #eee;"
    v-if="!editing"

  >
   {{ kulam.kulamName }}

    <div class="float-sm-right" >


    <button
      @click="editKulam()"
      class="btn btn-outline-primary border-0 ml-2"
    >
      <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteKulam()" class="btn btn-outline-danger border-0">
      <span class="fa fa-trash"></span>
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
      this.$emit('edit');
      this.editing = !this.editing;
    }
  }
}
</script>


<style>

</style>