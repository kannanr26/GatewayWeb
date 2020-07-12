<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ associationCommittee.associationCommitteeName }}
    <div class="float-sm-right" >
    <button
      @click="editAssociationCommittee()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteAssociationCommittee()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<associationCommitteeAddForm
        v-else
        :populateWith="associationCommittee"
        @close="editAssociationCommittee"
      />
    </div>
  </li>
</template>

<script>
import associationCommitteeAddForm  from './associationcommitteeAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    associationCommittee: {
      type: Object,
      required: true
    },
    },
  components: {
    associationCommitteeAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteAssociationCommittee () {
      this.$emit('delete');
    },
    editAssociationCommittee () {
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
