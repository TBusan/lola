<template>
  <div id="bottom_bar" class="no_focus_game">
    <map-button></map-button>
  </div>
</template>

<script setup>
import MapButton from '@/views/gui/topbar/MapButton.vue'
import { useStore } from 'vuex'

const store = useStore()

function openMenu() {
  store.commit('SET_OPEN_MENU', true)
}
</script>