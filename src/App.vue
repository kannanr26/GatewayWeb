<template>
  <div id="app">

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Gateway</a>
      <div class="navbar-nav mr-auto">
        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="home" />Home
            </router-link>
          </li>
        </div>
<!--
  <div class="text-center">
   <v-app> <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu></v-app>
  </div>

-->

        <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/utilityAddress" class="nav-link">Utility Address</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/utilityDeity" class="nav-link">Utility Deity</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/utilityManagement" class="nav-link">Utility Management</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/utilityPersonal" class="nav-link">Utility Personal</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/utilityProfession" class="nav-link">Utility Profession</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/family" class="nav-link">Family</router-link>
          </li>
        </div>

      
        <!--<li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
        -->
        </div>
      
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link> 
        </li>    -->    <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="(currentUser  && isAuthenticated)" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.userName }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
/*  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),*/
  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated', 'showAdminBoard'])
  },
  methods: {
    logOut() {
      this.$store.dispatch('LOGOUT').then(() => {
        this.$router.push({ name: 'login' });
      });
    }
  },
  mounted() {
    // Clear the browser cache data in localStorage when closing the browser window
    window.onbeforeunload = function() {
      console.log('Inside onbeforeunload');
      this.$store.dispatch('LOGOUT').then(() => {
        var storage = window.localStorage;
        storage.clear();
        this.$router.push({ name: 'login' });
      });
    };
  }
};


</script>
