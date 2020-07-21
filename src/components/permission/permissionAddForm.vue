<template>

<form @submit.prevent="submitPermission" >
  <div  class="flex flex-grow justify-center" :class="{ 'sm:flex-grow-1': populateWith.empty }" >
     &nbsp;&nbsp;
      <input  class=" w-75 p-3 rounded border border-success justify-center "
        placeholder="Add Permission..."
        v-model.trim="permission.permissionName"
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
  name: 'permissionAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data() {
    return {
      permission: {
        permissionName: ''
      }
    };
  },
  methods: {
    clearForm() {
      this.permission = {
        permissionName: ''
      };
    },
    submitPermission() {
      if (this.permission.permissionName !== '') {
        this.$store
        .dispatch('addPermission', this.permission)
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
      if (!this.permission.empty) {
        this.populateWith.permissionName = this.permission.permissionName;
      }
    }
  },
  created() {
    if (!this.populateWith.empty) {
      this.permission = Object.assign({}, this.populateWith);
      //this.permission = this.populateWith
    }
  }
}
</script>

<style scoped>
.border-3 {
  border-width: 2px !important;
}
</style>
