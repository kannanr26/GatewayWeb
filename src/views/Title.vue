<template>

    <div>
        <h1>Home</h1>

 <h3>Add Title</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Title...">
        <input type="submit" value="Submit">
      </form>
    </div>

        <h2>{{getTitle}}</h2>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
    
name: "Title",
 data() {
    return {
      title: "Gateway"
    };
  },
  
  computed: mapGetters(["getTitle"]),
  created() {
   
  },
  methods: {
    ...mapActions(["addTitle"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTitle(this.title);
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>