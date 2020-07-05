<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Bloodgroup</h1>
  <bloodgroupAddForm submit="addBloodgroup" />

  <ul id="bloodgroup-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(bloodgroup, i) in getBloodgroup"
      :key="i"
      :bloodgroup="bloodgroup"
      @delete="deleteBloodgroup(i)"
      @edit="saveToBloodgroups"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import bloodgroupAddForm from './bloodgroupAddForm.vue'
import ListItem from './bloodgroupListItem.vue'

export default {
  name: 'BloodgroupList',
  components: {
    bloodgroupAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['bloodgroups']),
    ...mapGetters(['getBloodgroup'])
    
  },mounted() {
    console.log(' Created get Bloodgroup');

    this.$store
      .dispatch('getBloodgroup')
      .then(() => {
        console.log('Created in get Bloodgroup');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/bloodgroup' });
      });
  },
  methods: {
    ...mapActions(['addBloodgroup','deleteBloodgroup','saveToBloodgroups'])
  }
}
</script>
