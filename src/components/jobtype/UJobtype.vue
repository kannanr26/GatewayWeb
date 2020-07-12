
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Jobtype</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <jobtypeAddForm submit="addJobtype" />

    <ul id="jobtype-list" class = "child1">
      <list-item 
        v-for="(jobtype) in getJobtype"
        :key="jobtype.id"
        :jobtype="jobtype"
        @delete="deleteJobtype(jobtype)"
        @edit="editJobtype"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import jobtypeAddForm from './jobtypeAddForm.vue'
import ListItem from './jobtypeListItem.vue'

export default {
  name: 'JobtypeList',
  components: {
    jobtypeAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getJobtype'])
    
  },mounted() {
    console.log(' Created get Jobtype');

    this.$store
      .dispatch('getJobtypes')
      .then(() => {
        console.log('Created in get Jobtype');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addJobtype','deleteJobtype']),
editJobtype(){
}    
}
}
</script>

<style scoped>


.child1{
  border: 2px;
  width: 100%;
  padding:10px;  
  max-height: 200px;
   overflow-y: scroll;
   
}



</style>
