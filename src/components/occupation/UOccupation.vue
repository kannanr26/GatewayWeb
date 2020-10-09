
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Occupation</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <occupationAddForm submit="addOccupation" />

      <ul id="occupation-list" class="child1">
        <list-item
          v-for="(occupation) in getOccupations"
          :key="occupation.id"
          :occupation="occupation"
          @delete="deleteOccupation(occupation)"
          @edit="editOccupation"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import occupationAddForm from './occupationAddForm.vue';
import ListItem from './occupationListItem.vue';

export default {
  name: 'OccupationList',
  components: {
    occupationAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getOccupations']),
  },
  mounted() {
    this.$store
      .dispatch('getOccupations')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addOccupation', 'deleteOccupation']),
    editOccupation() {},
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
