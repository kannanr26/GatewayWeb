<template>
<div >
    <div >
      <p>
        <label v-if="isSuccess" class="alert alert-success" role="alert">{{getMessage}}</label>
        <label v-else-if="getMessage" class="alert alert-danger" role="alert">{{getMessage}}</label>
      </p>
    </div>
   

      <b-card no-body>
        
          <b-tabs > 
            <b-tab v-for="tab in tabs" 
              :key="tab.id" 
              :title="tab.title" 
              @click="selectedComponent = tab.selectedComponent">
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
import PersonalRegistration from '@/components/PersonalDetails/PersonalRegistration.vue';
import PersonalAddress from '@/components/PersonalDetails/PersonalAddress.vue';
import PersonalRelationships from '@/components/PersonalDetails/PersonalRelationships.vue';

export default {
  name: 'Util',
  data: function() {
    return {
   //   kulamTitle: 'PersonalRegistration',
      selectedComponent: 'appPersonalRegistration',

tabs: [
        {
          id: 'personalRegistration',
          title: 'PersonalRegistration',
          selectedComponent: 'appPersonalRegistration'
        },
        {
          id: 'personalAddress',
          title: 'PersonalAddress',
          selectedComponent: 'appPersonalAddress'
        },
        {
          id: 'personalRelationships',
          title: 'PersonalRelationships',
          selectedComponent: 'appPersonalRelationships'
        },
     
        ]

    };
  },
  computed: {
  },
  components: {
    appPersonalRegistration: PersonalRegistration,
    appPersonalAddress: PersonalAddress,
    appPersonalRelationships: PersonalRelationships,
  

  }
};
</script>   


