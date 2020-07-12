<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ deity.deityName }}
    <div class="float-sm-right" >
    <button
      @click="editDeity()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteDeity()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<deityAddForm
        v-else
        :populateWith="deity"
        @close="editDeity"
      />
    </div>
  </li>
</template>

<script>
import deityAddForm  from './deityAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    deity: {
      type: Object,
      required: true
    },
    },
  components: {
    deityAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteDeity () {
      this.$emit('delete');
    },
    editDeity () {
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
