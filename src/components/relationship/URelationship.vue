
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Relationship</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <relationshipAddForm submit="addRelationship" />

      <ul id="relationship-list" class="child1">
        <list-item
          v-for="(relationship) in getRelationship"
          :key="relationship.id"
          :relationship="relationship"
          @delete="deleteRelationship(relationship)"
          @edit="editRelationship"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import relationshipAddForm from './relationshipAddForm.vue';
import ListItem from './relationshipListItem.vue';

export default {
  name: 'RelationshipList',
  components: {
    relationshipAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getRelationship']),
  },
  mounted() {
    this.$store
      .dispatch('getRelationships')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addRelationship', 'deleteRelationship']),
    editRelationship() {},
  },
};
</script>

<style scoped>
.child1 {
  border: 2px;
  width: 100%;
  padding: 10px;
  max-height: 200px;
  overflow-y: scroll;
}
</style>
