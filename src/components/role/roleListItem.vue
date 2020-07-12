<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ role.roleName }}
    <div class="float-sm-right" >
    <button
      @click="editRole()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteRole()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<roleAddForm
        v-else
        :populateWith="role"
        @close="editRole"
      />
    </div>
  </li>
</template>

<script>
import roleAddForm  from './roleAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    role: {
      type: Object,
      required: true
    },
    },
  components: {
    roleAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteRole () {
      this.$emit('delete');
    },
    editRole () {
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
