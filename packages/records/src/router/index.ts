import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const RecordsView = () => import(/* webpackChunkName: "records-view" */ '@/views/records.vue');

const routes: Array<RouteRecordRaw> = [
  {
    name: 'records',
    path: '/records/:id',
    component: RecordsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
