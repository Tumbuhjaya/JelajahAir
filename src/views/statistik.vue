<template>
  <ion-page>
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
                                <h6 class="fz-18 fc-white">Statistik</h6>
                            </ion-text>
                        </div>
                        
                    </ion-col>
                    <ion-col size="2"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-grid style="padding: 0 10px;margin-top:15px;">
            <ion-row>
                <ion-col size="12">
                    <ion-text class="ion-text-center">
                        <h6 class="fz-16 fc-black"><strong>Informasi Sumber Air Baku</strong></h6>
                    </ion-text>
                    <ion-text class="ion-text-center">
                        <h6 class="fz-16 fc-black">Provinsi Jawa Tengah</h6>
                    </ion-text>
                </ion-col>
            </ion-row>
            <ion-row style="margin-top: 5px;">
                <ion-col size="6"  @click="$router.push('/tabs/chart/sumber_air')">
                    <div style="width: 100%;height: 100px;background-color: #9747FF;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Jumlah<br/>Sumur Dalam</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_sumur_dalam }}</h6>
                        </ion-text>
                    </div>
                </ion-col>

                <ion-col size="6"  @click="$router.push('/tabs/chart/mata_air')">
                    <div style="width: 100%;height: 100px;background-color: #ffc107;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Jumlah<br/>Mata Air</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_mata_air }}</h6>
                        </ion-text>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="4"  @click="$router.push('/tabs/data_sumber_air/Danau')">
                    <div style="width: 100%;height: 100px;background-color: #2770DE;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Jumlah<br/>Danau</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_danau }}</h6>
                        </ion-text>
                    </div>
                </ion-col>

                <ion-col size="4" @click="$router.push('/tabs/data_sumber_air/Waduk')">
                    <div style="width: 100%;height: 100px;background-color: #FF6666;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Jumlah<br/>Waduk</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_Waduk }}</h6>
                        </ion-text>
                    </div>
                </ion-col>

                <ion-col size="4" @click="$router.push('/tabs/data_sumber_air/Embung')">
                    <div style="width: 100%;height: 100px;background-color: #42BD53;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Jumlah<br/>Embung</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_Embung }}</h6>
                        </ion-text>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-grid style="padding: 0 10px;margin-top:15px;">
            <ion-row>
                <ion-col size="12">
                    <ion-text class="ion-text-center">
                        <h6 class="fz-16 fc-black"><strong>Informasi Profil SPAM</strong></h6>
                    </ion-text>
                    <ion-text class="ion-text-center">
                        <h6 class="fz-16 fc-black">Provinsi Jawa Tengah</h6>
                    </ion-text>
                </ion-col>
            </ion-row>
            <!-- <ion-row style="margin-top: 5px;">
                <ion-col size="6">
                    <div style="width: 100%;height: 100px;background-color: ;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-16">Jumlah<br/>Sumur Dalam</h6>
                        </ion-text>
                        <div style="width: 100%;height: 1px;background-color: black;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20" style="font-weight: bold;">0000</h6>
                        </ion-text>
                    </div>
                </ion-col>

                <ion-col size="6">
                    <div style="width: 100%;height: 100px;background-color: ;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-16">Jumlah<br/>Mata Air</h6>
                        </ion-text>
                        <div style="width: 100%;height: 1px;background-color: black;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20" style="font-weight: bold;">0000</h6>
                        </ion-text>
                    </div>
                </ion-col>
            </ion-row> -->

            <ion-row>
                <ion-col size="6">
                    <div style="width: 100%;height: 100px;background-color:#42BD53 ;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Desa Terlayani SPAM</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_spam }}</h6>
                        </ion-text>
                    </div>
                </ion-col>

                <ion-col size="6">
                    <div style="width: 100%;height: 100px;background-color: #9747FF;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Desa Belum Terlayani SPAM</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{ count_penduduk - count_spam }}</h6>
                        </ion-text>
                    </div>
                </ion-col>

                <ion-col size="12">
                    <div style="width: 100%;height: 100px;background-color:#2770DE ;border-radius: 8px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;padding: 0 15px;">
                        <ion-text>
                            <h6 class="fz-14 fc-white">Prosentasi Desa Terlayani SPAM</h6>
                        </ion-text>
                        <div style="width: 100%;height: 2px;background-color: #e0e0e0;margin: 5px 0;"></div>
                        <ion-text>
                            <h6 class="fz-20 fc-white" style="font-weight: bold;">{{((count_spam/count_penduduk    ) *100).toFixed(2).replace(".", ",") +'%'}}</h6>
                        </ion-text>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonText, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { arrowBackCircleOutline  } from 'ionicons/icons';
import axios from "axios";
import { Preferences } from "@capacitor/preferences";

import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
// import VueApexCharts from "vue3-apexcharts";
export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonIcon,
        IonText,
        //apexchart: VueApexCharts,
    },
    setup() {
        return { arrowBackCircleOutline };
    },
    data() {
        return {
            count_sumur_dalam:0,
            count_mata_air:0,
            count_danau:0,
            count_Waduk:0,
            count_Embung:0,
            count_spam:0,
            count_penduduk:0,
        };
    },
    methods: {
        async get_count_sumur_dalam(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let sumber_air = await axios({
        method: "post",
        data:{count:'OGR_FID',jenis:'Sumur'},
            url: ip_server + `sumber_air/list`,
        })
        this.count_sumur_dalam = sumber_air.data.data[0].y
            vm.loading = false
    },
    async get_count_mata_air(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let sumber_air = await axios({
        method: "post",
        data:{count:'OGR_FID',jenis:'Mata Air'},
            url: ip_server + `sumber_air/list`,
        })
        this.count_mata_air = sumber_air.data.data[0].y
            vm.loading = false
    },
    async get_count_danau(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let sumber_air = await axios({
        method: "post",
        data:{count:'OGR_FID',jenis:'Danau'},
            url: ip_server + `sumber_air/list`,
        })
        this.count_danau = sumber_air.data.data[0].y
            vm.loading = false
    },
    async get_count_Waduk(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let sumber_air = await axios({
        method: "post",
        data:{count:'OGR_FID',jenis:'Waduk'},
            url: ip_server + `sumber_air/list`,
        })
        this.count_Waduk = sumber_air.data.data[0].y
            vm.loading = false
    },
    async get_count_Embung(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let sumber_air = await axios({
        method: "post",
        data:{count:'OGR_FID',jenis:'Embung'},
            url: ip_server + `sumber_air/list`,
        })
        this.count_Embung = sumber_air.data.data[0].y
            vm.loading = false
    },
    async get_count_spam(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let sumber_air = await axios({
        method: "post",
        data:{count:'total_JP_jiwa' ,},
            url: ip_server + `jelajah_air/spam_gabungan`,
        })
        this.count_spam = sumber_air.data.data[0].y
            vm.loading = false
    },
    async get_count_penduduk(){
        let vm = this
        vm.loading = true
        vm.page = 1
        let token = await Preferences.get({ key: "token" });

        let sumber_air = await axios({
        method: "post",
        headers: {
            token: token.value,
            },
        data:{count:'1' ,},
            url: ip_server + `jelajah_air/list`,
        })
        console.log(sumber_air);

        this.count_penduduk = sumber_air.data.data[0].y
            vm.loading = false
    },
    },
    async ionViewDidEnter() {
await this.get_count_sumur_dalam()
await this.get_count_mata_air()
await this.get_count_danau()
await this.get_count_Waduk()
await this.get_count_Embung()
await this.get_count_spam()
await this.get_count_penduduk()
    },
});
</script>
<style scoped>
    
</style>