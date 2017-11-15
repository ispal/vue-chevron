let animationId;
let lastTime = null;

function inOutCirc(t) {
  var c = 1;
  if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}

function animate(duration, component) {
  lastTime = component.progress <= 1 ? performance.now() : lastTime;
  const animation = t => {
    let progress = (t - lastTime) / duration;
    if (progress >= 1) {
      window.cancelAnimationFrame(animationId);
      component.clickProgress = 1;
      component.progress = 1;
      return;
    }
    component.progress = component.easing(progress);
    animationId = window.requestAnimationFrame(animation);
  };
  animationId = window.requestAnimationFrame(animation);
}

function calculatePosition(
  pointDown,
  progress,
  lastClickProgress,
  height,
  viewBoxCenterY
) {
  let progressWithClick =
    lastClickProgress === 1 ? progress : progress + (1 - lastClickProgress);

  if (progressWithClick >= 1) {
    progressWithClick = 1;
  }

  const topY = viewBoxCenterY + height / 2 - progressWithClick * height;
  const bottomY = viewBoxCenterY - height / 2 + progressWithClick * height;

  return pointDown ? topY : bottomY;
}

export default {
  name: "VueChevron",
  props: {
    pointDown: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1000
    },
    thickness: {
      type: Number,
      default: 4
    },
    angle: {
      type: Number,
      default: 40
    },
    roundEdges: {
      type: Boolean,
      default: true
    },
    easing: {
      type: Function,
      default: inOutCirc
    }
  },
  data() {
    return {
      progress: 1,
      clickProgress: 1,
      reverse: false,
      lineLength: 30
    };
  },
  computed: {
    path() {
      const progress = this.progress;
      const { width, height } = this.triangleSideLenghts;
      const sidesY = calculatePosition(
        this.pointDown,
        progress,
        this.clickProgress,
        this.triangleSideLenghts.height,
        this.viewBoxCenter.y
      );
      const centerY = calculatePosition(
        !this.pointDown,
        progress,
        this.clickProgress,
        this.triangleSideLenghts.height,
        this.viewBoxCenter.y
      );
      return `M${this.viewBoxCenter.x - width},${sidesY}, ${this.viewBoxCenter
        .x},${centerY} ${this.viewBoxCenter.x + width},${sidesY}`;
    },
    triangleSideLenghts() {
      const height = this.lineLength * Math.sin(this.angle * (Math.PI / 180));
      const width = this.lineLength * Math.cos(this.angle * (Math.PI / 180));
      return {
        width,
        height
      };
    },
    viewBoxCenter() {
      const { width, height } = this.viewBoxSize;
      return { x: width / 2, y: height / 2 };
    },
    viewBoxSize() {
      const width = Math.ceil(this.lineLength * 2 + this.thickness * 2);
      const height = Math.ceil(
        this.lineLength * 2 * Math.sin(this.angle * (Math.PI / 180)) +
          this.thickness * 2
      );
      return { width, height };
    }
  },
  watch: {
    pointDown: function(val) {
      this.clickProgress = this.progress;
      this.progress = 0;
      window.cancelAnimationFrame(animationId);
      animate(this.duration, this);
    }
  },
  render(h) {
    return h(
      "svg",
      {
        attrs: {
          height: 50,
          width: 50,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: `0 0 ${this.viewBoxSize.width} ${this.viewBoxSize.height}`
        }
      },
      [
        h("title", "vue-chevron"),
        h("path", {
          attrs: {
            d: this.path,
            fill: "none",
            "stroke-linecap": this.roundEdges ? "round" : "square",
            "stroke-width": this.thickness,
            stroke: "currentColor"
          }
        })
      ]
    );
  }
};
