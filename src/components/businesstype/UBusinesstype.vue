<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Businesstype</h1>
  <businesstypeAddForm submit="addBusinesstype" />

  <ul id="businesstype-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(businesstype, i) in getBusinesstype"
      :key="i"
      :businesstype="businesstype"
      @delete="deleteBusinesstype(i)"
      @edit="saveToBusinesstypes"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import businesstypeAddForm from './businesstypeAddForm.vue'
import ListItem from './businesstypeListItem.vue'

export default {
  name: 'BusinesstypeList',
  components: {
    businesstypeAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['businesstypes']),
    ...mapGetters(['getBusinesstype'])
    
  },mounted() {
    console.log(' Created get Businesstype');

    this.$store
      .dispatch('getBusinesstype')
      .then(() => {
        console.log('Created in get Businesstype');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/businesstype' });
      });
  },
  methods: {
    ...mapActions(['addBusinesstype','deleteBusinesstype','saveToBusinesstypes'])
  }
}
</script>
