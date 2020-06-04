<template>
  <div class="row">
    <div class="col-sm-4" style="padding: 20px">
      <p>
        <label v-if="isSuccess" class="alert alert-success" role="alert">{{getMessage}}</label>
        <label v-else-if="getMessage" class="alert alert-danger" role="alert">{{getMessage}}</label>
      </p>
      <input type="radio" @click="selectedComponent = 'appKulam'" id="kulam" name="utility" />
      <label for="kulam">&nbsp;&nbsp;Kulam</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appEducation'" id="Education" name="utility" />
      <label for="education">&nbsp;&nbsp;Education</label>
      <br />
    </div>

    <div class="card entry-container" style="padding: 20px">
      <hr />
      <!-- <p>{{ selectedComponent }}</p> -->
      <keep-alive>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UKulam from '@/components/kulam/UKulam.vue';

import UEducation from '@/components/UEducation.vue';

export default {
  name: 'Util',
  data: function() {
    return {
      kulamTitle: 'Kulam',
      selectedComponent: 'appKulam'
    };
  },
  computed: {
    ...mapGetters(['getMessage', 'isSuccess'])
  },
  components: {
    appKulam: UKulam,
    appEducation: UEducation
  }
};
</script>   

<style scoped>
.entry-container.card {
  width: 50%;
  float: left;
  padding: 100px;
  border-style: none !important;
}
</style>