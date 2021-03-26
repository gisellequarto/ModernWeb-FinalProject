<template>
  <div class="page-title">
    <h1><i v-if="icon" :class="icon"></i>{{ main }}</h1>
    <h2>{{ sub }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"],
};
</script>

<style>
.page-title h1 {
  font-size: 14px;
  color: #212121;
  margin-top: 5px;
}
.page-title h2 {
  color: #777;
  margin-top: 10px;
  font-size: 0.7rem;
}

hr {
  margin: 5px 0px;
}

.fa {
  color: #5b616a;
  font-size: 18px;
}
</style>