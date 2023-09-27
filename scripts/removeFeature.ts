import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // Example: isArticleEnabled
const featureState = process.argv[3]; // Example: off/on

if (!removedFeatureName) {
  throw new Error('Please specify the feature flag name.');
}

if (!featureState) {
  throw new Error('Please specify the feature state (on or off).');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Incorrect feature state value (on or off).');
}

const project = new Project({});

project.addSourceFileAtPath('src/**/*.ts');
project.addSourceFileAtPath('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFeatures = false;

  node.forEachChild(child => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
      if (!objectOptions) return;
      const featureNameProperty = objectOptions.getProperty('name');
      const onFunctionProperty = objectOptions.getProperty('on');
      const offFunctionProperty = objectOptions.getProperty('off');

      const featureName = featureNameProperty?.getFirstDescendantByKind(
        SyntaxKind.StringLiteral
      )?.getText().slice(1, -1);
      const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

      if (featureName !== removedFeatureName) return;

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
