<template>
  <component :is="currentPageComponent"></component>
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

const pageComponents = {
  'LevelsPage': LevelsPage,
  'PlayWithFiendsPage': PlayWithFiendsPage,
  'LevelPage': LevelPage,
  'MainPage': MainPage,
  'FinishPage': FinishPage
}

const currentPageComponent = computed(() => {
  const pageName = store.state.currentPage
  return pageComponents[pageName] || MainPage // 如果找不到对应组件，默认返回 MainPage
})
</script>