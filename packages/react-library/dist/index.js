import { createReactComponent } from './react-component-lib';
import { defineCustomElement as defineMyComponent1 } from 'stencil-library/dist/components/my-component-1.js';
import { defineCustomElement as defineMyComponent2 } from 'stencil-library/dist/components/my-component-2.js';
export const MyComponent1 = createReactComponent('my-component-1', undefined, undefined, defineMyComponent1);
export const MyComponent2 = createReactComponent('my-component-2', undefined, undefined, defineMyComponent2);
//# sourceMappingURL=index.js.map