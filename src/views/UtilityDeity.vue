<template>
<div >
    
      <b-card no-body>
        
          <b-tabs active-nav-item-class="font-weight-bold"
            content-class="mt-3">
            <b-tab v-for="tab in tabs" 
              :key="tab.id" 
              :title="tab.title" 
              @click="selectedComponent = tab.selectedComponent">
               <div>
              <p>
                <label
                  v-if="isSuccess && !getMessage==''"
                  class="alert alert-success"
                  role="alert"
                >{{getMessage}}</label>
                <label
                  v-if="!isSuccess && !getMessage==''"
                  class="alert alert-danger"
                  role="alert"
                >{{getMessage}}</label>
              </p>
            </div>
              <div >
                <!-- <p>{{ selectedComponent }}</p> -->
                <keep-alive>
                  <component :is="selectedComponent" >
                    <p>Default Content</p>
                  </component>
                </keep-alive>
              </div>
            </b-tab>
          </b-tabs>
      </b-card>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import UKulam from '@/components/kulam/UKulam.vue';
import UGothiram from '@/components/gothiram/UGothiram.vue';
import UCaste from '@/components/caste/UCaste.vue';
import UDeity from '@/components/deity/UDeity.vue';

export default {
  name: 'Util',
  data: function() {
    return {
      //kulamTitle: 'Kulam',
      selectedComponent: 'appKulam',
      
tabs: [
        {
          id: 'kulam',
          title: 'Kulam',
          selectedComponent: 'appKulam'
        },
        {
          id: 'gothiram',
          title: 'Gothiram',
          selectedComponent: 'appGothiram'
        },
        {
          id: 'caste',
          title: 'Caste',
          selectedComponent: 'appCaste'
        },
        {
          id: 'deity',
          title: 'Deity',
          selectedComponent: 'appDeity'
        },

        ]

    };
  },
  computed: {
    ...mapGetters(['getMessage', 'isSuccess'])
  },
  components: {
    appKulam: UKulam,
    appGothiram: UGothiram,
    appCaste: UCaste,
    appDeity: UDeity,

  }
};
</script>   

<style scoped>
p {
  text-align: center;
}
.entry-container.card {
  width: 70%;
  height:100%;
  float: left;
  padding: 70px;
  border-style: none !important;
  position: absolute;
}

.utilitydiv.card {
width: 70%; 
height:80%;  
border: 1px ;
solid:black; 
position: absolute;
} 

.parent{
  display: flex;
  flex-direction: column;
   align-items: center;
  flex-wrap: nowrap;
    height: 100%;
}


.child{
  width:100%;
 
  
  height: 100%;
    flex: 0 1;
  
    padding:5px;
}
</style>