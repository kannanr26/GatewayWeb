
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Caste</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <casteAddForm submit="addCaste" />

    <ul id="caste-list" class = "child1">
      <list-item 
        v-for="(caste) in getCaste"
        :key="caste.id"
        :caste="caste"
        @delete="deleteCaste(caste)"
        @edit="editCaste"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import casteAddForm from './casteAddForm.vue'
import ListItem from './casteListItem.vue'

export default {
  name: 'CasteList',
  components: {
    casteAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getCaste'])
    
  },mounted() {
    console.log(' Created get Caste');

    this.$store
      .dispatch('getCastes')
      .then(() => {
        console.log('Created in get Caste');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addCaste','deleteCaste']),
editCaste(){
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
