<template>
  <div>
    <aside class="menu" v-show="isMenuVisible">Menu</aside>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"]),
};
</script>

<style>
.menu {
  grid-area: menu;
  background: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>