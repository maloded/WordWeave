const { Project } = require('ts-morph');
const path = require('node:path');

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const uiPath = path.resolve(__dirname, '..', '..', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value) {
  const layers = ['app', 'shared', 'entity', 'features', 'widgets', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((dir) => {
  const indexFilePath = `${dir.getPath()}/index.ts`;
  const indexFile = dir.getSourceFile(indexFilePath);
  if (!indexFile) {
    const sourceCode = `export * from './${dir.getBaseName()}';
`;
    const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

    file.save();
  }
})

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split(path.sep);

    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split(path.sep).slice(0, 3).join(path.sep);
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
