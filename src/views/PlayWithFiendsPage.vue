<template>
  <div id="play_with_friends_page">
    <div>
      <div class="tabs_container">
        <ul class="tabs">
          <li :class="{active: isCreate}">
            <a @click="toggleIsCreate">Create</a>
          </li>
          <li :class="{active: isJoin}">
            <a @click="toggleIsJoin">Connect</a>
          </li>
        </ul>

        <div class="tabs_content">
          <div v-if="isCreate">
            <div>
              <div class="label">send to friends</div>
              {{ password }} <button @click="copyPassword">copy</button>
            </div>
          </div>

          <div v-if="isJoin">
            <div>
              <div class="label">type password</div>
              <input type="text" placeholder="password" v-model="passwordFriend" :maxlength="lengthPassword">
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isJoin || (isJoin && passwordFriend && passwordFriend.length === lengthPassword)">
        <div class="button" @click="play">{{ $t("message.play") }}</div>
      </div>

      <div class="back_container">
        <div class="back" @click="back()">back</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import '../styles/play_with_friends_page.sass'
import { Helpers } from '@/models/Helpers'
import copy from 'copy-text-to-clipboard'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const lengthPassword = 11
const isCreate = ref(true)
const isJoin = ref(false)
const password = Helpers.generateRandomToken(10)
const passwordFriend = ref(null)

function back() {
  store.commit('SET_PAGE', 'MainPage')
}

function toggleIsCreate() {
  isCreate.value = true
  isJoin.value = false
}

function toggleIsJoin() {
  isCreate.value = false
  isJoin.value = true
}

function copyPassword() {
  copy(password)
}

function play() {
  if (isCreate.value) {
    store.commit('SET_PASSWORD', password)
  } else {
    store.commit('SET_PASSWORD', passwordFriend.value)
  }

  store.commit('SET_PAGE', 'LevelsPage')
}
</script>