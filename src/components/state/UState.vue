
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add State</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <select
        id="select1"
        v-model="selectedCountry"
        class="browser-default custom-select"
        v-on:change="countrySelected()"
      >
        <option
          v-for="item in getCountry"
          v-bind:value="item"
          :key="item.countryName"
        >{{ item.countryName }}</option>
      </select>

      <span>Selected: {{ selectedCountry }}</span>

      <stateAddForm submit="addState" />

      <ul id="state-list" class="child1">
        <list-item
          v-for="(states) in getStates"
          :key="states.id"
          :states="states"
          @delete="deleteStates(states)"
          @edit="editStates"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import stateAddForm from './stateAddForm.vue';
import ListItem from './stateListItem.vue';

export default {
  name: 'StateList',
  components: {
    stateAddForm,
    ListItem,
  },

  computed: {
    ...mapGetters(['getStates', 'getCountry']),
  },
  data() {
    return {
      selectedCountry: '',
    };
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
    ...mapActions(['addState', 'deleteStates']),
    countrySelected: function () {
      this.loading = true;
      this.$store
        .dispatch('saveCountry', this.selectedCountry)
        .then(() => {
          this.getStateUpdate(this.selectedCountry.id);
        })
        .catch(() => {});
      this.loading = false;
    },
    getStateUpdate(countryId) {
      this.$store
        .dispatch('getStates', countryId)
        .then(() => {})
        .catch(() => {});
    },

    editStates() {},
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
