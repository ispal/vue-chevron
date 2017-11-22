<template>
  <div class="preview">
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-4 col-md-2">
        <div class="align-center">
          <label>Color</label>
          <input type="color" v-model="sharedState.color">
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 preview__col">
        <div class="align-center preview__wrap">
          <div class="preview__svg" @click="toggle" :style="`color: ${sharedState.color}; font-size: ${sharedState.fontSize}px`">
            <vue-chevron
              :point-down="sharedState.pointDown"
              :duration="sharedState.duration"
              :thickness="sharedState.thickness"
              :angle="sharedState.angle"
              :round-edges="sharedState.roundEdges"
              :easing="easing"
            />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-2">
        <div class="align-center">
          <label>Font size ({{sharedState.fontSize}}px)</label>
          <input type="range" v-model.number="sharedState.fontSize" min="10" max="150" step="1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eases from "eases";
import sharedState from "./sharedState";

import VueChevron from "../src";

export default {
  name: "Preview",
  components: {
    VueChevron
  },
  data() {
    return {
      sharedState
    };
  },
  methods: {
    toggle() {
      this.sharedState.pointDown = !this.sharedState.pointDown;
    }
  },
  computed: {
    easing() {
      return eases[this.sharedState.selectedEasing];
    }
  }
};
</script>

<style lang="scss" scoped>
.align-center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 48rem) {
    margin: 1em 0;
  }
}
.preview {
  margin-bottom: 2em;
  color: white;
  font-weight: 900;
  text-shadow: 0 1px 0 rgba(black, 0.4);
}
.preview__col {
  @media only screen and (max-width: 48rem) {
    order: -1;
  }
}
.preview__wrap {
  height: 150px;
  margin: 0;
}
.preview__svg {
  background: rgba(0, 0, 0, 0.1);
  width: 1em;
  height: 1em;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
svg {
  width: 1em;
  height: 1em;
}
</style>
