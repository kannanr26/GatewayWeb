
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Bloodgroup</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <bloodgroupAddForm submit="addBloodgroup" />

      <ul id="bloodgroup-list" class="child1">
        <list-item
          v-for="(bloodgroup) in getBloodgroup"
          :key="bloodgroup.id"
          :bloodgroup="bloodgroup"
          @delete="deleteBloodgroup(bloodgroup)"
          @edit="editBloodgroup"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import bloodgroupAddForm from './bloodgroupAddForm.vue';
import ListItem from './bloodgroupListItem.vue';

export default {
  name: 'BloodgroupList',
  components: {
    bloodgroupAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getBloodgroup']),
  },
  mounted() {
    this.$store
      .dispatch('getBloodgroups')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addBloodgroup', 'deleteBloodgroup']),
    editBloodgroup() {},
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
