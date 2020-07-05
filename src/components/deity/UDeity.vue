<template>
<div class="flex flex-col mt-20 mx-4 border border-gray-400">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Deity</h1>
  <deityAddForm submit="addDeity" />

  <ul id="deity-list" style="width: 100%; height:40%; overflow: auto">
    <list-item
      v-for="(deity, i) in getDeity"
      :key="i"
      :deity="deity"
      @delete="deleteDeity(i)"
      @edit="saveToDeitys"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import deityAddForm from './deityAddForm.vue'
import ListItem from './deityListItem.vue'

export default {
  name: 'DeityList',
  components: {
    deityAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['deitys']),
    ...mapGetters(['getDeity'])
    
  },mounted() {
    console.log(' Created get Deity');

    this.$store
      .dispatch('getDeity')
      .then(() => {
        console.log('Created in get Deity');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/deity' });
      });
  },
  methods: {
    ...mapActions(['addDeity','deleteDeity','saveToDeitys'])
  }
}
</script>
