<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Caste</h1>
  <casteAddForm submit="addCaste" />

  <ul id="caste-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(caste, i) in getCaste"
      :key="i"
      :caste="caste"
      @delete="deleteCaste(i)"
      @edit="saveToCastes"
    />
  </ul>

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
    //...mapState(['castes']),
    ...mapGetters(['getCaste'])
    
  },mounted() {
    console.log(' Created get Caste');

    this.$store
      .dispatch('getCaste')
      .then(() => {
        console.log('Created in get Caste');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/caste' });
      });
  },
  methods: {
    ...mapActions(['addCaste','deleteCaste','saveToCastes'])
  }
}
</script>
