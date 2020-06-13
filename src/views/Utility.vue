<template>
  <div class="row">
    <div class="col-sm-4" style="padding: 20px">
      <p>
        <label v-if="isSuccess" class="alert alert-success" role="alert">{{getMessage}}</label>
        <label v-else-if="getMessage" class="alert alert-danger" role="alert">{{getMessage}}</label>
      </p>
      <input type="radio" @click="selectedComponent = 'appKulam'" checked="checked" id="kulam" name="utility" />
      <label for="kulam">&nbsp;&nbsp;Kulam</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appEducation'" id="Education" name="utility" />
      <label for="education">&nbsp;&nbsp;Education</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appGothiram'" id="Gothiram" name="utility" />
      <label for="gothiram">&nbsp;&nbsp;Gothiram</label>
      <br />
      
      <input type="radio" @click="selectedComponent = 'appBloodgroup'" id="Bloodgroup" name="utility" />
      <label for="bloodgroup">&nbsp;&nbsp;BloodGroup</label>
      <br />
      
      <input type="radio" @click="selectedComponent = 'appAssociationcommittee'" id="Associationcommittee" name="utility" />
      <label for="associationcommittee">&nbsp;&nbsp;Associationcommittee</label>
      <br />
     
      <input type="radio" @click="selectedComponent = 'appCaste'" id="Caste" name="utility" />
      <label for="caste">&nbsp;&nbsp;Caste</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appDataupdator'" id="Dataupdator" name="utility" />
      <label for="dataupdator">&nbsp;&nbsp;OperatorType</label>
      <br />
     
      <input type="radio" @click="selectedComponent = 'appRole'" id="Role" name="utility" />
      <label for="role">&nbsp;&nbsp;Role</label>
      <br />
     
      <input type="radio" @click="selectedComponent = 'appMaritalstatus'" id="Maritalstatus" name="utility" />
      <label for="maritalstatus">&nbsp;&nbsp;Maritalstatus</label>
      <br />
     
      <input type="radio" @click="selectedComponent = 'appCourse'" id="Course" name="utility" />
      <label for="course">&nbsp;&nbsp;Course</label>
      <br />
     
      <input type="radio" @click="selectedComponent = 'appCountry'" id="Country" name="utility" />
      <label for="country">&nbsp;&nbsp;Country</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appRelationship'" id="Relationship" name="utility" />
      <label for="relationship">&nbsp;&nbsp;Relationship</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appPermission'" id="Permission" name="utility" />
      <label for="permission">&nbsp;&nbsp;Permission</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appOccupation'" id="Occupation" name="utility" />
      <label for="occupation">&nbsp;&nbsp;Occupation</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appJobtype'" id="Jobtype" name="utility" />
      <label for="jobtype">&nbsp;&nbsp;Jobtype</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appBusinesstype'" id="Businesstype" name="utility" />
      <label for="busiesstype">&nbsp;&nbsp;Businesstype</label>
      <br />

      <input type="radio" @click="selectedComponent = 'appDeity'" id="Deity" name="utility" />
      <label for="deity">&nbsp;&nbsp;Deity</label>
      <br />


      </div>

    <div class="card entry-container" style="padding: 20px">
      <hr />
      <!-- <p>{{ selectedComponent }}</p> -->
      <keep-alive>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
      </keep-alive>
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
      kulamTitle: 'Kulam',
      selectedComponent: 'appKulam'
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
    appAssociationcommittee: UAssociationcommittee,
    appCaste: UCaste,
    appDataupdator: UDataupdator,
    appRole: URole,
    appMaritalstatus: UMaritalstatus,
    appCourse: UCourse,
    appCountry: UCountry,
    appRelationship: URelationship,
    appPermission: UPermission,
    appOccupation: UOccupation,
    appJobtype: UJobtype,
    appBusinesstype: UBusinesstype,
    appDeity: UDeity,

  }
};
</script>   

<style scoped>
.entry-container.card {
  width: 50%;
  float: left;
  padding: 100px;
  border-style: none !important;
}
</style>