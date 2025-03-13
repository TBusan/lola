<template>
    <div id="settings" class="modal no_focus_game" v-show="settingsOpen">
        <div class="container">
            <div class="content">
                <div class="title margin_bottom">Settings</div>

                <ul class="list">
                        <li v-for="(field, index) in fields" :key="index">
                            <label>
                            <input type="checkbox" @change="saveField(field.name, $event)"
                                          :checked="field.value"> {{ field.name }}
                            </label>
                        </li>
                </ul>

                <div class="button_bar">
                    <a @click="close" class="button">Close</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import { useStore } from 'vuex'

defineOptions({
  name: 'GameSettings'
})

const store = useStore()
const soundEnable = ref(true)

const fields = computed(() => store.getters.settingFields)
const settingsOpen = computed(() => store.state.settingsLevel.open)

function saveField(name, event) {
  nextTick(() => {
    store.commit('SET_SETTING_FIELD_VALUE', {name, value: event.target.checked})
  })
}

function close() {
  store.commit('SET_SETTINGS_OPEN', false)
}
</script>