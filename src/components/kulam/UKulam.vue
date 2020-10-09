<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Kulam</h1>
    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <kulamAddForm submit="addKulam" />

      <ul id="kulam-list" class="child1">
        <list-item
          v-for="(kulam) in getKulams"
          :key="kulam.id"
          :kulam="kulam"
          @delete="deleteKulam(kulam)"
          @edit="editKulam"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import kulamAddForm from './kulamAddForm.vue';
import ListItem from './ListItem.vue';

export default {
  name: 'KulamList',
  components: {
    kulamAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getKulams']),
  },
  mounted() {
    this.$store
      .dispatch('getKulam')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addKulam', 'deleteKulam']),
    editKulam() {},
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
