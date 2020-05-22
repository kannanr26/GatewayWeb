<template>
    <div class="row">
        <div class="col-sm-4" style = "padding: 20px"  >
            <p></p>
            <input type="radio" @click="selectedComponent = 'appKulam'" id="kulam" name="utility">
            <label for="kulam">&nbsp;&nbsp;Kulam</label><br>
            <input type="radio" @click="selectedComponent = 'appEducation'" id="education" name="utility">
            <label for="caste">&nbsp;&nbsp;Education</label><br>
        </div>                

        <div class="card entry-container" style = "padding: 20px">
            <hr>
            <!-- <p>{{ selectedComponent }}</p> -->
            <keep-alive>
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>
            </keep-alive>
        </div>

    </div>
</template>

<script>

import UKulam from '@/components/UKulam.vue';

export default {
  name: 'Util',
   data() {
     return {
     content: ''
   };
  },
    data: function() {
        return {
            kulamTitle: 'Kulam',
            selectedComponent: 'appKulam'
        }
    },
    components: {
        appKulam: UKulam,
    
    }
}




</script>

<style scoped>


.entry-container.card {
  width: 50%;
  float: left;
  padding: 100px;
  border-style: none!important;
}



</style>