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
                  <h6 class="fz-18 fc-white">Spam Provinsi</h6>
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
      <ion-grid style="padding:0 10px;margin-top: 15px;">
        <ion-row>
          <ion-col size="12">
            <ion-input type="text" v-model="nama" placeholder="Cari Sumber Air " class="custom"></ion-input>
            <ion-button @click="get_spam_desa" style="margin-top: 10px;text-transform: capitalize;">Cari</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid style="padding: 0 15px;">
        <ion-row>
            <ion-col size="6"  v-for="(spam_desa, i) in spam_desa" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/spam_desa/detail/'+spam_desa.id+'/'+spam_desa.table)">
                    <ion-img v-if="spam_desa.foto_1" :src="spam_desa.src" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>

                    <ion-badge color="primary" style="position: absolute;top:10px;right:10px;">
                      <ion-text>
                        <h6 class="fz-10 fc-white" style="font-weight:bold;">{{spam_desa.kab_kot?spam_desa.kab_kot:''}}</h6>
                      </ion-text>
                    </ion-badge>

                    <div style="width:100%;padding:20px 10px;background-color: rgba(0, 0, 0, 0.8);position: absolute;left:0;right:0;bottom:0;">
                      <ion-text>
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{spam_desa.nama?spam_desa.nama:''}}</h5>
                      </ion-text>

                      <div style="width:100%;height:1px;background-color:#fff;margin:5px 0;"></div>
                            
                      <ion-text>
                        <h6 class="fz-10 fc-white" style="font-weight:normal;">Kec. {{spam_desa.kecamatan?spam_desa.kecamatan:''}} Kel. {{spam_desa.desa_kel?spam_desa.desa_kel:''}}</h6>
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
import { IonPage, IonHeader, IonToolbar, IonInput, IonContent, IonLoading, IonImg, IonButton, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonGrid, IonRow, IonCol, IonText, IonBadge } from '@ionic/vue';
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
        this.get_spam_desa()
    },
    data() {
        return {
            spam_desa :[],
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
        let list_spam_desa = await axios({
        method: "post",
        data:{desa:1 , limit: 5 , offset:5*(vm.page-1) , nama:vm.cari},
            url: ip_server + `spam_desa/list`,
        })
        let list_spam_desa2 = await axios({
        method: "post",
        data:{desa:1 , limit: 5 , offset:5*(vm.page-1) , nama:vm.cari},
            url: ip_server + `bpksp_spam/list`,
        })
        let data2 = list_spam_desa2.data.data

            let data = list_spam_desa.data.data
          setTimeout(function () {
            for (let i = 0; i <  data.length; i++) {
              data[i].id = data[i].spam_desa_id

              if(data[i].foto_1){
                  if(data[i].foto_1.substring(0,4) == 'http' ){
                      data[i].src =  data[i].foto_1 
                  }else if(data[i].foto_1){
                      data[i].src=ip_server+'foto/'+  data[i].foto_1 
                  }
                }
                data[i].table = 1
                vm.spam_desa.push(data[i])
            }
            for (let i = 0; i <  data2.length; i++) {
              data2[i].id = data2[i].bpksp_spam_id

              if(data2[i].foto_1){
                  if(data2[i].foto_1.substring(0,4) == 'http' ){
                      data2[i].src =  data2[i].foto_1 
                  }else if(data2[i].foto_1){
                      data2[i].src=ip_server+'foto/'+  data2[i].foto_1 
                  }
                }
                data2[i].table = 2
                vm.spam_desa.push(data2[i])
            }
          ev.target.complete();
        },setTimeout(5000))
        },
        async get_spam_desa(){
        let vm = this
        vm.loading = true
       vm.cari =  vm.nama 
        vm.page = 1
        let list_spam_desa = await axios({
        method: "post",
        data:{desa:1 , limit: 5 , offset:5*(vm.page-1) , nama:vm.cari},
            url: ip_server + `spam_desa/list`,
        })
        let list_spam_desa2 = await axios({
        method: "post",
        data:{desa:1 , limit: 5 , offset:5*(vm.page-1) , nama:vm.cari},
            url: ip_server + `bpksp_spam/list`,
        })
        let data2 = list_spam_desa2.data.data

            vm.spam_desa = []
            vm.spam_desa = list_spam_desa.data.data
            for (let i = 0; i <  vm.spam_desa.length; i++) {
              vm.spam_desa[i].id = vm.spam_desa[i].spam_desa_id
              vm.spam_desa[i].table = 1

                vm.spam_desa[i].src=ip_server+'foto/'+  vm.spam_desa[i].foto_1 
                if(vm.spam_desa[i].foto_1){
                  if(vm.spam_desa[i].foto_1.substring(0,4) == 'http' ){
                      vm.spam_desa[i].src =  vm.spam_desa[i].foto_1 
                  }else if(vm.spam_desa[i].foto_1){
                      vm.spam_desa[i].src=ip_server+'foto/'+  vm.spam_desa[i].foto_1 
                  }
                }
            }
            for (let i = 0; i <  data2.length; i++) {
              if(data2[i].foto_1){
                  if(data2[i].foto_1.substring(0,4) == 'http' ){
                      data2[i].src =  data2[i].foto_1 
                  }else if(data2[i].foto_1){
                      data2[i].src=ip_server+'foto/'+  data2[i].foto_1 
                  }
                }
                data2[i].table = 2
                data2[i].id = data2[i].bpksp_spam_id
                vm.spam_desa.push(data2[i])
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