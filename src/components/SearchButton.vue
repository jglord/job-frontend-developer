<template>
<div class="nes-container cont">
      <!-- Search button --->
      <div class="search">
        <input
          type="text"
          class="nes-input searchBanda"
          id="searchBanda"
          v-model="searchBanda"
          placeholder="Nome da banda"
        />
        <a class="nes-btn nes-text" href="#">Pesquisar</a>
      </div>
    </div>
</template>

<script>
export default {
  name: "SearchButton",
  components: {},
  data() {
    return {
        searchBanda: ""
    };
  },
};
</script>

<style>

.searchBanda {
  height: 40px;
  width: 92%;
  margin-left: 4px;
}

.cont {
  font-family: Press;
  color: #2c3e50;
  position: absolute;
  top: 1%;
  left: 23%;
    width: 1400px;

}
</style>