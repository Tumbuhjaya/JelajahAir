<template>
  <ion-page >
    <ion-header>
        <ion-toolbar>
            <ion-grid style="padding-left:10px;padding-right: 10px;">
                <ion-row>
                    <ion-col size="12">
                        <div style="width:100%;height:40px;background-color:;display: flex;justify-content: center;align-items: flex-start">
                            <ion-img src="/assets/logo_prov_jateng.png" style="width:35px;"></ion-img>
                            <div style="display: flex;flex-direction: column;margin-left: 10px">
                                <ion-text>
                                    <h6 class="fc-white fz-20" style="letter-spacing: 1.5px;"><strong>JELAJAH AIR</strong></h6>
                                </ion-text>

                                <ion-text>
                                    <h6 class="fc-white fz-12">PROVINSI JAWA TENGAH</h6>
                                </ion-text>
                            </div>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-header>
    <ion-loading class="custom-loading" message="Loading..." v-if="loading" spinner="circles"></ion-loading>
    <ion-content :fullscreen="true" v-else>
      <ion-grid style="padding: 0;">
        <ion-row>
          <ion-col size="12" style="padding:0">
            <swiper 
                :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                }"
                :pagination="{
                clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
                >
                <swiper-slide  v-for="(banner, i) in banner" :key="i">
                    <ion-img  :src="banner.src" style="width: 100%;height: 200px;object-fit: fill"></ion-img>
                </swiper-slide>
            </swiper>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid style="padding:0 10px;margin-top:15px;">
        <ion-row>
            <ion-col size="8">
                <ion-text>
                    <h6 class="fz-16" style="color:#000;"><strong>Data Spam Provinsi</strong></h6>
                </ion-text>
            </ion-col>
            <ion-col size="4">
                <ion-text class="ion-text-end">
                    <h6 class="fz-16" style="color:grey" @click="$router.push('/tabs/spam_provinsi')">Lainnya</h6>
                </ion-text>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6" v-for="(spam_desa, i) in spam_desa" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/spam_desa_sekitar/detail/'+spam_desa.OGR_FID)">
                    <ion-img v-if="spam_desa.foto_1" :src="spam_desa.src" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>

                    <div style="width:100%;padding:20px 10px;background-color: rgba(0, 0, 0, 0.8);position: absolute;left:0;right:0;bottom:0;">
                        <ion-text>
                            <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{spam_desa.nama?spam_desa.nama:''}}</h5>
                        </ion-text>

                        <div style="width:100%;height:1px;background-color:#fff;margin:5px 0;"></div>
                            
                        <ion-text>
                            <h6 class="fz-10 fc-white" style="font-weight:normal;">Kec. {{spam_desa.kecamatan?spam_desa.kecamatan:''}} Kel. {{spam_desa.desa_kel?spam_desa.desa_kel:''}}</h6>
                        </ion-text>
                            
                    </div>

                    <ion-badge color="primary" style="position: absolute;top:10px;right:10px;">
                        <ion-text>
                            <h6 class="fz-10 fc-white" style="font-weight:bold;">{{spam_desa.kab_kot?spam_desa.kab_kot:''}}</h6>
                        </ion-text>
                    </ion-badge>
                </div>
            </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid style="padding:0 10px;margin-top:15px;">
        <ion-row>
            <ion-col size="8">
                <ion-text>
                    <h6 class="fz-16" style="color:#000;"><strong>Data Sumber Air</strong></h6>
                </ion-text>
            </ion-col>
            <ion-col size="4">
                <ion-text class="ion-text-end">
                    <h6 class="fz-16" style="color:grey" @click="$router.push('/tabs/sumber_air_sekitar')">Lainnya</h6>
                </ion-text>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6"  v-for="(sumber_air, i) in sumber_air" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail/'+sumber_air.OGR_FID)">
                    <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>

                    <div style="width:100%;padding:20px 10px;background-color: rgba(0, 0, 0, 0.8);position: absolute;left:0;right:0;bottom:0;">
                        <ion-text>
                            <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama?sumber_air.nama:''}}</h5>
                        </ion-text>

                        <div style="width:100%;height:1px;background-color:#fff;margin:5px 0;"></div>

                        <ion-text>
                            <h6 class="fz-10 fc-white" style="font-weight:normal;">Kec. {{sumber_air.kecamatan}} Kel. {{sumber_air.desa_kel}}</h6>
                        </ion-text>
                    </div>

                    <ion-badge color="primary" style="position: absolute;top:10px;right:10px;">
                        <ion-text>
                            <h6 class="fz-10 fc-white" style="font-weight:bold;">{{sumber_air.kab_kot}}</h6>
                        </ion-text>
                    </ion-badge>
                </div>
            </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button @click="$router.push('/tabs/lapor_sumber_air')" style="--background:#163891">
            <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
          </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonGrid,IonLoading, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonImg, IonInput, IonText, IonBadge  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Preferences } from '@capacitor/preferences';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { addCircleOutline, peopleCircleOutline  } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
  import 'swiper/css/navigation';
