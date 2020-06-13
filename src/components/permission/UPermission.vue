<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Permission</h1>
  <permissionAddForm submit="addPermission" />

  <ul id="permission-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(permission, i) in getPermission"
      :key="i"
      :permission="permission"
      @delete="deletePermission(i)"
      @edit="saveToPermissions"
    />
  </ul>

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
    //...mapState(['permissions']),
    ...mapGetters(['getPermission'])
    
  },mounted() {
    console.log(' Created get Permission');

    this.$store
      .dispatch('getPermission')
      .then(() => {
        console.log('Created in get Permission');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/permission' });
      });
  },
  methods: {
    ...mapActions(['addPermission','deletePermission','saveToPermissions'])
  }
}
</script>
