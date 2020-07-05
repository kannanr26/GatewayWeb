
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info  sm:justify-center" style="border:5px">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
      Add Education</h1>

  <div class="flex flex-col mt-20 mx-4 border border-dark  sm:justify-center" style="border:5px">
    
    <educationAddForm submit="addEducation" />

    <ul id="education-list" class = "child1">
      <list-item 
        v-for="(education, i) in getEducation"
        :key="i"
        :education="education"
        @delete="deleteEducation(i)"
        @edit="saveToEducations"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import educationAddForm from './educationAddForm.vue'
import ListItem from './educationListItem.vue'

export default {
  name: 'EducationList',
  components: {
    educationAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['educations']),
    ...mapGetters(['getEducation'])
    
  },mounted() {
    console.log(' Created get Education');

    this.$store
      .dispatch('getEducation')
      .then(() => {
        console.log('Created in get Education');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/education' });
      });
  },
  methods: {
    ...mapActions(['addEducation','deleteEducation','saveToEducations'])
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