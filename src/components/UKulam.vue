<template>

  <div class="col-md-12">
   <div class="card kulam-container">

          <!-- Kulam -->
        <form @submit="onSubmit">
          <label for="kulam">Kulam</label>
          <input type="text" v-model="kulamName" placeholder="Kulam...">
          <br>
        
          <div class="buttonHolder">
            <input type="submit" value="Submit">
          </div>

      </form>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  data() {
    return {
      kulamName: ""
    };
  },
  methods: {
    ...mapActions(["addTodo","fetchTodos"]),
    onSubmit(e) {
      e.preventDefault();
      
      this.addTodo(this.kulamName);
            
    }
  },

  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
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