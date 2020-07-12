<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ bloodgroup.bloodGroupName }}
    <div class="float-sm-right" >
    <button
      @click="editBloodgroup()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteBloodgroup()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<bloodgroupAddForm
        v-else
        :populateWith="bloodgroup"
        @close="editBloodgroup"
      />
    </div>
  </li>
</template>

<script>
import bloodgroupAddForm  from './bloodgroupAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    bloodgroup: {
      type: Object,
      required: true
    },
    },
  components: {
    bloodgroupAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteBloodgroup () {
      this.$emit('delete');
    },
    editBloodgroup () {
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
