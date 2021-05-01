<template>
  <div>
    <div class="nes-container contVideos is-centered">
      <span class="nes-text" style="font-size: 1.5em; display: block">
        Vídeos
      </span>
      <div
        v-for="item in videosBanda"
        :key="item.url"
        class="nes-container cardVideo"
      >
        <span class="nes-text tituloVideo" style="">
          {{ item.titulo }}
        </span>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <!-- 

          <YoutubeVue3
            ref="youtube"
            videoid="9enmxmhyGsY"
            loop="1"
            :width="335"
            :height="320"
          />
          
           -->
        <span class="nes-text descricaoVideo">
          {{ item.descricao }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
//import { YoutubeVue3 } from "youtube-vue3";

export default {
  name: "CardVideos",
  components: {
    /*YoutubeVue3*/
  },
  data() {
    return {
      videosBanda: [
        {
          url: "https://img.icons8.com/ios/452/video.png",
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
          titulo: "Titulo do video",
        },
        {
          url: "https://img.icons8.com/ios/452/video.png",
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
          titulo: "Titulo do video",
        },
        {
          url: "https://img.icons8.com/ios/452/video.png",
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
          titulo: "Titulo do video",
        },
      ],
    };
  },
};
</script>

<style>
.contVideos {
  left: 23%;
  margin-top: 0.8%;
  height: 620px;
  width: 1400px;
}

.cardVideo {
  display: inline-block;
  width: 33%;
  margin-left: -34%;
  margin-right: -34%;
}

.descricaoVideo {
  font-size: 0.6em;
  margin-bottom: 1%;
  margin-top: 1%;
  display: block;
  text-align: justify;
}

.tituloVideo {
  font-size: 0.7em;
  margin-bottom: 1%;
}

ul,
ol,
li {
  list-style: none;
}
</style>