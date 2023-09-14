const createTemplate = require("./templates/createTemplate");
const firstCharUpperCase = require("./firstCharUpperCase");

const layer = process.argv[2];
const slice = process.argv[3];

const layers = {
  f: "features",
  e: "entity",
  p: "pages",
};

if (!layer || !layers[layer]) {
  const keys = Object.keys(layers);
  const values = Object.values(layers);
  throw new Error(`Enter slice key '${keys.join(" or ")}' like value '${values.join(", ")}' concerning`);
}

if (!slice) {
  throw new Error("Enter slice name");
}

const sliceName = firstCharUpperCase(slice);

createTemplate(layers[layer], sliceName);
