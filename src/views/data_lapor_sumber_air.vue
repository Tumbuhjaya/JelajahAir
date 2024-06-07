<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Data Lapor Air Bersih</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 0 20px 15px 20px;">
        <ion-row style="margin-top: 15px;"   v-for="(list, i) in data" :key="i" >
            <ion-col size="12">
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #eefafd;display: flex;">
                    <div style="width: 40%;">
                        <ion-img v-if="list.foto_1" :src="list.src" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                        <ion-img v-else src="https://placehold.co/100?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                    </div>
                    <div style="width:60%;margin-left: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                        <h6 style="font-size: 16px;color:#1c47bc"><strong>{{ list.nama_sumber_air }}</strong></h6>
                        <div style="display: table;margin-top: 5px;">
                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Alamat</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.alamat }}</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Desa</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.desa }}</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Pengelola</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.pengelola }}</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Debit</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.debit }}</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Jumlah KK Terlayani</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.jumlah_KK_terlayani }}</h6>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </ion-col>
        </ion-row>
        <ion-refresher slot="fixed" @ionRefresh="getList($event)">
        <ion-refresher-content
          :pulling-icon="chevronDownCircleOutline"
          pulling-text="Tarik untuk reload"
          refreshing-spinner="circles"
          refreshing-text="Mohon Tunggu..."
        >
        </ion-refresher-content>
      </ion-refresher>

      
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonIcon,IonImg, IonPage,IonRefresher,IonRefresherContent, IonHeader, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { chevronDownCircleOutline } from "ionicons/icons";

import { arrowBackCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
        IonIcon,IonImg,
        IonPage,
        IonHeader,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,IonRefresher,IonRefresherContent
    },
    setup() {
        return { arrowBackCircleOutline ,chevronDownCircleOutline};
    },
    data() {
        return {
            data:[],
            limit:6,
            offset:0,
            page:1
        };
    },
    methods: {
        async  get_laporan(){
        let vm = this
        let lapor = await axios({
        method: "post",
            url: ip_server + `laporan/list`,
        })
            vm.data = []
            vm.data = lapor.data.data
            for (let i = 0; i <  vm.data.length; i++) {
                if(vm.data[i].foto_1){
                if(vm.data[i].foto_1.substring(0,4) == 'http' ){
                    vm.data[i].src =  vm.data[i].foto_1 
                }else if(vm.data[i].foto_1){
                    vm.data[i].src=ip_server+'foto/'+  vm.data[i].foto_1 
                }
                }
            }
        },
        async getList(e){
            let vm = this
        let lapor = await axios({
        method: "post",
            url: ip_server + `laporan/list`,
            data:{limit:vm.limit,offset:vm.offset}
        })
            for (let i = 0; i <  lapor.data.data.length; i++) {
                lapor.data.data[i].src = ip_server+'foto/'+  lapor.data.data[i].foto_1
                vm.data.push(lapor.data.data[i])
            }
            if (e) {
                e.target.complete();
            }
        }
    },
    async ionViewDidEnter() {
        this.get_laporan()
    }
});
</script>
<style scoped>

</style>