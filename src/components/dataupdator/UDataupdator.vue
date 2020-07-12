<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add DataUpdator</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <dataUpdatorAddForm submit="addDataUpdator" />

    <ul id="dataUpdator-list" class = "child1">
      <list-item 
        v-for="(dataUpdator) in getDataUpdator"
        :key="dataUpdator.id"
        :dataUpdator="dataUpdator"
        @delete="deleteDataUpdator(dataUpdator)"
        @edit="editDataUpdator"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import dataUpdatorAddForm from './dataupdatorAddForm.vue'
import ListItem from './dataupdatorListItem.vue'

export default {
  name: 'DataUpdatorList',
  components: {
    dataUpdatorAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getDataUpdator'])
    
  },mounted() {
    console.log(' Created get DataUpdator');

    this.$store
      .dispatch('getDataUpdators')
      .then(() => {
        console.log('Created in get DataUpdator');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addDataUpdator','deleteDataUpdator']),
editDataUpdator(){
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
