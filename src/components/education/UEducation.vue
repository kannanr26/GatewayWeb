
<template>
  <div class="flex flex-col mt-20 mx-4 border border-info sm:justify-center">
    <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">Add Education</h1>

    <div class="flex flex-col mt-20 mx-4 sm:justify-center">
      <educationAddForm submit="addEducation" />

      <ul id="education-list" class="child1">
        <list-item
          v-for="(education) in getEducation"
          :key="education.id"
          :education="education"
          @delete="deleteEducation(education)"
          @edit="editEducation"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import educationAddForm from './educationAddForm.vue';
import ListItem from './educationListItem.vue';

export default {
  name: 'EducationList',
  components: {
    educationAddForm,
    ListItem,
  },
  computed: {
    ...mapGetters(['getEducation']),
  },
  mounted() {
    this.$store
      .dispatch('getEducations')
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addEducation', 'deleteEducation']),
    editEducation() {},
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
