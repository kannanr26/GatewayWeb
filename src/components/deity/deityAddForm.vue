<template>
<form
  @submit.prevent="submitDeity"
  class="flex flex-wrap justify-between sm:justify-center"
>
 <div
 
    class="flex flex-grow sm:ml-4"
    :class="{ 'sm:flex-grow-0': populateWith.empty }"
  >
  <label class="inline">
    <input
      class="block my-2 p-2 rounded border border-gray-400 focus:border-green-400 focus:outline-none"
      type="text"
      placeholder="Add Deity..."
      v-model.trim="deity.deityName"
    >
  </label>&nbsp;&nbsp;
    <button
      type="submit"
      title="save"
      class="bg-white flex-grow active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'"
    >
      {{ populateWith.empty ? '+' : 'Save' }}
    </button>

    <button
      v-if="!populateWith.empty"
      @click="close"
      type="button"
      title="cancel"
      class="bg-white active:bg-green-800 text-green-500 border border-green-500 mt-2 mb-3 rounded-circle w-8 h-8 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
      :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'"
    >
      Cancel
    </button>
  </div>
</form>
</template>

<script>
export default {
  name: 'deityAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data () {
    return {
      deity: {
        deityName: '',
        cityName:  ''
        
      }
    }
  },
  methods: {
    clearForm () {
      this.deity = {
        deityName: '',
        cityName: ''
      }
    },
    submitDeity () {
      if (this.deity.deityName !== '') {
        //this.$emit('submit', this.deity)
 
        this.$store
        .dispatch('addDeity', this.deity)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/deity' });
        });

        this.clearForm()
        this.close()
      }
    },
    close () {
      this.$emit('close')
    }
  },
  created () {
    if (!this.populateWith.empty) {
      this.deity = this.populateWith
    }
  }
}
</script>

