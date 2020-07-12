<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ businesstype.businessName }}
    <div class="float-sm-right" >
    <button
      @click="editBusinesstype()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteBusinesstype()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<businesstypeAddForm
        v-else
        :populateWith="businesstype"
        @close="editBusinesstype"
      />
    </div>
  </li>
</template>

<script>
import businesstypeAddForm  from './businesstypeAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    businesstype: {
      type: Object,
      required: true
    },
    },
  components: {
    businesstypeAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteBusinesstype () {
      this.$emit('delete');
    },
    editBusinesstype () {
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
