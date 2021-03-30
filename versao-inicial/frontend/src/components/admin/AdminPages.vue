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
          <b-tab title="Articles" active>
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categories">
            <CategoryAdmin />
          </b-tab>
          <b-tab title="Users">
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import ArticleAdmin from './ArticleAdmin';
import CategoryAdmin from './CategoryAdmin';
import UserAdmin from './UserAdmin';

export default {
  name: "AdminPages",
  components: { PageTitle,  ArticleAdmin, CategoryAdmin, UserAdmin },
};
</script>

<style>
.admin-tab{
  margin-right: 20px;
}

.fa-pencil{
  color: white;
}

.fa-trash{
  color: white;
}

</style>