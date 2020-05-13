export default {
  perPale: function({ x, y, height, width }) {
    const half = height / 2;
    return [
      { x, y, width, height: half },
      { x, y: half, width, height: half }
    ];
  },
  perFess: function({ x, y, height, width }) {
    const half = width / 2;
    return [
      { x, y, width: half, height },
      { x: half, y, width: half, height }
    ];
  },
  quarterly: function({ x, y, height, width }) {
    const halfH = height / 2;
    const halfW = width / 2;
    return [
      { x, y, width: halfW, height: halfH },
      { x: halfW, y, width: halfW, height: halfH },
      { x, y: halfH, width: halfW, height: halfH },
      { x: halfW, y: halfH, width: halfW, height: halfH }
    ];
  },
  perBendSinister: function({ x, y, height, width }) {
    return [];
  },
  perBend: function({ x, y, height, width }) {
    return [];
  },
  perSaltire: function({ x, y, height, width }) {
    return [];
  },
  perChevron: function({ x, y, height, width }) {
    return [];
  }
};
