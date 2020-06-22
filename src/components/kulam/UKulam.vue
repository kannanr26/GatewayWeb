<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Kulam</h1>
  <kulamAddForm submit="addKulam" />

  <ul id="kulam-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(kulam) in getKulams"
      :key="kulam.id"
      :kulam="kulam"
      @delete="deleteKulam(kulam)"
      @edit="saveToKulams"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import kulamAddForm from './kulamAddForm.vue'
import ListItem from './ListItem.vue'

export default {
  name: 'KulamList',
  components: {
    kulamAddForm,
    ListItem
  }, 
  computed: {
    ...mapGetters(['getKulams'])
    
  },mounted() {
    console.log(' Created get Kulam');

    this.$store
      .dispatch('getKulam')
      .then(() => {
        console.log('Created in get Kulam');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addKulam','deleteKulam','saveToKulams'])
  }
}
</script>
