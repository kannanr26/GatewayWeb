<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ permission.permissionName }}
    <div class="float-sm-right" >
    <button
      @click="editPermission()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deletePermission()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<permissionAddForm
        v-else
        :populateWith="permission"
        @close="editPermission"
      />
    </div>
  </li>
</template>

<script>
import permissionAddForm  from './permissionAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    permission: {
      type: Object,
      required: true
    },
    },
  components: {
    permissionAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deletePermission () {
      this.$emit('delete');
    },
    editPermission () {
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
