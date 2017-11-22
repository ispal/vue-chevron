<template>
<div class="code box">
  <div class="m-b">
    <h2>
      Install
    </h2>
    <prism language="html">
npm install vue-chevron --save
    </prism>
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
      pointDown: {{ sharedState.pointDown}},
      thickness: {{ sharedState.thickness }},
      duration: {{ sharedState.duration }},
      angle: {{ sharedState.angle }},
      roundEdges: {{ sharedState.roundEdges }},
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
  color: {{ sharedState.color }};
  font-size: {{ sharedState.fontSize }}px;
}
&lt;/style&gt;
    </prism>
  </div>
</div>
</template>

<script>
import "prismjs";
import "prism-themes/themes/prism-atom-dark.css";
import Prism from "vue-prism-component";
import eases from "eases";

import sharedState from "./sharedState";

export default {
  name: "CodePreview",
  components: {
    Prism
  },
  data() {
    return {
      sharedState
    };
  },
  computed: {
    easing() {
      return eases[this.sharedState.selectedEasing];
    }
  }
};
</script>

<style scoped>
.code__preview {
  text-align: center;
  font-size: 0.8em;
}
</style>
