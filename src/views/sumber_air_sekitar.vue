<template>
  <ion-page >
    <ion-header>
      <ion-toolbar>
        <ion-grid style="padding-left: 10px;padding-right: 10px;">
          <ion-row>
            <ion-col size="2">
              <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: flex-start;align-items: center;">
                <ion-icon :icon="arrowBackCircleOutline" @click="$router.push('/tabs/dashboard')" style="font-size: 26px;color: #fff;"></ion-icon>
              </div>
            </ion-col>
            <ion-col size="8">
              <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: center;align-items: center;">
                <ion-text class="ion-text-center">
                  <h6 class="fz-16 fc-white">SUMBER AIR</h6>
                </ion-text>
              </div>
            </ion-col>
            <ion-col size="2"></ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-loading  message="Loading..." v-if="loading" spinner="circles"></ion-loading>

    <ion-content :fullscreen="true" v-else>
      <ion-grid style="padding:0 10px;margin-top:15px;">
        <ion-row>
          <ion-col size="12">
            <ion-input type="text" v-model="nama" placeholder="Cari Sumber Air " class="custom"></ion-input>
            <ion-button @click="get_sumber_air" style="margin-top: 10px;text-transform: capitalize;">Cari</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid style="padding:0 15px;">
        <ion-row>
            <ion-col size="6"  v-for="(sumber_air, i) in sumber_air" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail/'+sumber_air.OGR_FID)">
                    <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                    <ion-badge color="primary" style="position: absolute;top:10px;right:10px;">
                      <ion-text>
                        <h6 class="fz-10 fc-white" style="font-weight:bold;">{{sumber_air.kab_kot?sumber_air.kab_kot:''}}</h6>
                      </ion-text>
                    </ion-badge>

                    <div style="width:100%;padding:20px 10px;background-color: rgba(0, 0, 0, 0.8);position: absolute;left:0;right:0;bottom:0;">
                      <ion-text>
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama?sumber_air.nama:''}}</h5>
                      </ion-text>

                      <div style="width:100%;height:1px;background-color:#fff;margin:5px 0;"></div>
                            
                      <ion-text>
                        <h6 class="fz-10 fc-white" style="font-weight:normal;">Kec. {{sumber_air.kecamatan?sumber_air.kecamatan:''}} Kel. {{sumber_air.desa_kel?sumber_air.desa_kel:''}}</h6>
                      </ion-text>
                    </div>
                </div>
            </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-infinite-scroll threshold="10%" @ionInfinite="loadData">
              <ion-infinite-scroll-content loading-spinner="bubbles" loading-text=" Loading more item">
                
              </ion-infinite-scroll-content>
            </ion-infinite-scroll>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonInput, IonLoading, IonInfiniteScroll, IonIcon, IonButton, IonImg, IonInfiniteScrollContent, IonContent, IonGrid, IonRow, IonCol, IonText, IonBadge } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import { arrowBackCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
        IonInfiniteScroll,
        IonInfiniteScrollContent,
        IonImg,
        IonButton,
        IonIcon,
        IonLoading,
        IonInput,
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonBadge
    },
    setup() {
        return { arrowBackCircleOutline };
    },
    async ionViewDidEnter() {
        this.get_sumber_air()
    },
    data() {
        return {
            sumber_air :[],
            page:1,
            nama:'',
            cari:'',
            loading:false
        };
    },
    methods: {
        async  loadData(ev){
          let vm = this
          vm.page++ 
        let list_sumber_air = await axios({
        method: "post",
        data:{desa:1 , limit: 10 , offset:10*(vm.page-1) , nama:vm.cari},
            url: ip_server + `sumber_air/list`,
        })
            let data = list_sumber_air.data.data
          setTimeout(function () {
            for (let i = 0; i <  data.length; i++) {
                // data[i].src=ip_server+'foto/'+  data[i].foto_1 
                if(data[i].foto_1.substring(0,4) == 'http' ){
                    data[i].src =  data[i].foto_1 
                }else if(data[i].foto_1){
                    data[i].src=ip_server+'foto/'+  data[i].foto_1 

                }
                vm.sumber_air.push(data[i])
            }       
          ev.target.complete();
        },setTimeout(5000))
        },
        async get_sumber_air(){
        let vm = this
        vm.loading = true
       vm.cari =  vm.nama 
        vm.page = 1
        let list_sumber_air = await axios({
        method: "post",
        data:{desa:1 , limit: 10 , offset:10*(vm.page-1) , nama:vm.cari},
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
            vm.loading = false
    },
    },
});
</script>
<style scoped>
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

ion-input{
  border-bottom: 1px solid transparent;
  --highlight-color-focused: none;
}
</style>