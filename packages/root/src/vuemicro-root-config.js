import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

import applicationLayout from './layout.html';

const routes = constructRoutes(applicationLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start();
