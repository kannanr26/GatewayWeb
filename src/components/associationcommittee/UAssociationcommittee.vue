
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add AssociationCommittee</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <associationCommitteeAddForm submit="addAssociationCommittee" />

      <ul id="associationCommittee-list" class="child1">
        <list-item
          v-for="(associationCommittee) in getAssociationCommittee"
          :key="associationCommittee.id"
          :associationCommittee="associationCommittee"
          @delete="deleteAssociationCommittee(associationCommittee)"
          @edit="editAssociationCommittee"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import associationCommitteeAddForm from './associationcommitteeAddForm.vue';
import ListItem from './associationcommitteeListItem.vue';

export default {
  name: 'AssociationCommitteeList',
  components: {
    associationCommitteeAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getAssociationCommittee']),
  },
  mounted() {
    this.$store
      .dispatch('getAssociationCommittees')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addAssociationCommittee', 'deleteAssociationCommittee']),
    editAssociationCommittee() {},
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
