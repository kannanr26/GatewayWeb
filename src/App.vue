<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Gateway</a>
<div class="navbar-nav mr-auto">
      <div  v-if="( currentUser===null && !isAuthenticated)" >
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>       
       </div>

        <!-- Dropdown -->
      <li v-if="currentUser"  class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"      
       id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">
        Utility
      </a>
      <div class="dropdown-menu "  aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#"><router-link to="/utilityAddress" class="nav-link text-dark" >Utility Address</router-link></a>
        <a class="dropdown-item" href="#"><router-link to="/utilityDeity" class="nav-link text-dark">Utility Deity</router-link></a>
        <a class="dropdown-item" href="#"><router-link to="/utilityManagement" class="nav-link text-dark">Utility Management</router-link></a>
         <a class="dropdown-item" href="#"> <router-link to="/utilityPersonal" class="nav-link text-dark">Utility Personal</router-link></a>
        <a class="dropdown-item" href="#"> <router-link to="/utilityProfession" class="nav-link text-dark">Utility Profession</router-link></a>
      
      </div>
    </li>
         <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/family" class="nav-link">Family</router-link>
          </li>
        </div>   

         <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/personal" class="nav-link">Personal</router-link>
          </li>
        </div>   

        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>-->
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>-->
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="(currentUser && currentUser!='' && isAuthenticated)" class="navbar-nav ml-auto">
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

  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated'])
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
<style scoped>
a {text-decoration: none;}
</style>