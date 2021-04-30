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
      style="margin-right: 10%; margin-top: 1%"
    ></i>
    <i class="nes-icon facebook is-large" style="margin-right: 10%"></i>
    <i class="nes-icon twitter is-large" style="margin-right: 10%"></i>
    <i class="nes-icon instagram is-large"></i>

    <span
      class="nes-text"
      style="font-size: 8px; display: block; text-align: center"
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
          "descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição ",
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

.imgList {
  display: inline-block;
}

.cardBanda {
  position: fixed;
  left: 20%;
  top: 13%;
  height: 600px;
  width: 1175px;
}

ul,
ol,
li {
  list-style: none;
}
</style>