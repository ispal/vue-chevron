<template>
  <div id="app">
    <div class="content">
      <div>
        <button @click="toggle">Toggle</button>
      </div>
      <div class="icon">
        <vue-chevron :is-down="isDown" :duration="600"></vue-chevron>
      </div>
    </div>
  </div>
</template>

<script>
import VueChevron from '../src'

export default {
  components: {
    VueChevron
  },
  data() {
    return {
      isDown: true
    }
  },
  methods: {
    toggle() {
      this.isDown = !this.isDown;
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  background-image: linear-gradient(to right top, #5e70e7, #00a2ff, #00c4dd, #00db98, #bee564);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-family: sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  display: inline-block;
  background: rgba(255,255,255, .2);
  font-size: 2em;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
