export default {
  perPale: {
    id: "perPale", // vertical split
    partsNb: 2,
    label: "per pale",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x, y },
          { x: x + w / 2, y },
          { x: x + w / 2, y: y + h },
          { x: x, y: y + h },
        ],
        [
          { x: x + w / 2, y },
          { x: x + w, y },
          { x: x + w, y: y + h },
          { x: x+ w / 2, y: y + h },
        ],
      ];
    },
  },
  perFess: {
    id: "perFess", // horizontal split
    partsNb: 2,
    label: "per fess",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x, y },
          { x: x + w, y },
          { x: x + w, y: y + h / 2 },
          { x: x, y: y + h / 2 },
        ],
        [
          { x: x, y: y + h / 2 },
          { x: x + w, y: y + h / 2 },
          { x: x + w, y: y + h },
          { x: x, y: y + h },
        ],
      ];
    },
  },
  quarterly: {
    id: "quarterly", // quarter split
    partsNb: 4,
    label: "quarterly",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x, y },
          { x: x + w / 2, y },
          { x: x + w / 2, y: y + h / 2 },
          { x: x, y: y + h / 2 },
        ],
        [
          { x: x + w / 2, y },
          { x: x + w, y },
          { x: x + w, y: y + h / 2 },
          { x: x+ w / 2, y: y + h / 2 },
        ],
        [
          { x: x, y: y + h / 2 },
          { x: x + w / 2, y: y + h / 2 },
          { x: x + w / 2, y: y + h },
          { x: x, y: y + h },
        ],
        [
          { x: x + w / 2, y: y + h / 2 },
          { x: x + w, y: y + h / 2 },
          { x: x + w, y: y + h },
          { x: x + w / 2, y: y + h },
        ],
      ];
    },
  },
  perBendSinister: {
    id: "perBendSinister", // diagonal split bottom left to top right
    partsNb: 2,
    label: "per bend sinister",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x, y },
          { x: x + w, y },
          { x, y: y + h },
        ],
        [
          { x, y: y + h },
          { x: x + w, y },
          { x: x + w, y: y + h },
        ],
      ];
    },
  },
  perBend: {
    id: "perBend", // diagonal split top left to bottom right
    partsNb: 2,
    label: "per bend",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x, y },
          { x: x + w, y: y + h },
          { x, y: y + h },
        ],
        [
          { x, y },
          { x: x + w, y },
          { x: x + w, y: y + h },
        ],
      ];
    },
  },
  perSaltire: {
    id: "perSaltire", // diagonal cross split
    partsNb: 4,
    label: "per saltire",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x, y },
          { x: x + w, y: y },
          { x: x + w / 2, y: y + h / 2 },
        ],
        [
          { x, y },
          { x: x, y: y + h },
          { x: x + w / 2, y: y + h / 2 },
        ],
        [
          { x: x + w, y: y },
          { x: x + w, y: y + h },
          { x: x + w / 2, y: y + h / 2 },
        ],
        [
          { x: x, y: y + h },
          { x: x + w / 2, y: y + h / 2 },
          { x: x + w, y: y + h },
        ],
      ];
    },
  },
  perChevron: {
    // chevron split <:o)
    id: "perChevron",
    partsNb: 2,
    label: "per chevron",
    coordinates: function ({ x, y, h, w }) {
      return [
        [
          { x: x, y: y },
          { x: x + w, y: y },
          { x: x + w, y: y + h },
          { x: x + w / 2, y: y + h / 2 },
          { x: x, y: y + h },
        ],
        [
          { x: x, y: y + h },
          { x: x + w / 2, y: y + h / 2 },
          { x: x + w, y: y + h },
        ],
      ];
    },
  },
};
