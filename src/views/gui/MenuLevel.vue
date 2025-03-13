<template>
    <div id="menu" class="modal no_focus_game" v-show="store.state.level.isMenuOpen">
        <div class="container">
            <div class="content">
                <div class="title margin_bottom">Menu</div>

                <ul class="list">
                    <li>
                        <a @click="openSettings">Settings</a>
                    </li>
                    <li>
                        <a href="/">Exit</a>
                    </li>
                </ul>

                <div class="button_bar">
                    <a @click="closeMenu" class="button">Close</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

function closeMenu() {
  store.commit('SET_OPEN_MENU', false)
}

function openSettings() {
  store.commit('SET_SETTINGS_OPEN', true)
}
</script>