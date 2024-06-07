<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 75%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h5 style="font-size: 22px;"><strong>JELAJAH AIR</strong></h5>
                <h6 style="font-weight: normal;font-size: 12px;">PROVINSI JAWA TENGAH</h6>
            </div>
            <div style="width: 25%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;">
                <div style="width:50px;height: 50px;background-color: #0086CF;border-radius: 100%;overflow: hidden;">
                    <ion-icon v-if="login" :icon="peopleCircleOutline" color="light" style="font-size: 50px;" @click="logoff"></ion-icon>
                    <ion-icon v-else :icon="peopleCircleOutline" color="light" style="font-size: 50px;" @click="$router.push('/login')"></ion-icon>
                </div>
            </div>
        </div>
    </ion-header>
    <ion-loading class="custom-loading" message="Loading..." v-if="loading" spinner="circles"></ion-loading>

    <ion-content v-else>
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
          <ion-col size="12">
            <!-- <div style="border-radius: 10px;overflow: hidden;"  v-for="(banner, i) in banner" :key="i">
                <ion-img  :src="banner.src" style="width: 100%;"></ion-img>
            </div> -->

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
                    <ion-img  :src="banner.src" style="width: 100%;"></ion-img>
                </swiper-slide>
            </swiper>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 15px;">
            <ion-col size="8">
                <h5><strong>Spam Provinsi</strong></h5>
            </ion-col>

            <ion-col size="4">
                <h5 style="color: grey;text-align: right;" @click="$router.push('/tabs/spam_provinsi')">Lainnya</h5>
            </ion-col>
        </ion-row>
        <ion-row >
            <ion-col size="6"  v-for="(spam_desa, i) in spam_desa" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/spam_desa_sekitar/detail/'+spam_desa.OGR_FID)">
                    <ion-img v-if="spam_desa.foto_1" :src="spam_desa.src" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama}}</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">{{sumber_air.kab_kot}},{{sumber_air.kecamatan}},{{sumber_air.desa_kel}}</h6>
                        <!-- <h6 style="color: #fff;font-size: 10px;font-weight: normal;">{{sumber_air.foto_1}}</h6> -->
                    </div>
                </div>
            </ion-col>

            <!-- <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail')">
                    <ion-img src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col> -->
        </ion-row>
   
        <ion-row style="margin-top: 15px;">
            <ion-col size="8">
                <h5><strong>Sumber Air Sekitar Anda</strong></h5>
            </ion-col>

            <ion-col size="4">
                <h5 style="color: grey;text-align: right;" @click="$router.push('/tabs/sumber_air_sekitar')">Lainnya</h5>
            </ion-col>
        </ion-row>
        <ion-row >
            <ion-col size="6"  v-for="(sumber_air, i) in sumber_air" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail/'+sumber_air.OGR_FID)">
                    <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama}}</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">{{sumber_air.kab_kot}},{{sumber_air.kecamatan}},{{sumber_air.desa_kel}}</h6>
                    </div>
                </div>
            </ion-col>
        </ion-row>
   

        
      </ion-grid>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button @click="$router.push('/tabs/lapor_sumber_air')">
            <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
          </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid,IonLoading, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonImg, IonInput  } from '@ionic/vue';
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
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonIcon,
        IonFab,
        IonFabButton,
        IonImg,
        IonInput,
        Swiper,
        SwiperSlide,
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
            console.log(vm.spam_desa,'spam_desa');
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
ion-header{
  box-shadow: none !important;
  background-color: #fff;
}

ion-content{
    /* --background:purple; */
}

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