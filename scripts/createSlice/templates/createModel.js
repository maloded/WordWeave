const fs = require("fs/promises");
const resolveRoot = require("../resolveRoot");
const reduxSliceTemplate = require("./reduxSliceTemplate");
const schemaTypeTemplate = require("./schemaTypeTemplate");
const firstCharLowerCase = require("../firstCharLowerCase");

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot("src", layer, sliceName, "model", ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath("types"));
      await fs.mkdir(resolveModelPath("slices"));
      await fs.mkdir(resolveModelPath("selectors"));
      await fs.mkdir(resolveModelPath("services"));
    } catch (e) {
      console.log(`Failed to create a segment for the slice ${sliceName}`, e);
    }
  };

  const sliceNameLower = firstCharLowerCase(sliceName);

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath("slices", `${sliceNameLower}Slice.ts`),
        reduxSliceTemplate(sliceNameLower)
      );
    } catch (e) {
      console.log("Failed to create a redux slice", e);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath("types", `${sliceNameLower}Schema.ts`),
        schemaTypeTemplate(sliceName)
      );
    } catch (e) {
      console.log("Failed to create a type schema for the slice's state", e);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};
