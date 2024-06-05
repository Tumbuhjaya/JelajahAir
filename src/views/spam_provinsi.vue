<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Spam Provinsi</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-loading  message="Loading..." v-if="loading" spinner="circles"></ion-loading>

<ion-content v-else>
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
          <ion-col size="12">
            <ion-input type="text" v-model="nama" placeholder="Cari Sumber Air " class="custom"></ion-input>
            <ion-button @click="get_sumber_air">Cari</ion-button>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 15px;">
            <ion-col size="6"  v-for="(sumber_air, i) in sumber_air" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail/'+sumber_air.OGR_FID)">
                    <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama?sumber_air.nama:''}}</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">{{sumber_air.kab_kot?sumber_air.kab_kot:''}},{{sumber_air.kecamatan?sumber_air.kecamatan:''}},{{sumber_air.desa_kel?sumber_air.desa_kel:''}}</h6>
                    </div>
                </div>
            </ion-col>
        </ion-row>
        <ion-infinite-scroll threshold="10%" @ionInfinite="loadData">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text=" Loading more item">
          
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader,IonInput, IonContent,IonLoading,IonImg,IonButton,IonIcon,IonInfiniteScroll,IonInfiniteScrollContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import { arrowBackCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
      IonInfiniteScroll,IonInfiniteScrollContent,IonImg,IonButton,IonIcon,IonLoading,
        IonInput,
        IonPage,
        IonHeader,
        IonContent,
        IonGrid,
        IonRow,
        IonCol
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
                data[i].src=ip_server+'foto/'+  data[i].foto_1 
                vm.sumber_air.push(data[i])
            }       
          ev.target.complete();
        },setTimeout(5000))
        },
        async get_sumber_air(){
        let vm = this
        vm.loading = true

        console.log(vm.cari ,  vm.nama );

       vm.cari =  vm.nama 
       console.log(vm.cari ,  vm.nama );

        vm.page = 1
        let list_sumber_air = await axios({
        method: "post",
        data:{desa:1 , limit: 10 , offset:10*(vm.page-1) , nama:vm.cari},
            url: ip_server + `sumber_air/list`,
        })
            vm.sumber_air = []
            vm.sumber_air = list_sumber_air.data.data
            for (let i = 0; i <  vm.sumber_air.length; i++) {
                vm.sumber_air[i].src=ip_server+'foto/'+  vm.sumber_air[i].foto_1 
                console.log(vm.sumber_air[i]);
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