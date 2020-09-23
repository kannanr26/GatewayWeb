<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ states.stateName }}
    <div class="float-sm-right" >
    <button
      @click="editStates()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteStates()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<stateAddForm
        v-else
        :populateWith="states"
        @close="editStates"
      />
    </div>
  </li>
</template>

<script>
import stateAddForm  from './stateAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    states: {
      type: Object,
      required: true
    },
    },
  components: {
    stateAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteStates () {
      this.$emit('delete');
    },
    editStates () {
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
