<template>
  <div id="levels_page" class="main_background">
    <div id="box_levels">
      <div id="levels">
        <div v-for="level in levels" :key="level.id" class="level" @click="setLevel(level.id)">
          <div class="content">
            <div>
              <div>
                {{ level.id }}
              </div>
              <div>
                {{ level.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="back_container">
          <div class="back" @click="back()">назад</div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import '../styles/levels_page.sass'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  fetch('./resources/graphics/levels.json')
    .then((response) => response.json())
    .then((json) => {
      store.commit('SET_LEVELS', json.levels)
    })
})

function setLevel(number) {
  store.commit('SET_LEVEL', number)
  store.commit('SET_PAGE', 'LevelPage')
}

function back() {
  store.commit('SET_PAGE', 'MainPage')
}

const levels = computed(() => store.state.levels)
</script>