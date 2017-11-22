<template>
  <div class="props box">
    <h2>Props</h2>
    <form>
      <table>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default value</th>
        </tr>
        <tr>
          <td>
            <label>Duration ({{ sharedState.duration }}ms)</label>
            <input type="range" v-model.number="sharedState.duration" min="200" max="2000" step="100">
          </td>
          <td>Number</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>
            <label>Thickness ({{sharedState.thickness}})</label>
            <input type="range" v-model.number="sharedState.thickness" min="1" max="50" step="1">
          </td>
          <td>Number</td>
          <td>8</td>
        </tr>
        <tr>
          <td>
            <label>Angle ({{sharedState.angle}}&deg;)</label>
            <input type="range" v-model.number="sharedState.angle" min="10" max="60" step="1">
          </td>
          <td>Number</td>
          <td>40</td>
        </tr>
        <tr>
          <td>
            <label>Round edges</label>
            <switches v-model="sharedState.roundEdges" theme="bulma" color="primary"></switches>
          </td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>
            <label>Easings</label>
            <select v-model="sharedState.selectedEasing">
              <option
                v-for="(ease, index) in sharedState.easings"
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
          <td>Function</td>
          <td><a href="http://easings.net/#easeInOutCirc" target="_blank">circInOut</a></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import Switches from "vue-switches";
import sharedState from "./sharedState";

export default {
  name: "Preview",
  components: {
    Switches
  },
  data() {
    return {
      sharedState
    };
  }
};
</script>

<style lang="scss" scoped>
.props__item {
  margin: 1em 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
}
th {
  padding: 1em 0.5em;
  font-weight: bold;
  border-bottom: 1px solid rgba(black, 0.1);
}
td {
  padding: 1em 0.5em;
  border-bottom: 1px solid rgba(black, 0.1);
  vertical-align: top;

  &:not(:first-child) {
    width: 25%;
  }
}

td:not(:first-child) {
  background: rgba(black, 0.05);
  border-left: 1px solid white;
}
</style>
