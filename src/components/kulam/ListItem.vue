<template>
<li
  class="my-4 p-2 px-4 rounded-lg bg-green-300 text-green-900"
>
  <div
    v-if="!editing"
    class="flex justify-between items-center"
  >
    <p > {{ kulam.kulamName }}</p>

    <span class="flex self-center">
      <button
        @click="deleteKulam"
        type="button"
        title="delete"
        class="font-bold rounded-full w-8 h-8"
      >
        X
      </button>

      <button
       
        @click="editKulam"
        type="button"
        title="edit"
        class="font-bold rounded-full w-8 h-8"
      > Edit
        </button>

    </span>
  </div>

  <kulamAddForm
    v-else
    :populateWith="kulam"
    @close="editKulam" />
</li>
</template>

<script>
import kulamAddForm  from './kulamAddForm.vue'

export default {
  name: 'ListItem',
  props: {
    kulam: {
      type: Object,
      required: true
    },
    },
  components: {
    kulamAddForm
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteKulam () {
    //  this.$emit('delete')
       this.$store
        .dispatch('deleteKulam', this.kulam)
        .then(() => {
          console.log('SUCCESS');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          //  this.message = err.response.data.message;
          // this.$router.push({ name: '/kulam' });
        });
    },
    editKulam () {
      this.$emit('edit')
      this.editing = !this.editing
    }
  }
}
</script>
