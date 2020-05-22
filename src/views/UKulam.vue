<template>

  <div class="col-md-12">
  
  <div class="add">
      <form @submit="onSubmitKulam">
        <input type="text" v-model="kulamName" placeholder="Add Kulam...">
        <input type="submit" value="Submit">
        <label >  {{getMessage}}</label>
      </form>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions } from "vuex";
//import ADDKULAM from '@/common/config.js';
export default {
    name: "KULAM",
  data() {
    return {
      kulamName: ""
    };
  },
  metmethods: {
    ...mapActions(["addKumal"]),
    
    onSubmitKulam(e) {
      e.preventDefault();
      this.addKumal(this.kulamName);
    }
  },
  computed: mapGetters(["getMessage","isSucess"]),
  created() {
   
  }
};
</script>

<style scoped>

.buttonHolder{ text-align: right; }

.kulam-container.card {
  max-width: 100% !important;
  padding: 20px;
}


select {
  max-width: 100% !important;
  padding: 10px;
}

label {
  margin-top: 5px;
  float: left;
  display: inline-block; width:49%;
}

span {
    display: block;
    overflow: hidden;
    padding: 0 4px 0 6px;
    width:50%;
}


</style>