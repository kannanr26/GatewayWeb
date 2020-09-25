
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add District </h1>

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
    <districtAddForm submit="addDistrict" />

    <ul id="district-list" class = "child1">
      <list-item 
        v-for="(district) in getDistrict"
        :key="district.id"
        :district="district"
        @delete="deleteDistrict(district)"
        @edit="editDistrict"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex';
import districtAddForm from './districtAddForm.vue'
import ListItem from './districtListItem.vue'

export default {
  name: 'DistrictList',
  components: {
    districtAddForm,
    ListItem
  }, 

computed: {
    ...mapGetters(['getStates','getCountry','getDistrict'])
  
  },
data(){

return {
  
    selectedCountry:'',
    selectedState:''
}
 },mounted() {
  console.log(' Mount district Country');

    this.$store
      .dispatch('getCountry')
      .then(() => {
        console.log('Created in get Country');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
 
 
  methods: {
    ...mapActions(['addDistrict','deleteDistrict']),
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
  
    editDistrict(){
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
