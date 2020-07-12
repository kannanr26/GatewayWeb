<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ jobtype.jobName }}
    <div class="float-sm-right" >
    <button
      @click="editJobtype()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteJobtype()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<jobtypeAddForm
        v-else
        :populateWith="jobtype"
        @close="editJobtype"
      />
    </div>
  </li>
</template>

<script>
import jobtypeAddForm  from './jobtypeAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    jobtype: {
      type: Object,
      required: true
    },
    },
  components: {
    jobtypeAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteJobtype () {
      this.$emit('delete');
    },
    editJobtype () {
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
