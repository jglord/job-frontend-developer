<template>
  <div>
    <div class="nes-container contVideos is-centered">
      <span class="nes-text" style="font-size: 1.5em; display: block">
        Vídeos
      </span>
      <div
        v-for="video in videosBanda"
        :key="video.id"
        class="nes-container cardVideo"
      >
        <span class="nes-text tituloVideo" style="">
          {{ video.titulo }}
        </span>

        <iframe
          :id="video.id"
          style="
            border-style: none;
            border-color: inherit;
            border-width: 0px;
            height: 400px;
            width: 100%;
          "
          :src="video.videoUrl"
        ></iframe>

        <span class="nes-text descricaoVideo">
          {{ video.descricao }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
//const apiKey = "q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG"
//let bandId = 0;
//const baseUrlTM = `https://app.ticketmaster.com/discovery/v2/attractions${bandId}.json?apikey=${apiKey}`

// Url geral apenas para desenvolvimento inicial
//const baseUrlTM = "http://app.ticketmaster.com/discovery/v2/attractions.json?size=1&apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG" 
export default {
  name: "CardVideos",
  components: {},
  data: () => {
    return {
      videosBanda: [
        {
          id: 1,
          videoUrl: "",
          url: "",
          descricao: "",
          titulo: "",
        },
        {
          id: 2,
          videoUrl: "",
          url: "",
          descricao: "",
          titulo: "",
        },
        {
          id: 3,
          videoUrl: "",
          url: "",
          descricao: "",
          titulo: "",
        },
      ],
    };
  },
  mounted: () => {
    
  }
};

</script>

<style>
.contVideos {
  left: 15%;
  margin-top: 0.8%;
  height: 680px;
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