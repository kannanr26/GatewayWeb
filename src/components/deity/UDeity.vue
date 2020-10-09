
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Deity</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <select
        id="select1"
        v-model="selectedPincode"
        class="browser-default custom-select"
        v-on:change="pincodeSelected()"
      >
        <option v-for="item in getPincodes" v-bind:value="item" :key="item">{{ item }}</option>
      </select>

      <span>Selected: {{ selectedPincode }}</span>
      <select
        id="select1"
        v-model="selectedCity"
        class="browser-default custom-select"
        v-on:change="citySelected()"
      >
        <option v-for="item in getCities" v-bind:value="item" :key="item">{{ item.cityName }}</option>
      </select>

      <span
        v-if="selectedCity!=''"
      >Country: {{ country }} State: {{ cstate }} District: {{district}}</span>

      <deityAddForm submit="addDeity" />

      <ul id="deity-list" class="child1">
        <list-item
          v-for="(deity) in getDeity"
          :key="deity.id"
          :deity="deity"
          @delete="deleteDeity(deity)"
          @edit="editDeity"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import deityAddForm from './deityAddForm.vue';
import ListItem from './deityListItem.vue';

export default {
  name: 'DeityList',
  components: {
    deityAddForm,
    ListItem,
  },
  data() {
    return {
      selectedPincode: '',
      selectedCity: '',
      country: '',
      cstate: '',
      district: '',
    };
  },
  mounted() {
    this.loading = true;
    this.$store
      .dispatch('getPincode')
      .then(() => {})
      .catch(() => {
        this.loading = false;
      });
  },

  computed: {
    ...mapGetters(['getDeity', 'getPincodes', 'getCities']),
  },
  methods: {
    ...mapActions(['addDeity', 'deleteDeity']),
    pincodeSelected: function () {
      this.loading = true;
      this.$store
        .dispatch('getCityByPincode', this.selectedPincode)
        .then(() => {})
        .catch(() => {
          this.loading = false;
        });
      this.loading = false;
    },
    citySelected: function () {
      this.loading = true;
      this.country = this.selectedCity.country.countryName;
      this.cstate = this.selectedCity.state.stateName;
      this.district = this.selectedCity.district.districtName;

      this.$store
        .dispatch('saveCity', this.selectedCity)
        .then(() => {
          this.$store
            .dispatch('getDeityByCity', this.selectedCity.id)
            .then(() => {})
            .catch(() => {
              this.loading = false;
            });
        })
        .catch(() => {
          this.loading = false;
        });

      this.loading = false;
    },

    editDeity() {},
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
