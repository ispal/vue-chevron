var animationId;
let lastTime = null;
const topPoint = 8;
const topPointReverse = 22;
const centerTopPoint = 22;
const centerTopPointReverse = 8;

function inOutCirc(n) {
  n *= 2
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
}

function animate(duration, component) {
  lastTime = component.progress <= 1 ? performance.now() : lastTime;
  const animation = (t) => {
    let progress = (t - lastTime) / duration;
    if (progress >= 1) {
      window.cancelAnimationFrame(animationId);
      component.clickProgress = 1;
      component.progress = 1;
      return;
    }
    component.progress = component.easing(progress);
    animationId = window.requestAnimationFrame(animation);
  }
  animationId = window.requestAnimationFrame(animation);
}

function calculatePosition(isDown, progress, lastClickProgress, point, pointReverse) {

  let progressWithClick = lastClickProgress === 1
    ? progress
    : progress + (1 - lastClickProgress);

  if(progressWithClick >= 1) {
    progressWithClick = 1;
  }

  return isDown
      ? pointReverse - progressWithClick * (pointReverse - point)
      : point + progressWithClick * (pointReverse - point);
}

export default {
  name: 'ChevronToggle',
  props: {
    isDown: {
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
      animFinished: true
    };
  },
  computed: {
    path() {
      const progress = this.progress;
      const sidesTop = calculatePosition(this.isDown, progress, this.clickProgress, topPoint, topPointReverse);
      const sidesBottom = calculatePosition(this.isDown, progress, this.clickProgress, topPoint + this.thickness, topPointReverse + this.thickness);
      const centerTop = calculatePosition(this.isDown, progress, this.clickProgress, centerTopPoint, centerTopPointReverse);
      const centerBottom = calculatePosition(this.isDown, progress, this.clickProgress, centerTopPoint + this.thickness, centerTopPointReverse + this.thickness);

      return `M2.5,${sidesTop}, 2.5,${sidesBottom}, 25,${centerBottom}, 48,${sidesBottom}, 48,${sidesTop}, 25,${centerTop}Z`;
    }
  },
  watch: {
    isDown: function(val) {
      this.clickProgress = this.progress;
      this.progress = 0;
      window.cancelAnimationFrame(animationId);
      animate(this.duration, this);
    },
  },
  render(h) {
    return h('svg', {
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 50 30'
      }
    }, [
      h('title', 'vue-chevron'),
      h('path', {
        attrs: {
          d: this.path
        }
      })
    ]);
  }
};

