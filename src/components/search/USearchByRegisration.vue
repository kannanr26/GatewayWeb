<template>
  <form class="regForm" @submit.prevent="handlePersonal">
    <!-- // action="" --->

    <h1>Search By Registered Number:</h1>

      <div class="form-group row">
        <label for="registration" class="col-sm-2 col-form-label">Registration:</label>
        <div class="col-sm-6">
          <input
            type="text" @blur="selectedFamily"
            class="form-control"  
            placeholder="Registration..."
            v-model.trim="familyDetails.registrationNumber"
          />
        </div>
      </div>


      <ul id="family-list" class="child1">
        <list-item
          v-for="(deity) in get"
          :key="deity.id"
          :deity="deity"
           @viewPerson="viewPerson()"
            @viewDetails="viewDetails()"
          @viewAddress="viewAddress()"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


import ListItem from './FamilyListItem.vue';

export default {
  name: 'FamilyList',
  components: {
    ListItem,
  },
  data() {
    return {
    
    };
  },
  mounted() {

  },

  computed: {
    ...mapGetters(['getDeity', 'getPincodes', 'getCities']),
  },
  methods: {
   
   
    editDeity() {},
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

