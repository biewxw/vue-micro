import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const AuthView = () => import(/* webpackChunkName: "home-view" */ '@/views/auth.vue');

const routes: Array<RouteRecordRaw> = [
  {
    name: 'auth',
    path: '/auth',
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
