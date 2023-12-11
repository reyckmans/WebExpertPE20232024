<script setup>
import benner from "@/components/benner.vue";
import SchoenLijst from "@/components/schoenLijst.vue";
import navBar from "@/components/navBar.vue";

</script>

<template>
  <div id="bennerid">
    <navBar/>
    <router-view></router-view>
    <footer/>
  </div>

</template>

<style scoped>

#bennerid {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(assets/Background.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.banner {
  width: 100%;
  height: 100vh;
}


</style>
