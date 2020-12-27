<template>
  <form class="regForm" @submit.prevent="handlePersonal">
    <!-- // action="" --->

    <h1>Register:</h1>

    <!-- One "tab" for each step in the form: -->
    <div class="tab" v-if="currentTab===0">
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

      <div class="form-group row">
        <label for="registration" class="col-sm-2 col-form-label">Family Name:</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            placeholder="Family Name..."
            v-model.trim="familyDetails.familyName"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="registrationdate" class="col-sm-2 col-form-label">Date:</label>
        <div class="col-sm-6">
          <input type="Date" class="form-control" v-model.trim="familyDetails.registrationDate" />
        </div>
      </div>

      <div class="form-group row">
        <label for="registrationCollected" class="col-sm-2 col-form-label">Collected:</label>
        <div class="col-sm-6">
          <select class="browser-default custom-select" v-model="familyDetails.selectedOperators">
            <option selected>Select Collected...</option>
            <option
              v-for="item in familyDetails.operators"
              :value="item.operatorName"
              :key="item.operatorName"
            >{{ item.operatorName }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="registrationEntered" class="col-sm-2 col-form-label">Entered:</label>
        <div class="col-sm-6">
          <select
            class="browser-default custom-select"
            v-model="familyDetails.selectedCollectedOperator"
          >
            <option selected>Select Entered...</option>
            <option
              v-for="item in familyDetails.operators"
              :value="item.operatorName"
              :key="item.operatorName"
            >{{ item.operatorName }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="registrationComputed" class="col-sm-2 col-form-label">Computed:</label>
        <div class="col-sm-6">
          <select
            class="browser-default custom-select"
            v-model="familyDetails.selectedEnteredOperator"
          >
            <option selected>Select Computed...</option>
            <option
              v-for="item in familyDetails.operators"
              :value="item.operatorName"
              :key="item.operatorName"
            >{{ item.operatorName }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="tab" v-else-if="currentTab===1">
      <div class="flex-container">
        <!-- Column 1  -->
        <div class="flex-child">
          <br />

          <!-- Name  
  <div class="form-group row">
     <label for="name" class="col-sm-4 col-form-label">Name:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Name..."
          v-model.trim="familyName.address.Name">
       </div>
          </div>-->

          <!-- Address 1  -->
          <div class="form-group row">
            <label for="door" class="col-sm-4 col-form-label">Door Number:</label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Door Number..."
                v-validate="'required'"
                v-model.trim="familyDetails.address.houseNumber"
              />
            </div>
          </div>

          <!-- Number  -->
          <div class="form-group row">
            <label for="address1" class="col-sm-4 col-form-label">Street Name 1:</label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Street Name 1..."
                v-validate="'required'"
                v-model.trim="familyDetails.address.streetName"
              />
            </div>
          </div>

          <!-- Address 2  -->
          <div class="form-group row">
            <label for="address2" class="col-sm-4 col-form-label">Street Name 2:</label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Street Name 2..."
                v-validate="'required'"
                v-model.trim="familyDetails.address.streetName1"
              />
            </div>
          </div>


          <!-- Pincode  -->

          <div class="form-group row">
            <label for="addressCountry" class="col-sm-4 col-form-label">Pincode:</label>
            <div class="col-sm-6">
      <input type="text"
                class="form-control"
                placeholder="Select Pincode..."
                v-validate="'required'"
                v-model.trim="familyDetails.address.Pincode"            
               list="pinlist"  @blur="pincodeSelected()" />

      <datalist id="pinlist">
        <option v-for="item in getPincodes" :key="item" :value="item" />
      </datalist>
          </div>
          </div>

          <div class="form-group row">
            <label for="addressCity" class="col-sm-4 col-form-label">City:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select" v-on:change="citySelected()"
              v-model.trim="familyDetails.selectedCity">
                <option selected>Select City...</option>
                <option
                  v-for="item in cities"
                  :value="item"
                  :key="item.cityName"
                >{{ item.cityName }}</option> 
                </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="addressCountry" class="col-sm-4 col-form-label">Country:</label>
            <div class="col-sm-6">
             
          <input type="text" readonly
                class="form-control"
                placeholder="Country..."
                v-model.trim="selectedCountry"  />
            </div>
          </div>

          <div class="form-group row">
            <label for="addressState" class="col-sm-4 col-form-label">State:</label>
            <div class="col-sm-6">
                <input type="text" readonly
                class="form-control"
                placeholder="State..."
                v-validate="'required'"
                v-model.trim="selectedState"  /> 
       
            </div>
          </div>

          <div class="form-group row">
            <label for="addressDistrict" class="col-sm-4 col-form-label">District:</label>
            <div class="col-sm-6">
              <input type="text" readonly
                class="form-control"
                placeholder="District..."
                v-validate="'required'"
                v-model.trim="selectedDistrict"   /> 


            </div>
          </div>

          <!-- Landmark  -->
          <div class="form-group row">
            <label for="landmark" class="col-sm-4 col-form-label">Landmark:</label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Landmark..."
                v-validate="'required'"
                v-model.trim="familyDetails.address.landmark"
              />
            </div>
          </div>

          <!-- Mobile  
  <div class="form-group row">
     <label for="mobile" class="col-sm-4 col-form-label">Mobile:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Mobile..."
          v-model.trim="address.Mobile">
       </div>
  </div>
-->
  <!-- Google Location  
  <div class="form-group row">
     <label for="googleLocation" class="col-sm-4 col-form-label">Google Location:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Google Location..."
          v-model.trim="address.GoogleLocation">
       </div>
          </div>-->
        </div>

        <!-- Column 2  -->
        <div class="flex-child">
          <!--<br />-->

          <div class="form-group row">
            <label for="addressCaste" class="col-sm-4 col-form-label">Caste:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select" v-on:change="casteSelected()" 
              v-model.trim="familyDetails.selectedCaste" v-validate="'required'">
                <option selected>Select Caste...</option>
                <option
                  v-for="item in familyDetails.castes"
                  :value="item"
                  :key="item.casteName"
                >{{ item.casteName }}</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="addressKulam" class="col-sm-4 col-form-label">Kulam:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select" v-on:change="kulamSelected()" 
              v-model.trim="familyDetails.selectedKulams" v-validate="'required'">
                <option selected>Select Kulam...</option>
                <option
                  v-for="item in familyDetails.kulams"
                  :value="item"
                  :key="item.kulamName"
                >{{ item.kulamName }}</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="addressGothiram" class="col-sm-4 col-form-label">Gothiram:</label>
            <div class="col-sm-6">
              <select class="browser-default custom-select" v-on:change="gothiramSelected()" 
              v-model.trim="familyDetails.selectedGothiram" v-validate="'required'">
                <option selected>Select Gothiram...</option>
                <option
                  v-for="item in familyDetails.gothirams"
                  :value="item"
                  :key="item.gothiramName"
                >{{ item.gothiramName }}</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="addressDeity" class="col-sm-4 col-form-label">Deity:</label>
            <div class="col-sm-6">
           <!--   <select class="browser-default custom-select" v-on:change="deitySelected()" 
              v-model.trim="familyDetails.selectedDeity" v-validate="'required'">
                <option selected>Select Deity...</option>
                <option
                  v-for="item in familyDetails.deitys"
                  :value="item"
                  :key="item.deityName"
                >
                  {{ item.city.pincode }}
            
                </option>
              </select>-->


               <input type="text"
                class="form-control"
                placeholder="Select Deity..."
                v-validate="'required'"
                 v-model.trim="familyDetails.selectedDeity"        
               list="deitylist" />

      <datalist id="deitylist">
        <option v-for="item in familyDetails.deitys" :key="item" :value="item.deityName + item.city.cityName" />
      </datalist>
            </div>
          </div>

          <!-- Description  -->"
          <div class="form-group row">
            <label for="description" class="col-sm-4 col-form-label">Description:</label>
            <div class="col-sm-6">
              <textarea  v-model.trim="familyDetails.desc"
                   id="description"
                class="form-control"
                rows="3"
                placeholder="Description..."
                v-validate="'required'"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab" v-else-if="currentTab===2">
      <div class="container-lg-12">
        <div class="table-responsive">
          <div>
            <div class="table-title">
              <div class="row">
                <div class="col-sm-8">
                  <h2>Relationships</h2>
                </div>
                <div class="col-sm-4">
                  <button type="button" class="btn btn-info add-new">
                    <i class="fa fa-plus"></i> Add New
                  </button>
                </div>
              </div>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Relation</th>
                  <th>Marital</th>
                  <th>DOB</th>
                  <th>Blood Group</th>
                  <th>Education</th>
                  <th>Occupation</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <!-- Name -->
                  <td>John Doe</td>
                  <!-- Gender -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Gender...</option>
                      <option
                        v-for="item in familyDetails.genders"
                        :value="item"
                        :key="item"
                      >{{ item }}</option>
                    </select>
                  </td>
                  <!-- Relation -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Relation...</option>
                      <option
                        v-for="item in familyDetails.relationShipNames"
                        :value="item.relationshipName"
                        :key="item.relationshipName"
                      >{{ item.relationshipName }}</option>
                    </select>
                  </td>
                  <!-- Marital -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Marital...</option>
                      <option
                        v-for="item in familyDetails.maritalStatuies"
                        :value="item.maritalStatusName"
                        :key="item.maritalStatusName"
                      >{{ item.maritalStatusName }}</option>
                    </select>
                  </td>
                  <!-- Date -->
                  <input type="Date" class="browser-default" style="width:100% " />
                  <!-- BloodGroup -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>BloodGroup...</option>
                      <option
                        v-for="item in familyDetails.bloodGroups"
                        :value="item.bloodGroupName"
                        :key="item.bloodGroupName"
                      >{{ item.bloodGroupName }}</option>
                    </select>
                  </td>
                  <!-- Education -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Education...</option>
                      <option
                        v-for="item in familyDetails.educations"
                        :value="item.educationName"
                        :key="item.educationName"
                      >{{ item.educationName }}</option>
                    </select>
                  </td>
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Course...</option>
                      <option
                        v-for="item in familyDetails.courses"
                        :value="item.courseName"
                        :key="item.courseName"
                      >{{ item.courseName }}</option>
                    </select>
                  </td>
                  <!-- Occupation -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Gender...</option>
                      <option
                        v-for="item in relOccupation"
                        :value="item.Name"
                        :key="item.Name"
                      >{{ item.Name }}</option>
                    </select>
                  </td>
                  <!-- Location -->
                  <td>
                    <select class="browser-default custom-select">
                      <option selected>Location...</option>
                      <option
                        v-for="item in relLocation"
                        :value="item.Name"
                        :key="item.Name"
                      >{{ item.Name }}</option>
                    </select>
                  </td>
                  <td>
                    <a class="add" title="Add" data-toggle="tooltip">
                      <i class="material-icons">&#xE03B;</i>
                    </a>
                    <a class="edit" title="Edit" data-toggle="tooltip">
                      <i class="fa fa-edit" style="font-size:16px"></i>
                    </a>
                    <a class="delete" title="Delete" data-toggle="tooltip">
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!---
	<div class="tab">Login Info:
	  <p><input placeholder="Username..." oninput="this.className = ''"></p>
	  <p><input placeholder="Password..." oninput="this.className = ''"></p>
	</div>
    --->

    <!---	<div style="overflow:auto;">--->
    <div style="float:right;">
      <button v-on:click="nextPrev(-1)" v-if="currentTab!==0">Previous</button>
      <button v-on:click="nextPrev(1)">{{ currentTab===totalTab-1 ? 'Submit' : 'Next' }}</button>
    </div>
    <!---	</div>--->
  </form>
</template>

<script>
 import {  mapGetters } from 'vuex'

export default {
  name: 'Personal',
  data() {
    return {
      currentTab: 0, // Current tab is set to be the first tab (0)
      totalTab: 3, // set this input dynamically
      familyDetails:{
        //registrationNumber:'',
      },
      selectedCountry:'',
      selectedStates: '',
      selectedDistrict: '',
      selectedCity:'',
      //selected_City:'',
      cities: [],
      loading:false,
    };
  },
 computed: {
    ...mapGetters(['getFamilyDetails','getPincodes']),
  
  },
  mounted() {
    this.loading=true;
     this.$store
      .dispatch('getPincode')
      .then(() => {})
      .catch(() => {
        this.loading = false;
      });
    this.loading = false;
  },

  methods: {

     pincodeSelected: function () {
      this.loading = true;
      this.cities=[];
      this.$store
        .dispatch('getCityByPincode', this.familyDetails.address.Pincode)
        .then((response) => {
          
            var cityData=response.data[0];
            this.cities = response.data; 
            this.selectedCountry=cityData.country.countryName;
            this.selectedState=cityData.state.stateName;
            this.selectedDistrict=cityData.district.districtName;

            console.log("City:",response.data+"Country: "+this.selectedCountry);
        })
        .catch(() => {
          this.loading = false;
        });
      this.loading = false;
    },
    citySelected: function () {
        console.log(" City ::"+this.familyDetails.selectedCity.id);
         this.familyDetails.address.city= this.familyDetails.selectedCity;


    },
    casteSelected: function () {
        console.log(" Caste ::"+this.familyDetails.selectedCaste.id);
    },
    kulamSelected: function () {
        console.log(" Kulam ::"+ this.familyDetails.selectedKulams.id);
    },
    gothiramSelected: function () {
        console.log(" Gothiram ::"+ this.familyDetails.selectedGothiram.id);
    },
    deitySelected: function () {
        console.log(" Deity ::"+this.familyDetails.selectedDeity.id);
    },
    handlePersonal() {
      if (this.currentTab === this.totalTab) {
        console.log('handlePersonal ::2');
        this.$store
          .dispatch('addFamily', this.familyDetails)
          .then(() => {
            /*  this.saved();
          if (!this.isEditing) 
            this.clearForm();*/
          })
          .catch(() => {
            this.isEditing = false;
          });

        this.loading = false;
        //  this.close()
      }
    },
      selectedFamily: function () {
      this.loading = true;
      console.log('select with reg_num')
      this.$store
        .dispatch('getFamilyWithRegistrationNumber', this.familyDetails.registrationNumber).then(response => {
        
          this.familyDetails=response.data;
          console.log(response.data);
        })
        .catch(() => {});
      this.loading = false;
      
    },

    nextPrev(n) {
      // Exit the function if any field in the current tab is invalid:
      // if (n == 1 && !validateForm()) return false;

      // Increase or decrease the current tab by 1
       this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }
      });
      this.currentTab = this.currentTab + n;
      if (this.currentTab === this.totalTab) 
        {
          this.currentTab = 0;
        }
      console.log('Testing next prev button');
      console.log(this.familyDetails);
    },
  },
};
</script>

<style scoped>
/* Style the form */
#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}

/* Style the input fields */
input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
/*
.tab {
  display: none;
}
*/

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

/* Mark the active step: */
.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4caf50;
}
</style>
