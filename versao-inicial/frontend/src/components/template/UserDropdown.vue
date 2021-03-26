<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{ user.name }}</span>
      <div class="user-dropdown-img">
        <Gravatar :email="user.email" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <!-- <router-link to="/admin" v-if="user.admin"> -->
      <a href class="settings">
        <i class="fa fa-cogs"></i>
        <span>SETTINGS</span>
      </a>
      <!--  </router-link> -->
      <a href class="logout">
        <i class="fa fa-sign-out"></i>
        <span>LOGOUT</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";

export default {
  name: "UserDropdown",
  components: { Gravatar },
  computed: mapState(["user"]),
};
</script>

<style>
.user-dropdown {
  position: relative;
  height: 100%;
}
.user-button {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
}

.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
  margin: 0px 10px;
}
.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  display: block;
}

.user-dropdown-content a:hover {
  text-decoration: none;
  box-shadow: 0 0 1em rgb(117, 115, 115);
}

.settings{
  background-color: #e5f0f8;
  color: #205493;
  text-align: center;
  width: 80px;
  height: 74px;
  float: left;
  box-sizing: border-box;
  padding: 0.2em;
  display: block;
  list-style-type: disc;
  font-size: 14px;
  padding: 0px;
}

.logout {
  background-color: #d5e6d8;
  color: #2e8540;
  text-align: center;
  width: 80px;
  height: 74px;
  float: left;
  box-sizing: border-box;
  padding: 0.2em;
  display: block;
  list-style-type: disc;
  font-size: 14px;
  padding: 0px;
}
a > i.fa-cogs {
  font-size: 30px;
  display: inline-block;
  color: #205493;
  text-align: center;
  list-style-type: disc;
}

a > i.fa-sign-out {
  font-size: 30px;
  display: inline-block;
  color: #2e8540;
  text-align: center;
  list-style-type: disc;
}

span {
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  margin-top: 5px;
}
</style>