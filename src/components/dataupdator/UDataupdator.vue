<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Operator Type</h1>
  <dataupdatorAddForm submit="addDataupdator" />

  <ul id="dataupdator-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(dataupdator, i) in getDataupdator"
      :key="i"
      :dataupdator="dataupdator"
      @delete="deleteDataupdator(i)"
      @edit="saveToDataupdators"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import dataupdatorAddForm from './dataupdatorAddForm.vue'
import ListItem from './dataupdatorListItem.vue'

export default {
  name: 'DataupdatorList',
  components: {
    dataupdatorAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['dataupdators']),
    ...mapGetters(['getDataupdator'])
    
  },mounted() {
    console.log(' Created get Dataupdator');

    this.$store
      .dispatch('getDataupdator')
      .then(() => {
        console.log('Created in get Dataupdator');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/dataupdator' });
      });
  },
  methods: {
    ...mapActions(['addDataupdator','deleteDataupdator','saveToDataupdators'])
  }
}
</script>
