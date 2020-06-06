<template>
<div class="flex flex-col mt-20 mx-4">
  <h1 class="text-center text-4xl font-bold my-4 mb-12 text-green-500">
    Add Kulam</h1>
  <kulamAddForm submit="addKulam" />

  <ul id="kulam-list">
    <list-item
      v-for="(kulam, i) in getKulams"
      :key="i"
      :kulam="kulam"
      @delete="deleteKulam(i)"
      @edit="saveToKulams"
    />
  </ul>

</div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex'

import kulamAddForm from './kulamAddForm.vue'
import ListItem from './ListItem.vue'

export default {
  name: 'KulamList',
  components: {
    kulamAddForm,
    ListItem
  }, 
  computed: {
    //...mapState(['kulams']),
    ...mapGetters(['getKulams'])
    
  },mounted() {
    console.log(' Created get Kulam');

    this.$store
      .dispatch('getKulam')
      .then(() => {
        console.log('Created in get Kulam');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        //  this.message = err.response.data.message;
        // this.$router.push({ name: '/kulam' });
      });
  },
  methods: {
    ...mapActions(['addKulam','deleteKulam','saveToKulams'])
  }
}
</script>
