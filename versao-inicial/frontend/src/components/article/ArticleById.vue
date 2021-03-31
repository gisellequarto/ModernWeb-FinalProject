<template>
  <div class="article-by-id">
    <img  class="article-img" v-if="article.imageUrl"  :src="article.imageUrl" height="70" width="80" alt="Article" />
    <img  class="article-img" v-else src="@/assets/article.png" height="70" width="80" alt="Article" />
    <PageTitle class="article-title" icon="fa fa-file-o" :main="article.name" :sub="article.description" />
    <div class="break"></div>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
import "highlightjs/styles/dracula.css";
import hljs from "highlightjs/highlight.pack.js";
import { baseApiUrl } from "@/global";
import axios from "axios";
import PageTitle from "../template/PageTitle";

export default {
  name: "ArticleById",
  components: { PageTitle },
  data: function () {
    return {
      article: {},
    };
  },
  mounted() {
    const url = `${baseApiUrl}/articles/${this.$route.params.id}`;
    axios.get(url).then((res) => (this.article = res.data));
  },
  updated() {
    document.querySelectorAll(".article-content pre.ql-syntax").forEach((e) => {
      hljs.highlightBlock(e);
    });
  },
};
</script>

<style>
.article-by-id {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start ;
    flex-grow: 1;
    margin: 10px;
}

.article-img{
    margin-right: 10px;
}

.article-title {
    flex-grow: 2;
    margin-right: 10px;
}

.break {
  flex-basis: 100%;
  height: 0;
}

.article-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  flex-grow: 2;
  margin-right: 5px;
}

.article-content pre {
  padding: 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  background-color: #1e1e1e;
  color: #fff;
}
.article-content img {
  max-width: 100%;
}
.article-content :last-child {
  margin-bottom: 0px;
}
</style>