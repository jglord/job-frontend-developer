<template>
    <div>
        <div class="nes-container contVideos is-centered">
            <span class="nes-text" style="font-size: 1.5em; display: block">
                Vídeos
            </span>
            <div
                v-for="video in videos"
                :key="video.id"
                class="nes-container cardVideo"
            >
                <span class="nes-text tituloVideo" style="">
                    {{ video.titulo }}
                </span>

                <iframe
                    id="ytplayer"
                    width="100%"
                    height="400px"
                    :src="video.url"
                ></iframe>

                <span class="nes-text descricaoVideo">
                    {{ video.descricao }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
//const apiKey = "q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG"
//let bandId = 0;                                                           banda   |             api key

async function getVideos(band) {
    const baseUrlYoutube = `https://youtube.googleapis.com/youtube/v3/search?q=${band}&key=AIzaSyD2lAc4tCesk-E9_gGCx5IYeweng-CNBds`;
    const resp = await axios.get(baseUrlYoutube);
    const videos = [];
    // 1 aceito, 2 aceito, 3
    resp.data.items.every((e, i) => {
        console.log("i: ", i);
        videos.push({
            id: i,
            titulo: "",
            url: `https://www.youtube.com/embed/${e.id.videoId}`
        });
        if (i === 2) {
            return false;
        } else return true;
    });
    console.log("videos getVideos: ", videos);
    return videos;
}

export default {
    name: "CardVideos",
    components: {},
    setup() {
        const store = useStore();
        const videos = ref([]);
        onMounted(async () => {
            videos.value = await getVideos(store.state.band);

            console.log("videos reactive: ", JSON.stringify(videos.value));
        });

        return { videos };
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
