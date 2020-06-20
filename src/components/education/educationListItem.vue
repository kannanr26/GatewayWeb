<template>
  <li class="my-2 p-2 px-2">
    <div class="clearfix">
      <div 
        v-if="!editing"
      >
        {{ education.educationName }}
        <div class="float-sm-right" >
          <button 
            @click="editEducation"
            type="button"
            title="edit"     
             style="border:none;"   
          > 
            <span class="edit" >
              <i class="fa fa-edit" style="font-size:16px"></i>
            </span>
          </button>
          &nbsp;&nbsp;
          <button 
            @click="deleteEducation"
            type="button"
            title="delete"
             style="border:none;"
          >
            X
          </button>
        </div>
      </div>
      <educationAddForm
        v-else
        :populateWith="education"
        @close="editEducation"
      />
    </div>
  </li>
</template>

<script>
import educationAddForm  from './educationAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    education: {
      type: Object,
      required: true
    },
    },
  components: {
    educationAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteEducation () {
    //  this.$emit('delete')
       this.$store
        .dispatch('deleteEducation', this.education)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/education' });
        });
    },
    editEducation () {
      this.$emit('edit')
      this.editing = !this.editing
    }
  }
}
</script>


<style>

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
}

</style>