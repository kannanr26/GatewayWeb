<template>
  <div class="col-sm-8">
    <div class="card card-container">
      <form @submit="onSubmitKulam">
        <input type="text" v-model="kulam.kulamName" placeholder="Add Kulam..." />
        <button class="btn btn-primary" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul id="kulam">
          <li v-for="kulamItem in kulams" :key="kulamItem.kulamName">{{ kulamItem.kulamName }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
//import {  mapGetters } from 'vuex';
import { mapState } from 'vuex'

//import { ADDKULAM, GETKULAM } from '@/common/config';
export default {
  name: 'KULAM',
  data() {
    return {
      kulam: {
        kulamName: ''
      },
      // kulams:[],
      loading: false
    };
  },
  created() {
    console.log(' Mount get Kulam');

    this.$store
      .dispatch('getKulam')
      .then(() => {
        console.log('in get Kulam');
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
  //  ...mapGetters(['getKulams']),
    ...mapState([ 'kulams'])
  },

  methods: {
    onSubmitKulam(e) {
      this.loading = true;
      e.preventDefault();
     
      this.$store
        .dispatch('addKulam', this.kulam)
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