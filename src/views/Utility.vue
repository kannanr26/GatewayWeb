<template>
  <div>
    <div>
      <b-card no-body>
        <b-tabs active-nav-item-class="font-weight-bold" content-class="mt-3">
          <b-tab
            v-for="tab in tabs"
            :key="tab.id"
            :title="tab.title"
            @click="selectedComponent = tab.selectedComponent"
          >
            <div>
              <p>
                <label v-if="isSuccess" class="alert alert-success" role="alert">{{getMessage}}</label>
                <label v-else-if="getMessage" class="alert alert-danger" role="alert">{{getMessage}}</label>
              </p>
            </div>

            <div>
              <!-- <p>{{ selectedComponent }}</p> -->
              <keep-alive>
                <component :is="selectedComponent">
                  <p>Default Content</p>
                </component>
              </keep-alive>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UKulam from '@/components/kulam/UKulam.vue';
import UEducation from '@/components/education/UEducation.vue';
import UGothiram from '@/components/gothiram/UGothiram.vue';
import UBloodgroup from '@/components/bloodgroup/UBloodgroup.vue';
import UAssociationcommittee from '@/components/associationcommittee/UAssociationcommittee.vue';
import UCaste from '@/components/caste/UCaste.vue';
import UDataupdator from '@/components/dataupdator/UDataupdator.vue';
import URole from '@/components/role/URole.vue';
import UMaritalstatus from '@/components/maritalstatus/UMaritalstatus.vue';
import UCourse from '@/components/course/UCourse.vue';
import UCountry from '@/components/country/UCountry.vue';
import URelationship from '@/components/relationship/URelationship.vue';
import UPermission from '@/components/permission/UPermission.vue';
import UOccupation from '@/components/occupation/UOccupation.vue';
import UJobtype from '@/components/jobtype/UJobtype.vue';
import UBusinesstype from '@/components/businesstype/UBusinesstype.vue';
import UDeity from '@/components/deity/UDeity.vue';

export default {
  name: 'Util',
  data: function() {
    return {
    //  kulamTitle: 'Kulam',
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
        {
          id: 'education',
          title: 'Education',
          selectedComponent: 'appEducation'
        },
        {
          id: 'course',
          title: 'Course',
          selectedComponent: 'appCourse'
        },
        {
          id: 'jobtype',
          title: 'JobType',
          selectedComponent: 'appJobtype'
        },
        {
          id: 'businesstype',
          title: 'BusinessType',
          selectedComponent: 'appBusinesstype'
        },
        {
          id: 'occupation',
          title: 'Occupation',
          selectedComponent: 'appOccupation'
        },
        {
          id: 'bloodgroup',
          title: 'Bloodgroup',
          selectedComponent: 'appBloodgroup'
        },
        {
          id: 'permission',
          title: 'Permission',
          selectedComponent: 'appPermission'
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
          id: 'role',
          title: 'Role',
          selectedComponent: 'appRole'
        },
        {
          id: 'maritalStatus',
          title: 'MaritalStatus',
          selectedComponent: 'appMaritalStatus'
        },
        {
          id: 'relationship',
          title: 'Relationship',
          selectedComponent: 'appRelationship'
        },
        {
          id: 'country',
          title: 'Country',
          selectedComponent: 'appCountry'
        },
        
      ]
    };
  },
  computed: {
    ...mapGetters(['getMessage', 'isSuccess'])
  },
  components: {
    appKulam: UKulam,
    appEducation: UEducation,
    appGothiram: UGothiram,
    appJobtype: UJobtype,
    appBloodgroup: UBloodgroup,
    appAssociationCommittee: UAssociationcommittee,
    appCaste: UCaste,
    appDataUpdator: UDataupdator,
    appRole: URole,
    appMaritalStatus: UMaritalstatus,
    appCourse: UCourse,
    appCountry: UCountry,
    appRelationship: URelationship,
    appPermission: UPermission,
    appOccupation: UOccupation,
    //appJobTitletype: UJobTitletype,
    appBusinesstype: UBusinesstype,
    appDeity: UDeity,
  
  }
};
</script>   

<style scoped>
.entry-container.card {
  width: 70%;
  height: 100%;
  float: left;
  padding: 70px;
  border-style: none !important;
  position: absolute;
}

.utilitydiv.card {
  width: 70%;
  height: 80%;
  border: 1px;
  solid: black;
  position: absolute;
}

.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
}

.child {
  width: 100%;

  height: 100%;
  flex: 0 1;

  padding: 5px;
}
</style>