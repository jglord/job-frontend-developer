<template>
    <div class="nes-container cont">
        <!-- Search button --->
        <div class="search">
            <input
                type="text"
                class="nes-input searchBanda"
                id="searchBand"
                v-model="searchBand"
                placeholder="Nome da banda"
            />
            <a class="nes-btn nes-text" href="#" @click="isSearched()"
                >Pesquisar</a
            >
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
    name: "SearchButton",
    components: {},

    setup() {
        // prop para verificar se botao pesquisar foi ativo
        const searched = ref(false);
        const store = useStore();

        const searchBand = ref("");

        onMounted(() => console.log("State inicial: ", store.state));

        function isSearched() {
            store.commit("setBand", searchBand.value);
            store.commit("isSearched");
        }

        return {
            searched,
            searchBand,
            isSearched
        };
    }
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
    left: 15%;
    width: 1400px;
}
</style>
