<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Occupation</h1>
  <occupationAddForm submit="addOccupation" />

  <ul id="occupation-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(occupation, i) in getOccupation"
      :key="i"
      :occupation="occupation"
      @delete="deleteOccupation(i)"
      @edit="saveToOccupations"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import occupationAddForm from './occupationAddForm.vue'
import ListItem from './occupationListItem.vue'

export default {
  name: 'OccupationList',
  components: {
    occupationAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['occupations']),
    ...mapGetters(['getOccupation'])
    
  },mounted() {
    console.log(' Created get Occupation');

    this.$store
      .dispatch('getOccupation')
      .then(() => {
        console.log('Created in get Occupation');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/occupation' });
      });
  },
  methods: {
    ...mapActions(['addOccupation','deleteOccupation','saveToOccupations'])
  }
}
</script>
