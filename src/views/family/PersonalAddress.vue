<template>
<form   @submit.prevent="submit"  >
  
  <div  class="flex-container">
   <!-- Column 1  -->
  <div  class="flex-child">
  <br>
  
  <!-- Name  -->
  <div class="form-group row">
     <label for="name" class="col-sm-4 col-form-label">Name:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Name..."
          v-model.trim="address.Name">
       </div>
  </div>

  <!-- Address 1  -->
  <div class="form-group row">
     <label for="door" class="col-sm-4 col-form-label " >Door Number:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Number..."
          v-model.trim="address.DoorNumber">
       </div>
  </div>

  <!-- Number  -->
  <div class="form-group row">
     <label for="address1" class="col-sm-4 col-form-label">Address 1:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Address 1..."
          v-model.trim="address.Address1">
       </div>
  </div>

  <!-- Address 2  -->
  <div class="form-group row">
     <label for="address2" class="col-sm-4 col-form-label">Address 2:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Address 2..."
          v-model.trim="address.Address2">
       </div>
  </div>

  <div class="form-group row">
     <label for="addressCity" class="col-sm-4 col-form-label">City:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select City...</option>
            <option v-for="item in addCity" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressDistrict" class="col-sm-4 col-form-label">District:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select District...</option>
            <option v-for="item in addDistrict" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressState" class="col-sm-4 col-form-label">State:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select State...</option>
            <option v-for="item in addState" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressCountry" class="col-sm-4 col-form-label">Country:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Country...</option>
            <option v-for="item in addCountry" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <!-- Pincode  -->
  <div class="form-group row">
     <label for="pincode" class="col-sm-4 col-form-label">Pincode:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Pincode..."
          v-model.trim="address.Pincode">
       </div>
  </div>

  <!-- Landmark  -->
  <div class="form-group row">
     <label for="landmark" class="col-sm-4 col-form-label">Landmark:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Landmark..."
          v-model.trim="address.Landmark">
       </div>
  </div>

  <!-- Mobile  -->
  <div class="form-group row">
     <label for="mobile" class="col-sm-4 col-form-label">Mobile:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Mobile..."
          v-model.trim="address.Mobile">
       </div>
  </div>

  <!-- Google Location  -->
  <div class="form-group row">
     <label for="googleLocation" class="col-sm-4 col-form-label">Google Location:</label>
       <div class="col-sm-6">
         <input type="text" class="form-control" 
          placeholder="Google Location..."
          v-model.trim="address.GoogleLocation">
       </div>
  </div>
  </div>

 <!-- Column 2  -->
  <div class="flex-child">
  <br>
  
  <div class="form-group row">
     <label for="addressCaste" class="col-sm-4 col-form-label">Caste:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Caste...</option>
            <option v-for="item in addCaste" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressKulam" class="col-sm-4 col-form-label">Kulam:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Kulam...</option>
            <option v-for="item in addKulam" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressGothiram" class="col-sm-4 col-form-label">Gothiram:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Gothiram...</option>
            <option v-for="item in addGothiram" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressDeity" class="col-sm-4 col-form-label">Deity:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Deity...</option>
            <option v-for="item in addDeity" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>

  <div class="form-group row">
     <label for="addressDeityPlace" class="col-sm-4 col-form-label">Deity Place:</label>
       <div class="col-sm-6">
          <select class="browser-default custom-select">
            <option selected="">Select Deity Place...</option>
            <option v-for="item in addDeityPlace" :value="item.Name" :key="item.Name">
              {{ item.Name }}
            </option>
        </select>
       </div>
  </div>


  <!-- Description  -->
  <div class="form-group">
      <label for="description">Description</label>
      <div class="col-lg-16">
      <textarea id="description" class="form-control" 
        rows="10"
        placeholder="Description..."></textarea>
        </div>
    </div>
  </div>
</div>
</form>
</template>

<script>

export default {
  name: 'PERSONALADDRESS',
  data() {
    return {
      address: {
        Name: '',
        DoorNumber: '',
        Address1: '',
        Address2: '',
        City: '',
        District: '',
        State: '',
        Country: '',
        Pincode: '',
        Landmark: '',
        Mobile: '',
        GoogleLocation: '',
        Caste: '',
        Kulam: '',
        Gothiram: '',
        Deity: '',
        DeityPlace: '',
        Description: '',
      },
      loading: false,

addCity: [
        {
          Name: 'Salem_C',
        },
        {
          Name: 'Chennai_C',
        },
        {
          Name: 'Krishnagiri_C',
        },

      ],

addDistrict: [
        {
          Name: 'Salem_D',
        },
        {
          Name: 'Chennai_D',
        },
        {
          Name: 'Krishnagiri_D',
        },

      ],

addState: [
        {
          Name: 'Tamilnadu',
        },
        {
          Name: 'Kerala',
        },
      ],


addCountry: [
        {
          Name: 'India',
        },
        {
          Name: 'Nepal',
        },
      ],

addCaste: [
        {
          Name: 'Caste1',
        },
        {
          Name: 'Caste2',
        },
      ],

addKulam: [
        {
          Name: 'Kulam1',
        },
        {
          Name: 'Kulam2',
        },
      ],

addGothiram: [
        {
          Name: 'Gothiram1',
        },
        {
          Name: 'Gothiram2',
        },
      ],

addDeity: [
        {
          Name: 'Deity1',
        },
        {
          Name: 'Deity2',
        },
      ],

addDeityPlace: [
        {
          Name: 'DeityPlace1',
        },
        {
          Name: 'DeityPlace2',
        },
      ],

    };
  },

  components: {
  }, 
  computed: {
    
  },mounted() {
  },
  methods: {
  }
}
</script>

<style>

.flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
}  

.flex-child:first-child {
    margin-right: 5px;
} 

</style>