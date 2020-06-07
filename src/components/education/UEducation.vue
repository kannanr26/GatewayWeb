<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Education</h1>
  <educationAddForm submit="addEducation" />

  <ul id="education-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(education, i) in getEducation"
      :key="i"
      :education="education"
      @delete="deleteEducation(i)"
      @edit="saveToEducations"
    />
  </ul>

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
