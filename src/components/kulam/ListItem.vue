<template> 
<li class="my-2 p-2 px-2">


<div class="clearfix">
  <div 
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
</li>
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

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
}


</style>
