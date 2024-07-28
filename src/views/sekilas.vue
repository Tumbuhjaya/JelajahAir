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
                        <h6 class="fz-16 fc-white">SEKILAS JELAJAH AIR</h6>
                        </ion-text>
                    </div>
                    </ion-col>
                    <ion-col size="2"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-grid style="padding:0 10px;margin-top:15px;">
            <ion-row>
                <ion-col size="12">
                    <ion-text>
                        <h6 class="fz-14">
                            Jelajah Air adalah sebuah sistem informasi berbasis web dan Android yang dibuat oleh Dinas Pekerjaan Umum, Bina Marga dan Cipta Karya Provinsi Jawa Tengah mengenai sebaran dan ketersediaan air minum di Provinsi Jawa Tengah dalam rangka meningkatkan salah satu pelayanan bidang keciptakaryaan yaitu Air Minum. Jelajah Air menyediakan akses terhadap data, statistik, dan peta mengenai profil penyediaan air minum di seluruh Jawa Tengah. Informasi yang tersedia mencakup sumber air baku, sistem jaringan air minum, dan daerah-daerah yang telah terlayani jaringan air minum. Data dan informasi ditampilkan secara tabular, infografik, serta spasial, memberikan gambaran detail tentang kondisi layanan air minum di Provinsi Jawa Tengah.
                        </h6>
                    </ion-text>
                </ion-col>

                <ion-col size="12">
                    <ion-text>
                        <h6 class="fz-14">
                            Jelajah Air memberikan kemudahan bagi masyarakat untuk berpartisipasi dalam pendataan kondisi sumber air di sekitar mereka, sehingga data yang dikumpulkan lebih akurat dan real-time. Dengan adanya Jelajah Air, kolaborasi antara masyarakat dan pemerintah dapat terjalin lebih erat. Masyarakat dapat berperan aktif dalam menjaga dan melestarikan sumber air bersih dengan melaporkan sumber air baku di sekitar mereka, sementara pemerintah dapat mengoptimalkan perencanaan dan pelaksanaan program pengelolaan air berdasarkan data yang valid dan terkini. Jelajah Air adalah langkah maju dalam memastikan akses air minum yang berkelanjutan bagi seluruh warga Provinsi Jawa Tengah. Mari berpartisipasi mewujudkan tercukupinya air minum di Jawa Tengah melalui Jelajah Air. Bersama-sama, kita bisa memastikan masa depan yang lebih baik untuk Provinsi Jawa Tengah.
                        </h6>
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