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
  duration: 300,
  roundEdges: true,
  angle: 40,
  easings,
  selectedEasing: "linear",
  color: "#ffffff",
  fontSize: 80
};
