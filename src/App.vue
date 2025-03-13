<template>
  <component :is="currentPage"></component>
</template>

<script setup>
import { computed } from 'vue'
import LevelsPage from "@/views/LevelsPage.vue"
import PlayWithFiendsPage from "@/views/PlayWithFiendsPage.vue"
import LevelPage from "@/views/LevelPage.vue"
import MainPage from "@/views/MainPage.vue"
import FinishPage from "@/views/FinishPage.vue"
import { useStore } from 'vuex'

const store = useStore()
const currentPage = computed(() => store.state.currentPage)
</script>