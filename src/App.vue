<head>
<script src=“assets/js/bootstrap-dropdown.js” type=“text/javascript”></script>
</head>

<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Salem</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li>
          <router-link to="/login" class="nav-link">
            <i class="fa fa-tags" ></i>&nbsp;PersonalDetials
          </router-link>
        </li>

        <li>
          <router-link to="/login" class="nav-link">
            <i class="fa fa-tags" ></i>&nbsp;Reports
          </router-link>
        </li>

        <!-- Dropdown -->
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " 
            id="navbarDropdownMenuLink" 
            data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-tags" aria-hidden="false"></i>&nbsp;Utility</a>
          <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">

            <a class="dropdown-item" > 
              <router-link to="/UtilityPersonal" class="nav-link">
              <i class="fa fa-tags" ></i>&nbsp;Personal
              </router-link>
            </a>

            <a class="dropdown-item" > 
              <router-link to="/UtilityAddress" class="nav-link">
              <i class="fa fa-tags" ></i>&nbsp;Address
              </router-link>
            </a>

            <a class="dropdown-item" > 
              <router-link to="/UtilityDeity" class="nav-link">
              <i class="fa fa-tags" ></i>&nbsp;Deity
              </router-link>
            </a>

            <a class="dropdown-item" > 
              <router-link to="/UtilityProfession" class="nav-link">
              <i class="fa fa-tags" ></i>&nbsp;Profession
              </router-link>
            </a>


            <a class="dropdown-item" > 
              <router-link to="/UtilityManagement" class="nav-link">
              <i class="fa fa-tags"></i>&nbsp;Management
              </router-link>
            </a>


          </div>
        </div>

<!-- not reqd - start
        <li>
          <router-link to="/UtilityDeity" class="nav-link">
            <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;Deity
          </router-link>
        </li>

        <li>
          <router-link to="/UtilityPersonal" class="nav-link">
            <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;Personal
          </router-link>
        </li>

        <li>
          <router-link to="/UtilityAddress" class="nav-link">
            <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;Address
          </router-link>
        </li>

        <li>
          <router-link to="/UtilityProfession" class="nav-link">
            <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;Profession
          </router-link>
        </li>

        <li>
          <router-link to="/UtilityManagement" class="nav-link">
            <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;Management
          </router-link>
        </li>
not reqd end -->


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

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


/* The dropdown container */
.dropdown {
  float: left;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

.navbar {
  background-color: #333;
  font-family: Arial;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: gray;
}


</style>>