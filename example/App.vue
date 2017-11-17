<template>
  <div id="app">
    <div class="content">
      <h1>vue chevron</h1>
      <div class="code">
        <div>
          <div class="preview">
            <h2>Preview - click chevron</h2>
            <div class="preview__wrapper">
              <div class="preview__svg" @click="toggle" :style="`color: ${color}; font-size: ${fontSize}px`">
                <vue-chevron
                  :point-down="pointDown"
                  :duration="duration"
                  :thickness="thickness"
                  :angle="angle"
                  :round-edges="roundEdges"
                  :easing="easing"
                />
              </div>
            </div>
          </div>
          <h2>Code example</h2>
          <div class="code__preview">
            <prism language="html">
&lt;template&gt;
  &lt;div class="example" @click="toggle"&gt;
    &lt;vue-chevron
      :point-down="pointDown"
      :duration="duration"
      :thickness="thickness"
      :angle="angle"
      :round-edges="roundEdges"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import VueChevron from 'vue-chevron';

export default {
  name: 'App',
  components: {
    VueChevron
  },
  data() {
    return {
      pointDown: {{pointDown}},
      thickness: {{ thickness }},
      duration: {{ duration }},
      angle: {{ angle }},
      roundEdges: {{ roundEdges }},
      easing: {{ easing }}
    };
  },
  methods: {
    toggle() {
      this.pointDown = !this.pointDown;
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.example {
  color: {{ color }};
  font-size: {{ fontSize }}px;
}
&lt;/style&gt;
            </prism>
          </div>

        </div>
        <div class="props">
          <div>
            <h2>Demo settings</h2>
            <div class="demo-settings">
              <div>
                <label>Color</label>
                <input type="color" v-model="color">
              </div>
              <div>
                <label>Font size ({{fontSize}}px)</label>
                <input type="range" v-model.number="fontSize" min="10" max="100" step="1">
              </div>
            </div>
          </div>
          <h2>Props</h2>
          <form>
            <table>
              <tr>
                <th>Prop</th>
                <th>Default value</th>
              </tr>
              <tr>
                <td>
                  <label>Duration ({{ duration }}ms)</label>
                  <input type="range" v-model.number="duration" min="200" max="2000" step="100">
                </td>
                <td>1000</td>
              </tr>
              <tr>
                <td>
                  <label>Thickness ({{thickness}})</label>
                  <input type="range" v-model.number="thickness" min="1" max="50" step="1">
                </td>
                <td>8</td>
              </tr>
              <tr>
                <td>
                  <label>Angle ({{angle}}&deg;)</label>
                  <input type="range" v-model.number="angle" min="10" max="60" step="1">
                </td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <label>Round edges</label>
                  <switches v-model="roundEdges" theme="bulma" color="primary"></switches>
                </td>
                <td>true</td>
              </tr>
              <tr>
                <td>
                  <label>Easings</label>
                  <select v-model="selectedEasing">
                    <option
                      v-for="(ease, index) in easings"
                      :value="ease.value"
                      :key="index"
                    >
                      {{ ease.label }}
                    </option>
                  </select>
                  <div>
                    <small>Not included to keep size minimum</small>
                    <a href="https://github.com/mattdesl/eases" target="_blank">Easing functions</a>
                  </div>
                </td>
                <td><a href="http://easings.net/#easeInOutCirc" target="_blank">circInOut</a></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Prism from "vue-prism-component";
import eases from "eases";
import Switches from "vue-switches";

import VueChevron from "../src";

const easings = Object.keys(eases).map(ease => {
  return {
    label: ease,
    value: ease
  };
});
export default {
  components: {
    VueChevron,
    Prism,
    Switches
  },
  data() {
    return {
      pointDown: true,
      thickness: 8,
      duration: 1000,
      roundEdges: true,
      angle: 40,
      easings,
      selectedEasing: "circInOut",
      color: "#ffffff",
      fontSize: 50
    };
  },
  computed: {
    easing() {
      return eases[this.selectedEasing];
    }
  },
  methods: {
    toggle() {
      this.pointDown = !this.pointDown;
    }
  }
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";

* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
  background-image: linear-gradient(to right top, #15315c, #2e5381, #4778a8, #629ecf, #7ec7f6);
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  color: white;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}
h1 {
  text-align: center;
}
h1,
h2,
h3 {
  font-family: "Permanent Marker", cursive;
  letter-spacing: 0.15em;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.8);
  margin-top: 0;
}
a {
  position: relative;
  color: #f1b24b;
  text-decoration: none;
}
a:before {
  content: "";
  position: absolute;
  top: 105%;
  left: 0;
  height: 1px;
  width: 100%;
  background: white;
  opacity: 0;
  transform-origin: 0 0;
  transform: scale(0, 1);
}
a:after {
  content: "";
  position: absolute;
  left: 100%;
  background: white;
  top: 105%;
  opacity: 0;
  width: 1px;
  height: 10px;
  transform: scale(1, 0) rotate(45deg);
  transform-origin: 0 0;
}
a:hover:before {
  opacity: 1;
  transform: scale(1, 1);
  transition: 0.25s all;
}
a:hover:after {
  opacity: 1;
  transform: scale(1, 1) rotate(45deg);
  transition: 0.15s 0.13s all;
}
small {
  font-size: 0.75em;
}
#app {
  width: 90%;
  margin: 1em auto 0;
  max-width: 1200px;
}
.demo-settings {
  display: flex;
  margin-bottom: 3em;
}
.demo-settings > div {
  width: 50%;
}
.code {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}
.code > * {
  width: 48%;
}
.code__preview {
  text-align: center;
  font-size: 0.8em;
}
.props__item {
  margin: 1em 0;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  padding: 1em 0.5em;
  font-weight: bold;
  border-bottom: 1px solid white;
}
td {
  width: 50%;
  padding: 1em 0.5em;
  border-bottom: 1px solid white;
  vertical-align: top;
}

td:not(:first-child) {
  background: rgba(white, 0.1);
  border-left: 1px solid white;
}

label {
  display: block;
  margin-bottom: 1em;
}
.preview {
  margin-bottom: 2em;
  background: rgba(white, 0.1);
  padding: 1.5em 1.5em 1.5em 1.5em;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.preview__wrapper {
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.preview__svg {
  background: rgba(0, 0, 0, 0.2);
  width: 1em;
  height: 1em;
  cursor: pointer;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
