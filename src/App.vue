<template>
  <div class="app">
    <SearchButton />
    

      <CardBanda />
       
    <CardVideos />
  </div>
</template>

<script>
import CardBanda from "./components/CardBanda";
import CardVideos from "./components/CardVideos";
import SearchButton from "./components/SearchButton";

export default {
  name: "App",
  components: { CardBanda, CardVideos, SearchButton },
  data() {
    return {
      searchBanda: "Slipknot",
    };
  },
};
</script>

<style>

</style>