import '@ionic/vue/css/ionic-swiper.css';
export default defineComponent({
    components: {
        IonPage,IonLoading,
        IonHeader,
        IonToolbar,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonIcon,
        IonFab,
        IonFabButton,
        IonImg,
        IonInput,
        IonText,
        IonBadge,
        Swiper,
        SwiperSlide
    },
    setup() {
        return { modules: [Autoplay, Pagination, Navigation], addCircleOutline, peopleCircleOutline };
    },
    
    data() {
        return {
            login:0,
            banner :[],
            sumber_air :[],
            spam_desa :[],
            loading :false
        };
    },
    async ionViewDidEnter() {
        this.get_banner()
        this.get_sumber_air()
        this.get_spam_desa()
    },
    methods: {
        async get_spam_desa(){
        let vm = this
        vm.loading = true
        let list_spam_desa = await axios({
        method: "post",
        data:{limit:4,desa:1},
            url: ip_server + `spam_desa/list`,
        })
            vm.spam_desa = []
            console.log(list_spam_desa);
            vm.spam_desa = list_spam_desa.data.data
            for (let i = 0; i <  vm.spam_desa.length; i++) {
                vm.spam_desa[i].src=ip_server+'foto/'+  vm.spam_desa[i].foto_1 
            }
            vm.loading = false

    },
        async get_sumber_air(){
        let vm = this
        vm.loading = true

        let list_sumber_air = await axios({
        method: "post",
        data:{limit:2,desa:1},
            url: ip_server + `sumber_air/list`,
        })
            vm.sumber_air = []
            vm.sumber_air = list_sumber_air.data.data
            for (let i = 0; i <  vm.sumber_air.length; i++) {
                if(vm.sumber_air[i].foto_1.substring(0,4) == 'http' ){
                    vm.sumber_air[i].src =  vm.sumber_air[i].foto_1 
                }else if(vm.sumber_air[i].foto_1){
                    vm.sumber_air[i].src=ip_server+'foto/'+  vm.sumber_air[i].foto_1 

                }
            }
            console.log(vm.sumber_air,'sumber_air');
            vm.loading = false

    },
    async get_banner(){
        let vm = this
        vm.loading = true

        let lapor = await axios({
        method: "post",
            url: ip_server + `banner/list`,
        })
            vm.banner = []
            vm.banner = lapor.data.data
            for (let i = 0; i <  vm.banner.length; i++) {
                vm.banner[i].src=ip_server+'foto/'+  vm.banner[i].foto_1 
            }
            console.log(vm.banner,'banner');
            vm.loading = false

    },
        async logoff(){
            await Preferences.clear()
            this.login = 0
        }
    },
    async ionViewWillEnter() {
        const ret = await Preferences.get({ key: 'token' });
        if (ret) {
            this.login = 1
        }else{
            this.login = 0
        }
    },
});
</script>
<style scoped>

ion-input{
  border-bottom: 1px solid transparent;
}
ion-input.custom {
  --background: #ECECEC;
  --color: #000;
  --placeholder-color: #858585;
  --placeholder-opacity: 0.8;

  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  --border-radius:15px;
}

.fab-vertical-bottom{
    right: 20px;
}
ion-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;

    color: #1c6dff;
  }
ion-input{
  border-bottom: 1px solid transparent;
  --highlight-color-focused: none;
}
</style>