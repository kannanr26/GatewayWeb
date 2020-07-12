<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add MaritalStatus</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <maritalStatusAddForm submit="addMaritalStatus" />

    <ul id="maritalStatus-list" class = "child1">
      <list-item 
        v-for="(maritalStatus) in getMaritalStatus"
        :key="maritalStatus.id"
        :maritalStatus="maritalStatus"
        @delete="deleteMaritalStatus(maritalStatus)"
        @edit="editMaritalStatus"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import maritalStatusAddForm from './maritalstatusAddForm.vue'
import ListItem from './maritalstatusListItem.vue'

export default {
  name: 'MaritalStatusList',
  components: {
    maritalStatusAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getMaritalStatus'])
    
  },mounted() {
    console.log(' Created get MaritalStatus');

    this.$store
      .dispatch('getMaritalStatuss')
      .then(() => {
        console.log('Created in get MaritalStatus');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addMaritalStatus','deleteMaritalStatus']),
editMaritalStatus(){
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
