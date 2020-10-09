<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add DataUpdator</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <dataUpdatorTypeAddForm submit="addDataUpdatorType" />

      <ul id="dataUpdatorType-list" class="child1">
        <list-item
          v-for="(dataUpdatorType) in getDataUpdatorType"
          :key="dataUpdatorType.id"
          :dataUpdatorType="dataUpdatorType"
          @delete="deleteDataUpdatorType(dataUpdatorType)"
          @edit="editDataUpdatorType"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import dataUpdatorTypeAddForm from './dataupdatorTypeAddForm.vue';
import ListItem from './dataupdatorTypeListItem.vue';

export default {
  name: 'DataUpdatorTypeList',
  components: {
    dataUpdatorTypeAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getDataUpdatorType']),
  },
  mounted() {
    this.$store
      .dispatch('getDataUpdatorTypes')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addDataUpdatorType', 'deleteDataUpdatorType']),
    editDataUpdatorType() {},
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
