<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Relationship</h1>
  <relationshipAddForm submit="addRelationship" />

  <ul id="relationship-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(relationship, i) in getRelationship"
      :key="i"
      :relationship="relationship"
      @delete="deleteRelationship(i)"
      @edit="saveToRelationships"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import relationshipAddForm from './relationshipAddForm.vue'
import ListItem from './relationshipListItem.vue'

export default {
  name: 'RelationshipList',
  components: {
    relationshipAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['relationships']),
    ...mapGetters(['getRelationship'])
    
  },mounted() {
    console.log(' Created get Relationship');

    this.$store
      .dispatch('getRelationship')
      .then(() => {
        console.log('Created in get Relationship');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/relationship' });
      });
  },
  methods: {
    ...mapActions(['addRelationship','deleteRelationship','saveToRelationships'])
  }
}
</script>
