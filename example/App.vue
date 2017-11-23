<template>
  <div id="app">
    <div class="bg-pattern"></div>
    <div class="wrap container-fluid">
      <h1>Vue Chevron</h1>
      <div class="row center-xs badges">
        <div class="col-xs-12 col-sm-8">
          <img src="https://img.shields.io/npm/v/vue-chevron.svg?style=flat" alt="Version" data-canonical-src="https://img.shields.io/npm/v/vue-chevron.svg?style=flat" style="max-width: 100%;">
          <img src="https://img.shields.io/npm/dm/vue-chevron.svg" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dm/vue-chevron.svg" style="max-width: 100%;">
          <img src="https://img.shields.io/david/ispal/vue-chevron.svg?style=flat" alt="No Dependencies" data-canonical-src="https://img.shields.io/david/ispal/vue-chevron.svg?style=flat" style="max-width: 100%;">
          <img src="https://img.shields.io/npm/l/vue-chevron.svg?style=flat" alt="License" data-canonical-src="https://img.shields.io/npm/l/vue-chevron.svg?style=flat" style="max-width: 100%;">
        </div>
      </div>
      <div class="btn-wrap">
        <a href="https://github.com/ispal/vue-chevron" target="_blank" rel="noopener" class="btn">
          <svg class="icon icon-github" viewBox="0 0 24 28">
            <title>github</title>
            <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>
          </svg>
          <span>
            View on Github
          </span>
        </a>
      </div>
      <div class="demo">
        <preview />
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <code-preview />
        </div>
        <div class="col-xs-12 col-sm-6 first-xs last-sm ">
          <props />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sharedState from "./sharedState";

import CodePreview from "./CodePreview";
import Preview from "./Preview";
import Props from "./Props";

export default {
  components: {
    CodePreview,
    Preview,
    Props
  },
  data() {
    return {
      sharedState
    };
  }
};
</script>

<style lang="scss">
$gutter-width: 2rem;

@import "~normalize.css/normalize.css";
@import "~flexboxgrid-sass/flexboxgrid";

* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
  background-image: linear-gradient(
    to right top,
    #3f0971,
    #0056b9,
    #0090db,
    #00c5d8,
    #00f6c0
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bg-pattern {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(black, 0.6);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.2;
}
#app {
  margin: 2em auto;
  padding: 1em 0;
  max-width: 1400px;
}
h1 {
  margin-top: 0;
  margin-bottom: 0.2em;
  color: #fff;
  font-size: 48px;
  font-weight: 900;
  text-shadow: 0 1px 0 rgba(black, 0.4);
  text-align: center;
}
h2,
h3 {
  margin-top: 0;
  color: #00c5d8;
}
h2,
h3 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.75em;
}
a {
  position: relative;
  color: #0056b9;
  text-decoration: none;
}
a:before {
  content: "";
  position: absolute;
  top: 105%;
  left: 0;
  height: 1px;
  width: 100%;
  background: #00f6c0;
  opacity: 0;
  transform-origin: 0 0;
  transform: scale(0, 1);
}
a:after {
  content: "";
  position: absolute;
  left: 100%;
  background: #00f6c0;
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
label {
  display: block;
  margin-bottom: 1em;
}
.m-b {
  margin-bottom: 2em;
}
.box {
  background: white;
  padding: 1em;
  box-shadow: 0 1px 4px rgba(black, 0.4);
  border-radius: 3px;
  margin-bottom: 2em;
}
.badges {
  margin-bottom: 0.5em;
}
.icon {
  display: inline-block;
  width: 1.3em;
  height: 1.3em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.icon-github {
  //width: 0.8571428571428571em;
}
.btn-wrap {
  display: flex;
  justify-content: center;
}
.btn {
  display: flex;
  justify-content: center;
  padding: 0.75em 0.5em;
  color: white;
  font-weight: 400;
  background: #3f0971;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(black, 0.3);

  > * {
    margin: 0 0.5em;
  }
}
</style>
