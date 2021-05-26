import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './app.vue';
import router from './router';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance(app) {
    app.use(router);
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
