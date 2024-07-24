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
                            <h6 class="fz-18 fc-white">Detail Spam Provinsi</h6>
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
                    <h6 class="fz-20 fc-black"><strong>Nama Sumber Air</strong></h6>
                </ion-text>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="12">
                <ion-img v-if="spam_desa.foto_1" :src="spam_desa.src" style="width: 100%;"></ion-img>
                <ion-img v-else src="https://via.placeholder.com/640x360" style="width: 100%;"></ion-img>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Nama Program</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ spam_desa.nama_program }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Jenis Sumber Air Baku</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ spam_desa.sumber_air_baku }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Tahun Pembangunan</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ spam_desa.tahun }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kabupaten/Kota</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ spam_desa.kab }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kecamatan</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ spam_desa.kec }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kelurahan/Desa</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ spam_desa.desa_kel }}</h6>
                </ion-text>
            </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon, IonImg, IonPage, IonHeader, IonToolbar,  IonContent, IonGrid, IonRow, IonCol, IonText, IonBadge } from '@ionic/vue';
import { defineComponent} from 'vue';
import { arrowBackCircleOutline  } from 'ionicons/icons';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import { useRoute } from 'vue-router';
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
            route:useRoute(),
            id : 0,
            table : 0,
            spam_desa:[]
        };
    },
    methods: {
        async get_spam_desa(){
        let vm = this
        vm.id = vm.route.params.id;
        vm.table = vm.route.params.table;
        if (vm.route.params.table ==1) {
            
        let url =  `spam_desa/list`
        let data = {spam_desa_id:vm.id}
        let list_spam_desa = await axios({
        method: "post",
        data:data,
            url: ip_server + url,
        })
            vm.spam_desa = []
            vm.spam_desa = list_spam_desa.data.data[0]
            if(vm.spam_desa.foto_1.substring(0,4) == 'http' ){
                    vm.spam_desa.src =  vm.spam_desa.foto_1 
                }else if(vm.spam_desa.foto_1){
                    vm.spam_desa.src=ip_server+'foto/'+  vm.spam_desa.foto_1 

                }
            }else  if (vm.route.params.table ==2){
                let url =  `bpksp_spam/list`
                let data = {bpksp_spam_id:vm.id}
                let list_spam_desa = await axios({
        method: "post",
        data:data,
            url: ip_server + url,
        })
            vm.spam_desa = []
            vm.spam_desa = list_spam_desa.data.data[0]
            if(vm.spam_desa.foto_1.substring(0,4) == 'http' ){
                vm.spam_desa.src =  vm.spam_desa.foto_1 
            }else if(vm.spam_desa.foto_1){
                vm.spam_desa.src=ip_server+'foto/'+  vm.spam_desa.foto_1 

            }
            vm.spam_desa.nama_program= vm.spam_desa.program
        vm.spam_desa.sumber_air_baku= vm.spam_desa.jenis_sumber_air
        vm.spam_desa.tahun= vm.spam_desa.tahun_dibangun
        vm.spam_desa.kab= vm.spam_desa.kab_kot
        console.log(  vm.spam_desa);
        }
         

    },
    },
});
</script>
<style scoped>

</style>