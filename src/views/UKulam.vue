<template>
    <div class="col-sm-8">
    <div class="card card-container">
      <form @submit="onSubmitKulam">
        <input type="text" v-model="kulamName" placeholder="Add Kulam..." />
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Add</span>
        </button>
        <label v-if="isSuccess" class="alert alert-success" role="alert">{{getMessage}}</label>
        <label  v-else-if="getMessage" class="alert alert-danger" role="alert">{{getMessage}}</label>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
//import ADDKULAM from '@/common/config.js';
export default {
  name: 'KULAM',
  data() {
    return {
      kulamName: '',
      message: '',
     loading: false,
    };
  },
  computed: {
    ...mapActions(['addKumal']),
    ...mapGetters(['getMessage', 'isSuccess'])
  },
  methods: {
    onSubmitKulam(e) {
      this.loading = true;
      e.preventDefault();
      this.$store
        .dispatch('addKumal', this.kulamName)
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

<style scoped>

</style>