<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main=" / Dashboard"
          sub="Knowledge Source" />
    <div class="stats">
            <Stat title="CATEGORIES" :value="stat.categories"
                icon="fa fa-pie-chart" color="linear-gradient(240deg, #ff7295 0%, #fe875d 100%);"
                src="https://www.primefaces.org/california/javax.faces.resource/images/icon-sales.png.xhtml?ln=california-layout" />
            <Stat title="ARTICLES" :value="stat.articles"
                icon="fa fa-bar-chart" color="linear-gradient(240deg, #00aadf 0%, #0071bc 100%);"
                src= "https://www.primefaces.org/california/javax.faces.resource/images/icon-views.png.xhtml?ln=california-layout" />
            <Stat title="USERS" :value="stat.users"
                icon="fa fa-line-chart" color="linear-gradient(240deg, #4b7ecf 0%, #8e70ee 100%);"
                src="https://www.primefaces.org/california/javax.faces.resource/images/icon-users.png.xhtml?ln=california-layout" />
        </div>
        <div class="highlights">
        <h1>Highlights:</h1>
        <hr>

        </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";

import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      stat: {},
    };
  },
   methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data);
        }
    },
    mounted() {
        this.getStats();
    }
};
</script>

<style>
.stats {
  margin: 0px 20px 20px 20px;
}

.highlights{
  margin: 0px 20px 20px 20px;
}
</style>