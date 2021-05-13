<template>
    <div class="nes-container cardBanda is-centered">
        <!-- Nome da banda -->
        <span class="nes-text" style="font-size: 30px; display: block">
            {{ banda.name }}
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
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

async function getBand(band) {
    const baseUrlTM = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${band}&apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG`;
    const resp = await axios.get(baseUrlTM);

    return resp.data._embedded.attractions;
}

// Selecionando banda a partir do nome passado
function setBand(band, respBands) {
    const respBand = respBands.filter(
        filterBand => band.toLowerCase() === filterBand.name.toLowerCase()
    );
    return respBand[0];
}

export default {
    name: "CardBanda",
    components: {},
    setup() {
        // definindo store
        const store = useStore();
        const banda = ref({ name: store.state.band });

        // Montando componente com objeto recebido da api do tickemaster
        onMounted(async () => {
            const respBands = await getBand(banda.value.name);
            //console.log("respBands: ", respBands);
            console.log("Set Band: ", setBand(store.state.band, respBands));
        });

        return { banda };
    }
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
    left: 15%;
    margin-top: 7%;
    height: 560px;
    width: 1400px;
}

ul,
ol,
li {
    list-style: none;
}
</style>
