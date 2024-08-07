import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import { Preferences } from '@capacitor/preferences';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
GoogleAuth.initialize(
{
  // clientId: '576386395599-t2e4r1gpivibj70e3tsme3raeavjo4lm.apps.googleusercontent.com',
  clientId: '576386395599-cd3h0q6d10n0nd6loiof5l2vgikej5bn.apps.googleusercontent.com ',
  scopes: ['profile', 'email'],
  grantOfflineAccess: false,
});
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
        path: 'tab4',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'lapor_sumber_air',
        component: () => import('@/views/lapor_sumber_air.vue')
        // ,meta: {
        //   requiresAuth: true,
        // }
      },
      {
        path: 'data_lapor_sumber_air',
        component: () => import('@/views/data_lapor_sumber_air.vue')
      },

      {
        path: 'lokasi_sekitar',
        component: () => import('@/views/lokasi_sekitar.vue')
      },

      {
        path: 'statistik',
        component: () => import('@/views/statistik.vue')
      },

      {
        path: 'sekilas',
        component: () => import('@/views/sekilas.vue')
      },

      {
        path: 'chart/:kategori',
        component: () => import('@/views/chart.vue')
      },
      {
        path: 'data_sumber_air/:jenis',
        component: () => import('@/views/data_sumber_air.vue')
      },
      {
      path: 'detail_lapor_sumber_air/:id',
      component: () => import('@/views/detail_lapor_sumber_air.vue')
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
        path: 'sumber_air_sekitar/detail/:id',
        component: () => import('@/views/detail_sumber_air.vue')
      },
       
      {
        path: 'spam_desa/detail/:id/:table',
        component: () => import('@/views/detail_spam_provinsi.vue')
      },
      {
        path: 'spam_provinsi',
        component: () => import('@/views/spam_provinsi.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name !='Login') {
  if (to.matched.some(record => record.meta.requiresAuth)) {    
    const ret = await Preferences.get({ key: 'token' });    
    if(!ret.value){
      const response = await GoogleAuth.signIn();
      let post = {
        email:response.email,
        familyName:response.familyName,givenName:response.givenName,
      imageUrl:response.imageUrl,id:response.id,name:response.name
      }
      try {
      await axios.post(ip_server+'autentifikasi/login_google_mobile',post).then(async function (res) {
        alert(res.data.res)

        await Preferences.set({
                  key: "token",
                  value: res.data.token,
              });
              await Preferences.set({
                  key: "id_user",
                  value: String(res.data.id_user),
              });
          next()                          
      })} catch (error) {
        alert('Data Tidak Sesuai')
      }
    }else{
              await axios.post(ip_server+'autentifikasi/decode',{token:ret.value}).then(async function (res) {
                alert(res.data.res)

                if (res.data.res=='200') {
                  next()
                        }else{
                          const response = await GoogleAuth.signIn();
      let post = {
        email:response.email,
        familyName:response.familyName,givenName:response.givenName,
      imageUrl:response.imageUrl,id:response.id,name:response.name
      }
      try {
      await axios.post(ip_server+'autentifikasi/login_google_mobile',post).then(async function (res) {
        alert(res.data.token)

        await Preferences.set({
                  key: "token",
                  value: res.data.token,
              });
              await Preferences.set({
                  key: "id_user",
                  value: String(res.data.id_user),
              });
          next()                          
      })} catch (error) {
        alert(error)
      }
                        }
                      })
    }

    // if (ret) {
    //   if (!ret.value) {
    //     next({path: '/login',query: { redirect: to.fullPath }})
    //   } else {
    //     await axios.post(ip_server+'autentifikasi/decode',{token:ret.value}).then(function (hsl:object) {
    //       console.log(hsl);
          
    //       if (hsl.res=='200') {
    //                 next()
    //       }else{
    //         next({path: '/login',query: { redirect: to.fullPath }})
    //       }
    //     })
    //     // next()
    //   }
    // } else {
    //   next({path: '/login',query: { redirect: to.fullPath }})
    // }
  } else {
    next()
  }
  
}else {
  next()
}
})
export default router
