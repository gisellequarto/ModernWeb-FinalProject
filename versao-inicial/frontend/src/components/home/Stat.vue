<template>
  <div class="ui-g-12 ui-md-12 ui-lg-4 categories">
    <div class="overview-box monthly-sales" :style="style">
      <div class="stat-title">{{ title }}</div>
      <i :class="icon"></i>
      <div class="stat-value">
        <strong>{{ value }}</strong>
      </div>
      <img :src="src"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stat",
  props: ["title", "value", "icon", "color", "src"],
  computed: {
    style() {
      return "background: " + (this.color || "#000");
    },
  },
};
</script>

<style>
.categories {
  font-size: 14px;
  color: #212121;
  -webkit-font-smoothing: antialiased;
  float: left;
  box-sizing: border-box;
  padding: 0.5em;
  width: 33.33333333%;
}

.monthly-sales {
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  color: #ffffff;
  min-height: 120px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 10px 10px 10px 20px;
  background: linear-gradient(240deg, #ff7295 0%, #fe875d 100%);
}

.stat-title {
  -webkit-font-smoothing: antialiased;
  color: #ffffff;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 0.8px;
  text-align: left;
  margin-bottom: 5px;
}

div > i {
  color: #ffffff;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  float: right;
  font-size: 21px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.stat-value {
  -webkit-font-smoothing: antialiased;
  color: #ffffff;
  line-height: 31px;
  font-size: 24px;
  text-align: left;
  margin-bottom: 8px;
}

img{
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    color: #ffffff;
    position: absolute;
    right: 0;
    width: 90px;
    bottom: 0;
}


</style>