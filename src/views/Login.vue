 /* eslint-disable */
<template>
  <div class="col-md-12">
    <div class="card card-container">
      <!-- <img
        id="profile-img"
        src=""
        class="profile-img-card"
      />-->
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="mobilenumber">Operator Mobile Number</label>
          <input
            v-model="operator.mobileNumber"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="mobilenumber"
          />
          <div
            v-if="errors.has('mobilenumber')"
            class="alert alert-danger"
            role="alert"
          >Mobile Number is required!</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="operator.password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >Password is required!</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div v-if="message">
          <span class="alert alert-danger" role="alert">{{message}}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
 /* eslint-disable */
import Operator from '@/models/operator';
import { mapGetters } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      operator: new Operator('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    ...mapGetters(['getMessage', 'isSuccess' ])
  },
  methods: {
    handleLogin() {
      //console.log('login method');
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        this.$store.dispatch('login', this.operator).then((res) => {
            console.log('SUCCESS');
            this.$router.push({ name: 'UtilityAddress' });
        }).catch((err) =>{
          this.loading = false;
          this.message = err.response.data.message;
          console.log('login error'+this.message);
        // this.$router.push({ name: '/kulam' });
        });
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>