import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component-2',
  styleUrl: 'my-component-2.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return <div>Component 2</div>;
  }
}
