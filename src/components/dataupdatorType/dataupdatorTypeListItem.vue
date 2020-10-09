<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ dataUpdatorType.operatorTypeName }}
    <div class="float-sm-right" >
    <button
      @click="editDataUpdatorType()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteDataUpdatorType()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<dataUpdatorTypeAddForm
        v-else
        :populateWith="dataUpdatorType"
        @close="editDataUpdatorType"
      />
    </div>
  </li>
</template>

<script>
import dataUpdatorTypeAddForm  from './dataupdatorTypeAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    dataUpdatorType: {
      type: Object,
      required: true
    },
    },
  components: {
    dataUpdatorTypeAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteDataUpdatorType () {
      this.$emit('delete');
    },
    editDataUpdatorType () {
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
