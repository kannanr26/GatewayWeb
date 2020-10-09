
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Course</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <courseAddForm submit="addCourse" />

      <ul id="course-list" class="child1">
        <list-item
          v-for="(course) in getCourse"
          :key="course.id"
          :course="course"
          @delete="deleteCourse(course)"
          @edit="editCourse"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import courseAddForm from './courseAddForm.vue';
import ListItem from './courseListItem.vue';

export default {
  name: 'CourseList',
  components: {
    courseAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getCourse']),
  },
  mounted() {
    this.$store
      .dispatch('getCourses')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addCourse', 'deleteCourse']),
    editCourse() {},
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
