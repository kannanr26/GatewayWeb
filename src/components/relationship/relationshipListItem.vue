<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ relationship.relationshipName }}
    <div class="float-sm-right" >
    <button
      @click="editRelationship()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteRelationship()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<relationshipAddForm
        v-else
        :populateWith="relationship"
        @close="editRelationship"
      />
    </div>
  </li>
</template>

<script>
import relationshipAddForm  from './relationshipAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    relationship: {
      type: Object,
      required: true
    },
    },
  components: {
    relationshipAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteRelationship () {
      this.$emit('delete');
    },
    editRelationship () {
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
