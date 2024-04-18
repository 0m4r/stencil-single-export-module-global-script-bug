import { reactOutputTarget } from '@stencil/react-output-target';

import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  sourceMap: true,
  globalScript: "./src/global.js",
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: "dist-custom-elements",
      generateTypeDeclarations: true,
      includeGlobalScripts: true,
      customElementsExportBehavior: "single-export-module",
      minify: false,
    },
    reactOutputTarget({
      componentCorePackage: "stencil-library/dist/",
      proxiesFile: "../react-library/lib/components/stencil-generated/index.ts",
      includeImportCustomElements: true,
      includeDefineCustomElements: undefined,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
