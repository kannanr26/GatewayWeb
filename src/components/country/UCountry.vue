
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Country</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <countryAddForm submit="addCountry" />

      <ul id="country-list" class="child1">
        <list-item
          v-for="(country) in getCountry"
          :key="country.id"
          :country="country"
          @delete="deleteCountry(country)"
          @edit="editCountry"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import countryAddForm from './countryAddForm.vue';
import ListItem from './countryListItem.vue';

export default {
  name: 'CountryList',
  components: {
    countryAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getCountry']),
  },
  mounted() {
    this.$store
      .dispatch('getCountry')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addCountry', 'deleteCountry']),
    editCountry() {},
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
