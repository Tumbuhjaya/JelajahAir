<template>
  <ion-page >
    <ion-header>
        <ion-toolbar>
            <ion-grid style="padding-left: 10px;padding-right: 10px;">
                <ion-row>
                    <ion-col size="2">
                    <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: flex-start;align-items: center;">
                        <ion-icon :icon="arrowBackCircleOutline" @click="$router.push('/tabs/data_lapor_sumber_air')" style="font-size: 26px;color:#fff"></ion-icon>
                    </div>
                    </ion-col>
                    <ion-col size="8">
                    <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: center;align-items: center;">
                        <ion-text class="ion-text-center">
                        <h6 class="fz-16 fc-white">DETAIL LAPOR SUMBER AIR</h6>
                        </ion-text>
                    </div>
                    </ion-col>
                    <ion-col size="2"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid style="padding: 0 10px;margin:15px 0;">
        <ion-row>
            <ion-col size="12">
                <ion-text class="ion-text-center">
                    <h6 class="fz-14" style="text-transform: uppercase">Sumber Air </h6>
                    <h6 class="fz-18" style="text-transform: uppercase; color:#1c47bc"><strong>{{ sumber_air.nama_sumber_air }}</strong></h6>
                </ion-text>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="12">
                <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;"></ion-img>
                <ion-img v-else src="https://via.placeholder.com/640x360" style="width: 100%;"></ion-img>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-18" style="color:#1c47bc"><strong>INFORMASI SUMBER AIR</strong></h6>
                </ion-text>
            </ion-col>
            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Jenis</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.jenis }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kabupaten/Kota</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.kab_kot }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kecamatan</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.kecamatan }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kelurahan/Desa</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.desa_kel }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Koordinat Lokasi</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.x }}, {{ sumber_air.y }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Deskripsi</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.deskripsi }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12" style="margin-top: 30px">
                <ion-text>
                    <h6 class="fz-18" style="color:#1c47bc"><strong>INFORMASI LAPORAN</strong></h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Pelapor</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.nama }}</h6>
                </ion-text>
            </ion-col>
            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Status Laporan</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14">{{ sumber_air.verifikasi==0?'Belum Diverifikasi':sumber_air.verifikasi==1?'Sudah Diverifikasi':sumber_air.verifikasi==2?'Di Tolak':'' }}</h6>
                </ion-text>
            </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon, IonImg, IonPage, IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonText, IonBadge } from '@ionic/vue';
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
        this.get_sumber_air()
    },
    data() {
        return {
            route:useRoute(),
            id : 0,
            sumber_air:[]
        };
    },
    methods: {
        async get_sumber_air(){
        let vm = this
        vm.id = vm.route.params.id;
        let list_sumber_air = await axios({
        method: "post",
        data:{laporan_id:vm.id,desa:1},
            url: ip_server + `laporan/list`,
        })
        console.log(list_sumber_air);
            vm.sumber_air = []
            vm.sumber_air = list_sumber_air.data.data[0]
            if(vm.sumber_air.foto_1.substring(0,4) == 'http' ){
                    vm.sumber_air.src =  vm.sumber_air.foto_1 
                }else if(vm.sumber_air.foto_1){
                    vm.sumber_air.src=ip_server+'foto/'+  vm.sumber_air.foto_1 

                }
    },
    },
});
</script>
<style scoped>

</style>