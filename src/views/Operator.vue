<template>
  <div class="container">
    <header class="jumbotron">
     
    </header>
  </div>
</template>

<script>
import OperatorService from '../services/operator.service';

export default {
  name: 'Operator',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    OperatorService.getPublicContent().then(
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
