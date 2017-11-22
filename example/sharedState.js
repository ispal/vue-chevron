import eases from "eases";
const easings = Object.keys(eases).map(ease => {
  return {
    label: ease,
    value: ease
  };
});

export default {
  pointDown: true,
  thickness: 8,
  duration: 1000,
  roundEdges: true,
  angle: 40,
  easings,
  selectedEasing: "circInOut",
  color: "#ffffff",
  fontSize: 80
};
