<template>
  <div class="col-sm-8">
    <div class="card card-container">
      <form @submit="onSubmitEducation">
        <input type="text" v-model="education.educationName" placeholder="Add Education.." />
        <button class="btn btn-primary" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul id="educationul">
          {{getEducations}}
          <li v-for="educationItem in getEducations" :key="educationItem.id">
            {{ educationItem.educationName }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';
//import { ADDKULAM, GETKULAM } from '@/common/config';
export default {
  name: 'Education',
  data() {
    return {
      education: {
        educationName: ''
      },
      // kulams:[],
      loading: false
    };
  },
  created() {
    console.log(' Mount get Edu');

    this.$store
      .dispatch('getEducation_action').then(() => {
        console.log('in get education');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/kulam' });
      });
  },
  computed: {
    //...mapActions([GETKULAM]),
    ...mapGetters(['getEducations'])
  },

  methods: {
    onSubmitEducation(e) {
      this.loading = true;
      e.preventDefault();
      this.$store
        .dispatch('addEducation', this.education)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/kulam' });
        });
    }
  }
};
</script>