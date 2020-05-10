<template>
 <div class="col-md-12">
  <div class="card operator-container">
<form name="form" @submit.prevent="addOperator">
        <div class="form-group">
          <label for="operatorName">Name</label>
          <span>
          <input
            
            type="text"
            class="form-control"
            name="operatorName"
          />
            
          </span>
        </div>

        <div class="form-group">
          <label for="mobileNumber">Mobile Number</label>
          <span>
            <input
            
            type="text"
            class="form-control"
            name="mobileNumber"
            />
            </span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <span>
                      <input
            
            type="password"
            class="form-control"
            name="password"
            />
            </span>
        </div>

         <div class="form-group">
          <label for="confirmpassword">Confirm Password</label>
          <span>
                      <input
            
            type="password"
            class="form-control"
            name="confirmpassword"
            />
            </span>
        </div>

         <div class="form-group">
          <label for="role">Role</label>
        
  <select id="cars" name="cars">
    <option value="1">SuperAdmin</option>
    <option value="2">Admin</option>
    <option value="3">Operator</option>
    <option value="4">Viewer</option>

  </select>            

        </div>

         <div class="form-group">
         <label for="city">City</label>
         
    <select id="cars" name="cars">
    <option value="1">Salem</option>
    <option value="2">Chennai</option>

  </select>  
          
        </div>

        <div class="form-group">

          <button class="btn btn-primary btn-block" :disabled="loading">Register</button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
  </div>
  </div>
</template>

<script>
import OperatorService from '../services/operator.service';

export default {
  name: 'Add Operator',
  data() {
    return {
       cities: [],
       role: [],
       operatType: [],
       
      content: ''
    };
  },
  mounted() {
    // cal get users 
    this.$store.dispatch('operatorMod/getCity', this.operator).then(
            (res) => {
              this.cities = JSON.parse(res);
            }).catch(   error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
          

          




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