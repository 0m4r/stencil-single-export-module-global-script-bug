import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component-1',
  styleUrl: 'my-component-1.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return <div>Component 1</div>;
  }
}
