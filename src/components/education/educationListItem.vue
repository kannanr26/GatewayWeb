<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ education.educationName }}
    <div class="float-sm-right" >
    <button
      @click="editEducation()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteEducation()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<educationAddForm
        v-else
        :populateWith="education"
        @close="editEducation"
      />
    </div>
  </li>
</template>

<script>
import educationAddForm  from './educationAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    education: {
      type: Object,
      required: true
    },
    },
  components: {
    educationAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteEducation () {
      this.$emit('delete');
    },
    editEducation () {
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
