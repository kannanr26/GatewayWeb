<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Role</h1>
  <roleAddForm submit="addRole" />

  <ul id="role-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(role, i) in getRole"
      :key="i"
      :role="role"
      @delete="deleteRole(i)"
      @edit="saveToRoles"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import roleAddForm from './roleAddForm.vue'
import ListItem from './roleListItem.vue'

export default {
  name: 'RoleList',
  components: {
    roleAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['roles']),
    ...mapGetters(['getRole'])
    
  },mounted() {
    console.log(' Created get Role');

    this.$store
      .dispatch('getRole')
      .then(() => {
        console.log('Created in get Role');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/role' });
      });
  },
  methods: {
    ...mapActions(['addRole','deleteRole','saveToRoles'])
  }
}
</script>
