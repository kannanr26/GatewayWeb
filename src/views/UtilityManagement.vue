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
import UAssociationcommittee from '@/components/associationcommittee/UAssociationcommittee.vue';
import UDataupdator from '@/components/dataupdator/UDataupdator.vue';
import URole from '@/components/role/URole.vue';
import UPermission from '@/components/permission/UPermission.vue';

export default {
  name: 'Util',
  data: function() {
    return {
     // kulamTitle: 'Role',
      selectedComponent: 'appRole',
      
tabs: [
        {
          id: 'role',
          title: 'Role',
          selectedComponent: 'appRole'
        },
        {
          id: 'associationCommittee',
          title: 'AssociationCommittee',
          selectedComponent: 'appAssociationCommittee'
        },
        {
          id: 'dataUpdator',
          title: 'DataUpdator',
          selectedComponent: 'appDataUpdator'
        },
        {
          id: 'permission',
          title: 'Permission',
          selectedComponent: 'appPermission'
        },

        ]

    };
  },
  computed: {
    ...mapGetters(['getMessage', 'isSuccess'])
  },
  components: {
    appAssociationcommittee: UAssociationcommittee,
    appDataupdator: UDataupdator,
    appRole: URole,
    appPermission: UPermission,

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