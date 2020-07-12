
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Permission</h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">
    
    <permissionAddForm submit="addPermission" />

    <ul id="permission-list" class = "child1">
      <list-item 
        v-for="(permission) in getPermission"
        :key="permission.id"
        :permission="permission"
        @delete="deletePermission(permission)"
        @edit="editPermission"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import permissionAddForm from './permissionAddForm.vue'
import ListItem from './permissionListItem.vue'

export default {
  name: 'PermissionList',
  components: {
    permissionAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getPermission'])
    
  },mounted() {
    console.log(' Created get Permission');

    this.$store
      .dispatch('getPermissions')
      .then(() => {
        console.log('Created in get Permission');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addPermission','deletePermission']),
editPermission(){
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
