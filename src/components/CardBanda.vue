<template>
  <div class="nes-container cardBanda is-centered">
    <!-- Nome da banda -->
    <span class="nes-text" style="font-size: 30px; display: block">
      {{ banda.nomeBanda }}
    </span>

    <!-- Imagens da banda -->
    <div
      v-for="item in banda.bandaImgs"
      :key="item.img"
      class="cardImg"
      style="padding: 0; margin-bottom: 1%; margin-top: 0.5%"
    >
      <li>
        <img class="img" :src="item.img" alt="" srcset="" />
      </li>
    </div>

    <!-- Descrição da banda -->
    <span
      class="nes-text"
      style="font-size: 14px; display: block; text-align: justify"
    >
      {{ banda.descricao }}
    </span>

    <!-- Redes sociais da banda -->
    <i
      class="nes-icon youtube is-large"
      style="margin-right: 8%; margin-top: 3%"
    ></i>
    <i class="nes-icon facebook is-large" style="margin-right: 8%"></i>
    <i class="nes-icon twitter is-large" style="margin-right: 8%"></i>
    <i class="nes-icon instagram is-large"></i>

    <span
      class="nes-text"
      style="font-size: 0.7em; display: block; text-align: center"
    >
      Redes Sociais
    </span>
  </div>
</template>

<script>
export default {
  name: "CardBanda",
  components: {},
  data() {
    return {
      banda: {
        nomeBanda: "Banda",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        bandaImgs: [
          {
            img:
              "http://core360.com.br/shop/skin/frontend/base/default/lib/jlukic_semanticui/examples/assets/images/wireframe/image.png",
          },
          {
            img:
              "http://core360.com.br/shop/skin/frontend/base/default/lib/jlukic_semanticui/examples/assets/images/wireframe/image.png",
          },
          {
            img:
              "http://core360.com.br/shop/skin/frontend/base/default/lib/jlukic_semanticui/examples/assets/images/wireframe/image.png",
          },
          {
            img:
              "http://core360.com.br/shop/skin/frontend/base/default/lib/jlukic_semanticui/examples/assets/images/wireframe/image.png",
          },
        ],
      },
    };
  },
};
</script>

<style>
.cardImg {
  width: 25%;
  height: 40%;
  display: inline-block;
}

.img {
  padding: 1%;
  width: 100%;
  height: 210px;
}

.cardBanda {
  left: 23%;
  margin-top: 5.5%;
  height: 560px;
  width: 1400px;
}

ul,
ol,
li {
  list-style: none;
}
</style>