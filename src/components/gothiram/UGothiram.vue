
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Gothiram</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <gothiramAddForm submit="addGothiram" />

    <ul id="gothiram-list" class = "child1">
      <list-item 
        v-for="(gothiram) in getGothiram"
        :key="gothiram.id"
        :gothiram="gothiram"
        @delete="deleteGothiram(gothiram)"
        @edit="editGothiram"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import gothiramAddForm from './gothiramAddForm.vue'
import ListItem from './gothiramListItem.vue'

export default {
  name: 'GothiramList',
  components: {
    gothiramAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getGothiram'])
    
  },mounted() {
    console.log(' Created get Gothiram');

    this.$store
      .dispatch('getGothirams')
      .then(() => {
        console.log('Created in get Gothiram');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addGothiram','deleteGothiram']),
editGothiram(){
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
