<script>
import navbarindex from "./navBar.vue"
export default {
  name: "benner.vue",
  components:{
    navbarindex
  }
}
</script>

<template>

      <div class="content">
        <h1>YOUR SNEAKER, YOUR STORY</h1>
        <p>Koop je sneakers hier</p>
        <div>
          <router-link to="/login"><button class="btn-benner" type="button"><span></span>Login</button></router-link>
          <router-link to="/shop"><button class="btn-benner" type="button"><span></span>Shop</button></router-link>
        </div>
      </div>

</template>
<style scoped>


.banner {
  width: 100%;
  height: 100vh;
}

.content {
  width: 100%;
  position: relative;
  margin-top: 23%;
  text-align: center;
  color: #ffffff;
}
.content h1 {
  font-size: 70px;
  margin-top: 80px;
}
.content p {
  margin: 20px auto;
  font-weight: 150;
  line-height: 25px;
}

.btn-benner {
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #009688;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn-benner span {
  background: #009688;
  height: 100%;
  width: 0;
  border-radius: 25px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: 0.5s;
}
.btn-benner:hover span {
  width: 100%;
}
.btn-benner:hover {
  border: none;
}

</style>