
<template>
  <div class="col-md-12">
    <div class="card card-container">
      <!-- <img

        id="profile-img"

        src=""

        class="profile-img-card"

      />-->

      <form name="form" @submit.prevent="handleLogin()">
        <div class="form-group">
          <label for="mobileNumber">Operator Mobile Number</label>

          <input
            v-model="operator.mobileNumber"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="mobileNumber"
          />

          <div
            v-if="errors.has('mobileNumber')"
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

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
// import Operator from '../models/operator';
import { mapState, mapGetters, mapActions, Store } from 'vuex';
import { LOGIN } from "@/store/common/actions.type";
export default {
  name: 'Login',

  data() {
    return {
      mobileNumber: null,
      password: null,
      operator: {
        mobileNumber: '',
        password: ''
      },
      loading: false,
      message: ''
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.isAuthenticated;
    },

    ...mapState({
      errors: state => state.auth.errors
    })
  },

  created() {
    if (this.loggedIn) {
      // this.$router.push('/profile');
    }
  },

  methods: {
    handleLogin() {
      this.loading = true;

      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;

          return;
        }
        // if (this.operator.mobileNumber && this.operator.password) {
        // this.$store.dispatch('auth/login', this.operator).then(
        this.$store
          .dispatch([LOGIN], this.operator)
          .then()(() => {
            this.message = 'Login successfully';

            this.$router.push('/addoperator');
          })
          .catch(error => {
            this.loading = false;

            this.message = error.response.data.message;
          });

        // }
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
