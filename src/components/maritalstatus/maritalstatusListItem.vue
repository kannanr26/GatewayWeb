<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ maritalStatus.maritalStatusName }}
    <div class="float-sm-right" >
    <button
      @click="editMaritalStatus()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteMaritalStatus()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<maritalStatusAddForm
        v-else
        :populateWith="maritalStatus"
        @close="editMaritalStatus"
      />
    </div>
  </li>
</template>

<script>
import maritalStatusAddForm  from './maritalstatusAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    maritalStatus: {
      type: Object,
      required: true
    },
    },
  components: {
    maritalStatusAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteMaritalStatus () {
      this.$emit('delete');
    },
    editMaritalStatus () {
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
