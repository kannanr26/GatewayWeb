<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Associationcommittee</h1>
  <associationcommitteeAddForm submit="addAssociationcommittee" />

  <ul id="associationcommittee-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(associationcommittee, i) in getAssociationcommittee"
      :key="i"
      :associationcommittee="associationcommittee"
      @delete="deleteAssociationcommittee(i)"
      @edit="saveToAssociationcommittees"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import associationcommitteeAddForm from './associationcommitteeAddForm.vue'
import ListItem from './associationcommitteeListItem.vue'

export default {
  name: 'AssociationcommitteeList',
  components: {
    associationcommitteeAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['associationcommittees']),
    ...mapGetters(['getAssociationcommittee'])
    
  },mounted() {
    console.log(' Created get Associationcommittee');

    this.$store
      .dispatch('getAssociationcommittee')
      .then(() => {
        console.log('Created in get Associationcommittee');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/associationcommittee' });
      });
  },
  methods: {
    ...mapActions(['addAssociationcommittee','deleteAssociationcommittee','saveToAssociationcommittees'])
  }
}
</script>
