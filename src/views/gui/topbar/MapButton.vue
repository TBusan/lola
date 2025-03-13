<template>
    <div id="map_button">
        <button @click="open">map</button>
    </div>
</template>

<style>
    #map_button {
        height: 100%;
        flex: 1;
        text-align: left;
    }
</style>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

function open() {
  store.commit('MAP_TOGGLE')
}
</script>