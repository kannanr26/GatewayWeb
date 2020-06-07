<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Gothiram</h1>
  <gothiramAddForm submit="addGothiram" />

  <ul id="gothiram-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(gothiram, i) in getGothirams"
      :key="i"
      :gothiram="gothiram"
      @delete="deleteGothiram(i)"
      @edit="saveToGothirams"
    />
  </ul>

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
    //...mapState(['gothirams']),
    ...mapGetters(['getGothirams'])
    
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
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/gothiram' });
      });
  },
  methods: {
    ...mapActions(['addGothiram','deleteGothiram','saveToGothirams'])
  }
}
</script>
