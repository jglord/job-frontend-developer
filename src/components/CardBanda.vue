<template>
    <div class="nes-container cardBanda is-centered">
        <!-- Nome da banda -->
        <span class="nes-text" style="font-size: 30px; display: block">
            {{ banda.name }}
        </span>

        <!-- Imagens da banda 
        <div
            v-for="item in banda.images"
            :key="item.img"
            class="cardImg"
            style="padding: 0; margin-bottom: 1%; margin-top: 0.5%"
        >
        </div>
        -->
        <li>
            <img class="img" :src="banda.image" alt="" srcset="" />
        </li>

        <!-- Descrição da banda -->
        <span
            class="nes-text"
            style="font-size: 14px; display: block; text-align: justify"
        >
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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
    console.log("SetBand: ", respBand[0]);
    return respBand[0];
}

function makeBand(band) {
    return {
        name: band.name,
        classifications: band.classifications,
        image: band.images[0].url
    };
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
            // setband -> verificando e retornando banda pesquisada, makeband -> retornando banda formatada e atribuindo a propriedade reativa banda
            banda.value = makeBand(setBand(store.state.band, respBands));
            console.log("Band final: ", banda.value);
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
    width: 70%;
    height: 300px;
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
