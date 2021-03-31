<template>
  <div class="page-title">
    <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
    <h2>{{ sub }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"],
};
</script>

<style>
.page-title {
  background-color: white;
  margin: 0px 0px 20px 0px;
  padding: 0px;
  border-bottom: solid 1px #d6d7d9;
}

.page-title h1 {
  font-size: 25px;
  color: #212121;
  margin: 0px 0px 0px 20px;
  padding-top: 5px;
}
.page-title h2 {
  color: #777;
  margin: 10px 0px 10px 20px;
  font-size: 0.9rem;
}

.fa {
  color: #5b616a;
  font-size: 20px;
}
</style>