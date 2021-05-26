import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const ScheduleView = () => import(/* webpackChunkName: "schedule-view" */ '@/views/schedule.vue');

const routes: Array<RouteRecordRaw> = [
  {
    name: 'schedule',
    path: '/schedule',
    component: ScheduleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
