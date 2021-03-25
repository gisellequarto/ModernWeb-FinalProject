<template>
  <footer class="footer">
      <span>Copyright <strong>Giselle Quarto</strong> © 2020 - 2021</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
        grid-area: footer;
        background-color: #3E3438;
        color: #9faebf;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
}
</style>