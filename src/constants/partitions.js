export default {
  perPale: {
    id: "perPale",
    partsNb: 2,
    label: "per pale",
    coordinates: function({ x, y, height, width }) {
      const half = height / 2;
      return [
        { x, y, width, height: half },
        { x, y: half, width, height: half }
      ];
    }
  }, // vertical split
  perFess: {
    id: "perFess",
    partsNb: 2,
    label: "per fess",
    coordinates: function({ x, y, height, width }) {
      const half = width / 2;
      return [
        { x, y, width: half, height },
        { x: half, y, width: half, height }
      ];
    }
  }, // horizontal split
  quarterly: {
    id: "quarterly",
    partsNb: 4,
    label: "quarterly",
    coordinates: function({ x, y, height, width }) {
      const halfH = height / 2;
      const halfW = width / 2;
      return [
        { x, y, width: halfW, height: halfH },
        { x: halfW, y, width: halfW, height: halfH },
        { x, y: halfH, width: halfW, height: halfH },
        { x: halfW, y: halfH, width: halfW, height: halfH }
      ];
    }
  }, // quarter split
  perBendSinister: {
    id: "perBendSinister",
    partsNb: 2,
    label: "per bend sinister",
    coordinates: function({ x, y, height, width }) {
      const half = width / 2;
      return [
        { x, y, width, height: half },
        { x, y: half, width, height: half }
      ];
    }
  }, // diagonal split bottom left to top right
  perBend: {
    id: "perBend",
    partsNb: 2,
    label: "per bend",
    coordinates: function({ x, y, height, width }) {
      const half = width / 2;
      return [
        { x, y, width, height: half },
        { x, y: half, width, height: half }
      ];
    }
  }, // diagonal split top left to bottom right
  perSaltire: {
    id: "perSaltire",
    partsNb: 4,
    label: "per saltire",
    coordinates: function({ x, y, height, width }) {
      const halfH = height / 2;
      const halfW = width / 2;
      return [
        { x, y, width: halfW, height: halfH },
        { x: halfW, y, width: halfW, height: halfH },
        { x, y: halfH, width: halfW, height: halfH },
        { x: halfW, y: halfH, width: halfW, height: halfH }
      ];
    }
  }, // diagonal cross split
  perChevron: {
    id: "perChevron",
    partsNb: 2,
    label: "per chevron",
    coordinates: function({ x, y, height, width }) {
      const half = width / 2;
      return [
        { x, y, width: half, height },
        { x: half, y, width: half, height }
      ];
    }
  } // chevron split <:o)
};
