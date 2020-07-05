<template>
<ul>
<div class="clearfix">
  <div   class= " w-75 p-2  border border-primary " style="background-color: #eee;"
    v-if="!editing"

  >
   {{ gothiram.gothiramName }}

    <div class="float-sm-right" >


    <button
      @click="editGothiram()"
      class="btn btn-outline-primary border-0 ml-2"
    >
      <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteGothiram()" class="btn btn-outline-danger border-0">
      <span class="fa fa-trash"></span>
    </button>

    </div>
  </div>
 

  <gothiramAddForm
    v-else
    :populateWith="gothiram"
    @close="editGothiram" />
     </div>
</ul>
</template>

<script>
import gothiramAddForm  from './gothiramAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    gothiram: {
      type: Object,
      required: true
    },
    },
  components: {
    gothiramAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteGothiram () {
      this.$emit('delete');
    },
    editGothiram () {
      this.$emit('edit');
      this.editing = !this.editing;
    }
  }
}
</script>


<style>

</style>