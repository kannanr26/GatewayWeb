
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Area </h1>

  <div class="flex flex-col mt-20 mx-4  sm:justify-center">


    <select id="select1" v-model="selectedCountry"  class="browser-default custom-select" v-on:change="countrySelected()" >
        <option v-for="item in getCountry" v-bind:value="item" :key="item.countryName">
        {{ item.countryName }}</option>
      </select>
  
    <span>Selected: {{ selectedCountry }}</span>

<select id="select1" v-model="selectedState"  class="browser-default custom-select" v-on:change="stateSelected()" >
        <option v-for="item in getStates" v-bind:value="item" :key="item.stateName">
        {{ item.stateName }}</option>
      </select>
 <span>Selected: {{ selectedState }}</span>

<select id="select1" v-model="selectedDistrict"  class="browser-default custom-select" v-on:change="districtSelected()" >
        <option v-for="item in getDistrict" v-bind:value="item" :key="item.districtame">
        {{ item.districtName }}</option>
      </select>
 <span>Selected: {{ selectedDistrict }}</span>


    <cityAddForm submit="addCity" />

    <ul id="city-list" class = "child1">
      <list-item 
        v-for="(city) in getCities"
        :key="city.id"
        :city="city"
        @delete="deleteCity(city)"
        @edit="editCity"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex';
import cityAddForm from './cityAddForm.vue'
import ListItem from './cityListItem.vue'

export default {
  name: 'cityList',
  components: {
    cityAddForm,
    ListItem
  }, 

computed: {
    ...mapGetters(['getStates','getCountry','getDistrict','getCities'])
  
  },
data(){

return {
  
    selectedCountry:'',
    selectedState:'',
    selectedDistrict:'',
}
 },mounted() {
  console.log(' Mount City ');
    this.loading = true;
    this.$store
      .dispatch('getCountry')
      .then(() => {
        console.log('Created in get Country');       
      })
      .catch(() => {
        this.loading = false;
      });
       this.loading = false;
  },
 
 
  methods: {
    ...mapActions(['addCity','deleteCity']),
     countrySelected: function (){
         this.loading = true;
      console.log('countrySelected :'+  this.selectedCountry.id);
      this.$store
      .dispatch('saveCountry',this.selectedCountry)
      .then(() => {
        console.log('Created in get isCountrySelected'); 
       this.getStateUpdate(this.selectedCountry.id);
      })
      .catch(() => {
      
      });
     this.loading = false;

    },
  getStateUpdate(countryId){
  console.log('Created in get state 1'+countryId);
   this.$store.dispatch('getStates',countryId)
      .then(() => {
        console.log('Created in get state');
      })
      .catch(() => {
       
      });

  },

   stateSelected: function (){
         this.loading = true;
      console.log('stateSelected :'+  this.selectedState.id);
      this.$store
      .dispatch('saveStates',this.selectedState)
      .then(() => {
        console.log('Created in get is State Selected'); 
       this.getDistrictUpdate(this.selectedState.id);
      })
      .catch(() => {
      
      });
     this.loading = false;

    },
  getDistrictUpdate(stateId){
   this.$store.dispatch('getDistricts',stateId)
      .then(() => {
        console.log('Created in get state');
      })
      .catch(() => {
       
      });

  },
   districtSelected: function (){
         this.loading = true;
      console.log('districtSelected :'+  this.selectedDistrict.id);
      this.$store
      .dispatch('saveDistrict',this.selectedDistrict)
      .then(() => {
        
       this.getCityUpdate(this.selectedDistrict.id);
      })
      .catch(() => {
      
      });
     this.loading = false;

    },
  getCityUpdate(districtId){
   this.$store.dispatch('getCities',districtId)
      .then(() => {
        console.log('Created in get state');
      })
      .catch(() => {
       
      });

  },
  
    editCity(){
    } 
}
}
</script>

<style scoped>


.child1{
  border: 2px;
  width: 100%;
  padding:10px;  
  max-height: 200px;
   overflow-y: scroll;
   
}



</style>
