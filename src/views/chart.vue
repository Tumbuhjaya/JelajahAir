<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-grid style="padding-left: 10px;padding-right: 10px;">
                <ion-row>
                    <ion-col size="2">
                        <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: flex-start;align-items: center;">
                            <ion-icon :icon="arrowBackCircleOutline" @click="$router.push('/tabs/statistik')" style="font-size: 26px;color:#fff"></ion-icon>
                        </div>
                    </ion-col>
                    <ion-col size="8">
                        <div style="width: 100%;height: 30px;background-color: ;display: flex;justify-content: center;align-items: center;">
                            <ion-text class="ion-text-center">
                                <h6 class="fz-16 fc-white">DETAIL STATISTIK</h6>
                            </ion-text>
                        </div>
                        
                    </ion-col>
                    <ion-col size="2"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-grid style="padding:0 10px;margin-top: 15px">
            <ion-row>
                <ion-col size="12">
                    <ion-text class="ion-text-center">
                        <h6 class="fz-18" style="color: #2770DE;"><strong>{{ kategori.toUpperCase() }}</strong></h6>
                    </ion-text>
                    
                </ion-col>
                <ion-col size="12">
                    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
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
import VueApexCharts from "vue3-apexcharts";
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
        apexchart: VueApexCharts,
    },
    setup() {
        return { arrowBackCircleOutline };
    },
    data() {
        return {
            kategori:this.$route.params.kategori,
    series: [{
        name: 'Sales',
        data: []
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line'
        },
        xaxis: {
          categories: []
        }
    },
           
        };
    },
    methods: {
        async get_chart(){
        let vm = this
        vm.loading = true
        let url =ip_server + 'sumber_air/mata_air_by_kab'
        if (this.kategori == 'sumber air') {
            url= ip_server + 'sumber_air/sumber_air_by_kab'
        }else if (this.kategori == 'mata air') {
             url =ip_server + 'sumber_air/mata_air_by_kab'
        }
        let sumber_air = await axios({
        method: "post",
        data:{},
        url
        })
        this.count_sumur_dalam = sumber_air.data.data
        let a = []
        let b = []
        for (let i = 0; i < this.count_sumur_dalam.length; i++) {
            a.push(this.count_sumur_dalam[i].label)
            b.push(this.count_sumur_dalam[i].y)
        }
        this.series= [{
        name: 'Sales',
        data: b
      }]
      this.chartOptions={
        chart: {
          height: 350,
          type: 'bar'
        },
        xaxis: {
          categories:a
        }
    }
            vm.loading = false
    },
 
    },
    async ionViewDidEnter() {
        await this.get_chart()
    },
});
</script>
<style scoped>
    
</style>