<template>
    <div id="settings" class="modal no_focus_game" v-show="settingsOpen">
        <div class="container">
            <div class="content">
                <div class="title margin_bottom">Settings</div>

                <ul class="list">
                        <li v-for="(field, index) in this.fields" :key="index">
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

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'game-home',
    computed: {
      fields() {
        return this.$store.getters.settingFields
      },
      settingsOpen() {
        return this.$store.state.settingsLevel.open
      }
    },
    methods: {
      saveField (name, event) {
        this.$nextTick(() => {
          this.$store.commit('SET_SETTING_FIELD_VALUE', {name, value: event.target.checked})
        })


      },
      close () {
        this.$store.commit('SET_SETTINGS_OPEN', false)
      }
    },
    data: function () {
      return {
        soundEnable: true
      }
    }
  })
</script>