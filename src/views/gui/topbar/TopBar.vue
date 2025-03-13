<template>
    <div id="top_bar" class="no_focus_game">
      <div class="grid">
        <div id="menu_button" class="child">
          <div class="menu_button" @click="openMenu"></div>
        </div>
        <div class="child">
          <button v-if="savepointId !== null" class="back" @click="backToSavepoint"></button>
        </div>
        <div class="child" style="text-align: right">
          <span class="child" id="fps_counter" v-show="showFps"></span>
        </div>
      </div>
    </div>
</template>

<style>
#fps_counter {
  background-color: black;
  border: 2px solid red;
  text-align: center;
  font-size: 16px;
  color: white;
}
</style>

<script setup>
import { Settings } from '@/models/storage/Settings'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const showFps = ref(false)

onMounted(() => {
  showFps.value = Settings.getValueByName('show_fps')

  store.subscribe(mutation => {
    if (mutation.type === 'SET_SETTING_FIELD_VALUE') {
      if (mutation.payload.name === 'show_fps') {
        showFps.value = mutation.payload.value
      }
    }
  })
})

function openMenu() {
  store.commit('SET_OPEN_MENU', true)
}

function backToSavepoint() {
  store.commit('SET_BACK_TO_SAVEPOINT')
}

const savepointId = computed(() => store.state.level.savepointId)
</script>