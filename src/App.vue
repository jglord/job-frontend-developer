<template>
    <div class="app">
        <SearchButton />
        <div v-if="searched">
            <CardBanda />
            <CardVideos />
        </div>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";

import CardBanda from "./components/CardBanda";
import CardVideos from "./components/CardVideos";
import SearchButton from "./components/SearchButton";

export default {
    name: "App",
    components: { CardBanda, CardVideos, SearchButton },
    setup() {
        const store = useStore();
        const searched = ref(false);

        const isSearched = watchEffect(
            () => (searched.value = store.state.searched)
        );

        return { searched, isSearched };
    }
};
</script>

<style></style>
