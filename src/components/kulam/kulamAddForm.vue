<template>
<form
  @submit.prevent="submitKulam"
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
      placeholder="Add Kulam..."
      v-model.trim="kulam.kulamName"
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
      :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'">
      Cancel
    </button>
  </div>
</form>
</template>

<script>
export default {
  name: 'kulamAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true })
    }
  },
  data () {
    return {
      kulam: {
        kulamName: '',
        
      }
    }
  },
  methods: {
    clearForm () {
      this.kulam = {
        kulamName: ''
      }
    },
    submitKulam () {
      if (this.kulam.kulamName !== '') {
        this.$store
        .dispatch('addKulam', this.kulam)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
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
      this.kulam = this.populateWith
    }
  }
}
</script>

