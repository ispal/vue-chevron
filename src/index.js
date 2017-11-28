let animationId;
let lastTime = null;

function linear(t) {
  return t;
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
      default: 500
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
      default: linear
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
      const { width, height } = this.triangleSideLengths;
      const { x, y } = this.viewBoxCenter;
      const clickProgress = this.clickProgress;

      const sidesY = calculatePosition(
        this.pointDown,
        progress,
        clickProgress,
        height,
        y
      );
      const centerY = calculatePosition(
        !this.pointDown,
        progress,
        clickProgress,
        height,
        y
      );
      return `M${x - width},${sidesY}, ${x},${centerY} ${x + width},${sidesY}`;
    },
    triangleSideLengths() {
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
      const lineLength = this.lineLength;
      const thickness = this.thickness;

      const width = Math.ceil(lineLength * 2 + thickness * 2);
      const height = Math.ceil(
        lineLength * 2 * Math.sin(this.angle * (Math.PI / 180)) + thickness * 2
      );
      return { width, height };
    }
  },
  watch: {
    pointDown: function() {
      this.clickProgress = this.progress;
      this.progress = 0;
      window.cancelAnimationFrame(animationId);
      animate(this.duration, this);
    }
  },
  render(h) {
    const lineCapAndJoin = this.roundEdges ? "round" : "square";
    const { width, height } = this.viewBoxSize;

    return h(
      "svg",
      {
        attrs: {
          height: 32,
          width: 32,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: `0 0 ${width} ${height}`
        }
      },
      [
        h("title", "vue-chevron"),
        h("path", {
          attrs: {
            d: this.path,
            fill: "none",
            "stroke-linecap": lineCapAndJoin,
            "stroke-width": this.thickness,
            "stroke-linejoin": lineCapAndJoin,
            stroke: "currentColor"
          }
        })
      ]
    );
  }
};
