import ermine from "../assets/ermine.svg";
import vair from "../assets/vair.svg";

export const WIDTH = 600;
export const HEIGHT = 660;

export const colours = {
  gules: "#E20909",
  azure: "#2B5DF2",
  vert: "#5AB532",
  sable: "#222",
  purpure: "#D576AD"
};
export const metals = {
  or: "#FCEF3C",
  argent: "#f8f8ff"
};
export const furs = [ermine, vair];
export const fields = {
  ...colours,
  ...metals
};
export const partitions = {
  perPale: { id: "perPale", partsNb: 2, label: "per pale" }, // vertical split
  perFess: { id: "perFess", partsNb: 2, label: "per fess" }, // horizontal split
  quarterly: { id: "quarterly", partsNb: 4, label: "quarterly" }, // quarter split
  perBendSinister: {
    id: "perBendSinister",
    partsNb: 2,
    label: "per bend sinister"
  }, // diagonal split bottom left to top right
  perBend: { id: "perBend", partsNb: 2, label: "per bend" }, // diagonal split top left to bottom right
  perSaltire: { id: "perSaltire", partsNb: 4, label: "per saltire" }, // diagonal cross split
  perChevron: { id: "perChevron", partsNb: 2, label: "per chevron" } // chevron split <:o)
};
export const fieldVariations = [
  "paly", // vertical stripes
  "barry", // horizontal stripes
  "chequy", // chess board pattern
  "lozengy", // 45° turned chess board pattern
  "fusilly", // stretched lozengy
  "bendy", // diagonal stripes top left to bottom right
  "bendy sinister", // diagonal stripes bottom left to top right
  "fretty", // knotted diagonal left and right stripes (apple pie top pattern)
  "goutty", // droplets
  "semé of roses", // roses
  "semé of fleur de lys" // fleur de lys
];
export const ordinaries = [
  "fess", // horizontal stripe across the shield
  "pale", // vertical stripe down the shield
  "bend", // diagonal stripe
  "chevron", // like a house gable, pointing upwards
  "cross", // a plain cross
  "saltire", // a 'St. Andrew's cross'
  "chief", // bar across top edge of shield
  "bordure", // border round edges of shield
  "pile" // downward-pointing triangle
];
export const charges = [
  "crosses",
  "stars",
  "rings",
  "balls",
  "crescents",
  "diamonds",
  "flowers"
];
