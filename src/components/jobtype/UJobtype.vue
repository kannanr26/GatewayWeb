<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Jobtype</h1>
  <jobtypeAddForm submit="addJobtype" />

  <ul id="jobtype-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(jobtype, i) in getJobtype"
      :key="i"
      :jobtype="jobtype"
      @delete="deleteJobtype(i)"
      @edit="saveToJobtypes"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import jobtypeAddForm from './jobtypeAddForm.vue'
import ListItem from './jobtypeListItem.vue'

export default {
  name: 'JobtypeList',
  components: {
    jobtypeAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['jobtypes']),
    ...mapGetters(['getJobtype'])
    
  },mounted() {
    console.log(' Created get Jobtype');

    this.$store
      .dispatch('getJobtype')
      .then(() => {
        console.log('Created in get Jobtype');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/jobtype' });
      });
  },
  methods: {
    ...mapActions(['addJobtype','deleteJobtype','saveToJobtypes'])
  }
}
</script>
