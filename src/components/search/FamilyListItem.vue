<template>
<li class="my-2 p-2 px-2">
<!--<div class="clearfix">
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


    </div>-->
<div class="clearfix">
            <input type="text" readonly class="form-control" v-model.trim="familyDetails.registrationNumber" />
            <input type="text" readonly class="form-control" v-model.trim="familyDetails.familyName" />
  <div class="float-sm-right" >
    <button
      @click="viewPerson()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-child"></span>
    </button>
    <button
      @click="viewDetails()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa-home"></span>
    </button>
       <button
      @click="viewAddress()"
      class="btn btn-outline-primary border-0 ml-2"
    >
     <span class="fa fa--address-book-o"></span>
    </button>

</div>


  </li>
</template>

<script>

export default {
  name: 'ListItem',
  props: {
    familyList: {
      type: Object,
      required: true
    },
    },
  components: {
    
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
