
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add State</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <stateAddForm submit="addState" />

    <ul id="state-list" class = "child1">
      <list-item 
        v-for="(state) in getStates"
        :key="state.id"
        :state="state"
        @delete="deleteState(state)"
        @edit="editState"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex';
import stateAddForm from './stateAddForm.vue'
import ListItem from './stateListItem.vue'

export default {
  name: 'StateList',
  components: {
    stateAddForm,
    ListItem
  }, 
  computed: {
  ...mapGetters(['getStates'])
    
  },mounted() {
    console.log(' Created get State');

    this.$store
      .dispatch('getStates()')
      .then(() => {
        console.log('Created in get States');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addState','deleteState']),
editState(){
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
