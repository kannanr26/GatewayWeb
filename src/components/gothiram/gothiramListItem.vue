<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ gothiram.gothiramName }}
    <div class="float-sm-right" >
    <button
      @click="editGothiram()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteGothiram()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<gothiramAddForm
        v-else
        :populateWith="gothiram"
        @close="editGothiram"
      />
    </div>
  </li>
</template>

<script>
import gothiramAddForm  from './gothiramAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    gothiram: {
      type: Object,
      required: true
    },
    },
  components: {
    gothiramAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteGothiram () {
      this.$emit('delete');
    },
    editGothiram () {
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
