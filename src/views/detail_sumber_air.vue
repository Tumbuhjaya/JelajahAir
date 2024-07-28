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
                        <h6 class="fz-16 fc-white">DETAIL SUMBER AIR</h6>
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
                    <h6 class="fz-14" style="text-transform: uppercase">SUMBER AIR </h6>
                    <h6 class="fz-18" style="text-transform: uppercase; color:#1c47bc"><strong>{{  sumber_air.nama }}</strong></h6>
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
                    <h6 class="fz-16 fc-black"><strong>Jenis</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 ">{{ sumber_air.jenis }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kabupaten/Kota</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ sumber_air.kab_kot }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kecamatan</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ sumber_air.kecamatan }}</h6>
                </ion-text>
            </ion-col>

            <ion-col size="12">
                <ion-text>
                    <h6 class="fz-16 fc-black"><strong>Kelurahan/Desa</strong></h6>
                </ion-text>
                <ion-text>
                    <h6 class="fz-14 fc-black">{{ sumber_air.desa_kel }}</h6>
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
        data:{OGR_FID:vm.id,desa:1},
            url: ip_server + `sumber_air/list`,
        })
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