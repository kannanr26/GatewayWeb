<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ district.districtName }}
    <div class="float-sm-right" >
    <button
      @click="editdistrict()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deletedistrict()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<districtAddForm
        v-else
        :populateWith="district"
        @close="editdistrict"
      />
    </div>
  </li>
</template>

<script>
import districtAddForm  from './districtAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    district: {
      type: Object,
      required: true
    },
    },
  components: {
   districtAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deletedistrict () {
      this.$emit('delete');
    },
    editdistrict () {
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
