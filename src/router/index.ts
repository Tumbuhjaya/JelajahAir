import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/landingpage.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'lapor_sumber_air',
        component: () => import('@/views/lapor_sumber_air.vue')
      },
      {
        path: 'data_lapor_sumber_air',
        component: () => import('@/views/data_lapor_sumber_air.vue')
      },

      {
        path: 'statistik',
        component: () => import('@/views/statistik.vue')
      },

      {
        path: 'penanganan_air_bersih',
        component: () => import('@/views/penanganan_air_bersih.vue')
      },
      {
        path: 'jejaring_air_bersih',
        component: () => import('@/views/jejaring_air_bersih.vue')
      },
      {
        path: 'sumber_air_sekitar',
        component: () => import('@/views/sumber_air_sekitar.vue')
      },
      {
        path: 'sumber_air_sekitar/detail',
        component: () => import('@/views/detail_sumber_air.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
