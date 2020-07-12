<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ caste.casteName }}
    <div class="float-sm-right" >
    <button
      @click="editCaste()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteCaste()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<casteAddForm
        v-else
        :populateWith="caste"
        @close="editCaste"
      />
    </div>
  </li>
</template>

<script>
import casteAddForm  from './casteAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    caste: {
      type: Object,
      required: true
    },
    },
  components: {
    casteAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteCaste () {
      this.$emit('delete');
    },
    editCaste () {
      this.$emit('edit')
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
