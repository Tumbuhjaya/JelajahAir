<template>
  <ion-page >
    <ion-header>
        <ion-toolbar>
            <ion-grid style="padding-left: 10px;padding-right: 10px;">
                <ion-row>
                    <ion-col size="2">
                        <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: flex-start;align-items: center;">
                            <ion-icon :icon="arrowBackCircleOutline" @click="$router.push('/tabs/dashboard')" style="font-size: 26px;color:#fff"></ion-icon>
                        </div>
                    </ion-col>
                    <ion-col size="8">
                        <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: center;align-items: center;">
                            <ion-text class="ion-text-center">
                                <h6 class="fz-16 fc-white">DATA LAPOR SUMBER AIR</h6>
                            </ion-text>
                        </div>
                        
                    </ion-col>
                    <ion-col size="2"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 0 10px;">
        <ion-row style="margin-top: 15px;"   v-for="(list, i) in data" :key="i" >
            <ion-col size="12"  @click="$router.push('/tabs/detail_lapor_sumber_air/'+list.laporan_id)" >
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #fff;display: flex;">
                    <div style="width: 40%;">
                        <ion-img v-if="list.foto_1" :src="list.src" style="width:100%;height:160px;object-fit: cover;"></ion-img>
                        <ion-img v-else src="https://placehold.co/100?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                    </div>
                    <div style="width:60%;margin-left: 15px;height: 160px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                        <h6 style="font-size: 12px">Sumber Air</h6>
                        <h6 style="font-size: 16px;color:#163891"><strong>{{ list.nama_sumber_air }}</strong></h6>
                        <div style="width:100%;height: 2px;background-color: #e0e0e0;margin:5px 0"></div>
                        <div style="display: table;margin-top: 5px;">
                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 75px;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">Jenis</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">:</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">{{ list.jenis }}</h6>
                                    </ion-text>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">Kab/Kota</h6>
                                    </ion-text>
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">:</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">{{ list.kab_kot }}</h6>
                                    </ion-text>
                                    
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">Kec.</h6>
                                    </ion-text>
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">:</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">{{ list.kecamatan }}</h6>
                                    </ion-text>
                                    
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">Kel/Desa</h6>
                                    </ion-text>
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">:</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">  {{ list.kab_kot }}</h6>
                                    </ion-text>
                                    
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">Koordinat Lokasi (x,y)</h6>
                                    </ion-text>
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">:</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">(  {{ list.x }} ,   {{ list.y }})</h6>
                                    </ion-text>
                                    
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">Pelapor</h6>
                                    </ion-text>
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">:</h6>
                                    </ion-text>
                                    
                                </div>

                                <div style="display: table-cell;">
                                    <ion-text>
                                        <h6 style="font-size: 12px;" class="fc-black">  {{ list.nama }}</h6>
                                    </ion-text>
                                    
                                </div>
                            </div>

                            <!-- <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Alamat</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.kab_kot }}  {{ list.kecamatan }}  {{ list.alamat }}</h6>
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
                                    <h6 style="font-size: 12px;">{{ list.desa_kel }}</h6>
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
                                    <h6 style="font-size: 12px;">{{ list.nama }}</h6>
                                </div>
                            </div> -->

                            <!-- <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Debit</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.debit }}</h6>
                                </div>
                            </div> -->

                            <!-- <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Jumlah KK Terlayani</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">{{ list.jumlah_KK_terlayani }}</h6>
                                </div>
                            </div>  -->
                        </div>
                    </div>
                </div>
            </ion-col>
        </ion-row>
        <ion-infinite-scroll threshold="10%" @ionInfinite="getList">
            <ion-infinite-scroll-content loading-spinner="bubbles" loading-text=" Loading more item">
            
            </ion-infinite-scroll-content>
      </ion-infinite-scroll>

      
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonIcon,IonImg, IonPage,IonInfiniteScroll, IonInfiniteScrollContent, IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { chevronDownCircleOutline } from "ionicons/icons";

import { arrowBackCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
        IonIcon,
        IonImg,
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonInfiniteScroll,
        IonInfiniteScrollContent
    },
    setup() {
        return { arrowBackCircleOutline ,chevronDownCircleOutline};
    },
    data() {
        return {
            data:[],
            limit:6,
            offset:0,
            page:0
        };
    },
    methods: {
        async  get_laporan(){
        let vm = this
        let lapor = await axios({
        method: "post",
        data:{limit:vm.limit,offset:vm.offset},

            url: ip_server + `laporan/list`,
        })
            vm.data = []
            vm.data = lapor.data.data

            for (let i = 0; i <  vm.data.length; i++) {
                console.log([ lapor.data.data[i],'lapor',vm.limit,vm.offset]);
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
            this.page++
            this.offset = this.page*this.limit
            console.log(['lapor',vm.limit,vm.offset]);

        let lapor = await axios({
        method: "post",
            url: ip_server + `laporan/list`,
            data:{limit:vm.limit,offset:vm.offset}
        })

            for (let i = 0; i <  lapor.data.data.length; i++) {
                console.log([ lapor.data.data[i],'lapor',vm.limit,vm.offset]);

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