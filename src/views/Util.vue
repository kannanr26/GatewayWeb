<template>
  <div class="container">
    <header class="jumbotron">
     
    </header>
  </div>
</template>

<script>
import UtilService from '../services/util.service';

export default {
  name: 'Util',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UtilService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
