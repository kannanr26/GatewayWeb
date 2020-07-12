
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Deity</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <deityAddForm submit="addDeity" />

    <ul id="deity-list" class = "child1">
      <list-item 
        v-for="(deity) in getDeity"
        :key="deity.id"
        :deity="deity"
        @delete="deleteDeity(deity)"
        @edit="editDeity"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import deityAddForm from './deityAddForm.vue'
import ListItem from './deityListItem.vue'

export default {
  name: 'DeityList',
  components: {
    deityAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getDeity'])
    
  },mounted() {
    console.log(' Created get Deity');

    this.$store
      .dispatch('getDeitys')
      .then(() => {
        console.log('Created in get Deity');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addDeity','deleteDeity']),
editDeity(){
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
