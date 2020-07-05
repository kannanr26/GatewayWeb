<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Gothiram</h1>
  <gothiramAddForm submit="addGothiram" />

  <ul id="gothiram-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(gothiram) in getGothirams"
      :key="gothiram.id"
      :gothiram="gothiram"
      @delete="deleteGothiram(gothiram)"
      @edit="editGothiram"
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
    ...mapGetters(['getGothirams'])
    
  },mounted() {
    this.$store
      .dispatch('getGothirams')
      .then(() => {
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
