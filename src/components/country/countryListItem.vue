<template>
<li class="my-2 p-2 px-2">
<div class="clearfix">
  <div 
    v-if="!editing"
  >
   {{ country.countryName }}
    <div class="float-sm-right" >
    <button
      @click="editCountry()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-edit"></span>
    </button>
    <button @click="deleteCountry()" class="btn btn-outline-danger border-0">
     <span class="fa fa-trash"></span>
    </button>
</div>
</div>

<countryAddForm
        v-else
        :populateWith="country"
        @close="editCountry"
      />
    </div>
  </li>
</template>

<script>
import countryAddForm  from './countryAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    country: {
      type: Object,
      required: true
    },
    },
  components: {
    countryAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteCountry () {
      this.$emit('delete');
    },
    editCountry () {
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
