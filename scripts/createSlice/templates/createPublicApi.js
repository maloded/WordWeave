const fs = require("fs/promises");
const resolveRoot = require("../resolveRoot");
const firstCharLowerCase = require("../firstCharLowerCase");

module.exports = async (layer, sliceName) => {
  const schemaName = `${sliceName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot("src", layer, sliceName, "index.ts"),
      `export { ${sliceName} } from './ui/${sliceName}/${sliceName}';
export type { ${schemaName} } from './model/types/${firstCharLowerCase(schemaName)}';
`
    );
  } catch (e) {
    console.log("Failed to create PUBLIC API");
  }
};
