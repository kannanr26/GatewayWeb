<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Course</h1>
  <courseAddForm submit="addCourse" />

  <ul id="course-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(course, i) in getCourse"
      :key="i"
      :course="course"
      @delete="deleteCourse(i)"
      @edit="saveToCourses"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import courseAddForm from './courseAddForm.vue'
import ListItem from './courseListItem.vue'

export default {
  name: 'CourseList',
  components: {
    courseAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['courses']),
    ...mapGetters(['getCourse'])
    
  },mounted() {
    console.log(' Created get Course');

    this.$store
      .dispatch('getCourse')
      .then(() => {
        console.log('Created in get Course');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/course' });
      });
  },
  methods: {
    ...mapActions(['addCourse','deleteCourse','saveToCourses'])
  }
}
</script>
