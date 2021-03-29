<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main=" / Settings"
      sub="Register, Update & more..."
    />
    <div class="admin-tab">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Artigos" active>
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categorias">
            <CategoryAdmin />
          </b-tab>
          <b-tab title="Usuários">
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";

export default {
  name: "AdminPages",
  components: { PageTitle },
};
</script>

<style>

</style>