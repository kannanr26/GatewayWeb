<template>

<form @submit.prevent="submitBloodgroup" >
  <div  class="flex flex-grow justify-center" :class="{ 'sm:flex-grow-1': populateWith.empty }" >
     &nbsp;&nbsp;
      <input  class=" w-75 p-3 rounded border border-success justify-center "
        placeholder="Add Bloodgroup..."
        v-model.trim="bloodgroup.bloodGroupName"
      />
    &nbsp;&nbsp;

    <button 
      type="submit"
      title="save"
      class=" bg-white  flex-grow active:bg-green-800 text-green-500  border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'" >
        {{ populateWith.empty ? 'Add' : 'Save' }}
    </button>

    <button
      v-if="!populateWith.empty"
      @click="close"
      type="button"
      title="cancel"
      class=" bg-white active:bg-green-800 text-green-500  border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'" >
        Cancel
    </button>
</div>
</form>
</template>

<script>
export default {
  name: 'bloodgroupAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data() {
    return {
      bloodgroup: {
        bloodGroupName: ''
      }
    };
  },
  methods: {
    clearForm() {
      this.bloodgroup = {
        bloodGroupName: ''
      };
    },
    submitBloodgroup() {
      if (this.bloodgroup.bloodGroupName !== '') {
         this.$store
        .dispatch('addBloodgroup', this.bloodgroup)
         .then(() => {
          this.saved();
          console.log('SUCCESS'+this.isEditing);
          if (!this.isEditing) 
            this.clearForm();
        })
        .catch(() => {
          this.isEditing = false;
        });

        this.loading = false;
        this.close()
     }
    },
    close() {
      this.$emit('close');
      this.isEditing = false;
    },
    saved() {
      if (!this.bloodgroup.empty) {
        this.populateWith.bloodGroupName = this.bloodgroup.bloodGroupName;
      }
    }
  },
  created() {
    if (!this.populateWith.empty) {
      this.bloodgroup = Object.assign({}, this.populateWith);
      //this.bloodgroup = this.populateWith
    }
  }
}
</script>

<style scoped>
.border-3 {
  border-width: 2px !important;
}
</style>
