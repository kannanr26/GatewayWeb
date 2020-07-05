<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Country</h1>
  <countryAddForm submit="addCountry" />

  <ul id="country-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(country, i) in getCountry"
      :key="i"
      :country="country"
      @delete="deleteCountry(i)"
      @edit="saveToCountrys"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import countryAddForm from './countryAddForm.vue'
import ListItem from './countryListItem.vue'

export default {
  name: 'CountryList',
  components: {
    countryAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['countrys']),
    ...mapGetters(['getCountry'])
    
  },mounted() {
    console.log(' Created get Country');

    this.$store
      .dispatch('getCountry')
      .then(() => {
        console.log('Created in get Country');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/country' });
      });
  },
  methods: {
    ...mapActions(['addCountry','deleteCountry','saveToCountrys'])
  }
}
</script>
