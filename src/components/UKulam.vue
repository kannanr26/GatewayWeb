<template>

  <div class="col-md-12">
  <div class="card kulam-container">
  <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="kulamName" placeholder="Add Kulam...">
        <input type="submit" value="Submit">
        <label v-if="this.isSuccess">  {{getMessage}}</label>
      </form>
    </div>
  </div>
  </div>
</template>

<script>

import {mapGetters, mapActions } from "vuex";
import ADDKULAM from '@/common/config.js';
export default {
    name: "KULAM",
  data() {
    return {
      kulamName: ""
    };
  },
  metmethods: {
    ...mapActions([ADDKULAM]),
    onSubmit(e) {
      e.preventDefault();
      this.ADDKULAM(this.kulamName);
    }
  },
  computed: mapGetters(["getMessage","isSuccess"]),
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