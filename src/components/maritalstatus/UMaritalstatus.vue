<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Maritalstatus</h1>
  <maritalstatusAddForm submit="addMaritalstatus" />

  <ul id="maritalstatus-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(maritalstatus, i) in getMaritalstatus"
      :key="i"
      :maritalstatus="maritalstatus"
      @delete="deleteMaritalstatus(i)"
      @edit="saveToMaritalstatuss"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import maritalstatusAddForm from './maritalstatusAddForm.vue'
import ListItem from './maritalstatusListItem.vue'

export default {
  name: 'MaritalstatusList',
  components: {
    maritalstatusAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['maritalstatuss']),
    ...mapGetters(['getMaritalstatus'])
    
  },mounted() {
    console.log(' Created get Maritalstatus');

    this.$store
      .dispatch('getMaritalstatus')
      .then(() => {
        console.log('Created in get Maritalstatus');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/maritalstatus' });
      });
  },
  methods: {
    ...mapActions(['addMaritalstatus','deleteMaritalstatus','saveToMaritalstatuss'])
  }
}
</script>
