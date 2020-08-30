<template>
  <form @submit.prevent="submitState">
    <div>
      <!-- <ul id="country-list" class = "child1">
      <list-item 
        v-for="(country) in getCountry"
        :key="country.id"
        :country="country"
       @click="selectedCountry(country)"
      />
    </ul>
      <v-select :options="getCountry" label="country" index="country.id"  />-->

      <select class="browser-default custom-select">
        <option
          v-for="item in getCountry"
          :value="item.countryName"
          :key="item.countryName"
        >{{ item.countryName }}</option>
        @click="selectedCountry(country)
      </select>
    </div>
    <div class="flex flex-grow justify-center" :class="{ 'sm:flex-grow-1': populateWith.empty }">
      &nbsp;&nbsp;
      <input
        class="w-75 p-3 rounded border border-success justify-center"
        placeholder="Add State..."
        v-model.trim="state.stateName"
      />

      &nbsp;&nbsp;
      <button
        type="submit"
        title="save"
        class="bg-white flex-grow active:bg-green-800 text-green-500 border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
        :class="populateWith.empty ? 'sm:flex-grow-0' : 'mr-4'"
      >{{ populateWith.empty ? 'Add' : 'Save' }}</button>

      <button
        v-if="!populateWith.empty"
        @click="close"
        type="button"
        title="cancel"
        class="bg-white active:bg-green-800 text-green-500 border-3 border-green-500 mt-2 mb-3 rounded-circle w-10 h-10 self-end font-bold hover:bg-green-500 hover:text-white focus:outline-none"
        :class="populateWith.empty ? 'flex-grow-0' : 'flex-grow'"
      >Cancel</button>
    </div>
  </form>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'stateAddForm',
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true }),
    },
  },
  data() {
    return {
      state: {
        stateName: '',
      },
    };
  },

  computed: {
    ...mapGetters(['getCountry']),
  },
  mounted() {
    console.log(' get Country');

    this.$store
      .dispatch('getCountry')
      .then(() => {
        console.log('get Country');
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },

  methods: {
    clearForm() {
      this.states = {
        stateName: '',
      };
    },

    selectedCountry(country) {
      console.log(' Created get State'+country);
      this.$store
        .dispatch('getStates('+country+')')
        .then(() => {
          console.log('Created in get State');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    submitState() {
      this.loading = true;
      if (this.states.stateName !== '') {
        this.$store
          .dispatch('addState', this.state)
          .then(() => {
            this.saved();
            console.log('SUCCESS' + this.isEditing);
            if (!this.isEditing) this.clearForm();
          })
          .catch(() => {
            this.isEditing = false;
          });

        this.loading = false;
        this.close();
      }
    },
    close() {
      this.$emit('close');
      this.isEditing = false;
    },
    saved() {
      if (!this.states.empty) {
        this.populateWith.stateName = this.states.stateName;
      }
    },
  },
  created() {
    if (!this.populateWith.empty) {
      this.states = Object.assign({}, this.populateWith);
      //this.country = this.populateWith
    }
  },
};
</script>

<style scoped>
.border-3 {
  border-width: 2px !important;
}
</style>
