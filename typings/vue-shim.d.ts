declare module '*.vue' {
    import type { DefineComponent,App } from 'vue';
    // eslint-disable-next-line @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, unknown> & {install(app:App):void};
    export default component;
  }
  