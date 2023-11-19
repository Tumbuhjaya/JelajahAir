<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Statistik</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
            <ion-col size="6">
                <ion-img src="/assets/js.png" style="width: 100%;"></ion-img>
            </ion-col>

            <ion-col size="6">
                <ion-img src="/assets/jt.png" style="width: 100%;"></ion-img>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="6">
                <ion-img src="/assets/jl.png" style="width: 100%;"></ion-img>
            </ion-col>

            <ion-col size="6">
                <ion-img src="/assets/jtj.png" style="width: 100%;"></ion-img>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="12">
                <apexchart
                  width="100%"
                  type="bar"
                  height="300"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
            </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { arrowBackCircleOutline  } from 'ionicons/icons';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import VueApexCharts from "vue3-apexcharts";
export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        apexchart: VueApexCharts,
    },
    setup() {
        return { arrowBackCircleOutline };
    },
    data() {
        return {
            jumlah_terlayani:0,
            series: [{
                data: [{
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                },
                {
                x: 'category A',
                y: 10
                }, {
                x: 'category B',
                y: 18
                }, {
                x: 'category C',
                y: 13
                }]
            }],
            chartOptions: {
                chart: {
                type: "bar",
                },
                dataLabels: {
                style: {
                    fontSize: "16px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                    colors: ["#000"],
                },
                dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 0.5,
                    color: "#ffff",
                    opacity: 0.5,
                },
                },
                labels: [],
                colors: [
                "#298FFA",
                "#15E597",
                "#FDB01A",
                "#FC4560",
                "#775ED0",
                "#d400ff",
                ],
                plotOptions: {
                bar: {
                    horizontal: false
                },
                },
                responsive: [
                {
                    breakpoint: 480,
                    options: {
                    chart: {
                        width: "100%",
                    },
                    legend: {
                        show: false,
                        position: "right",
                    },
                    },
                },
                ],
            },
        };
    },
    methods: {
        async  get_terlayani(){
        let vm = this
        let api = await axios({
        method: "post",
            url: ip_server + `api/data_jelajah_air/list`,
            data:{trlyni_50:1 , group:'kabupaten'}
        })
        for (let i = 0; i < api.data.data.length; i++) {
            api.data.data[i].y= Number(api.data.data[i].y)
            api.data.data[i].x=api.data.data[i].label
            this.jumlah_terlayani+=Number(api.data.data[i].y)
        }

            vm.series[0].data = api.data.data
        },
    },
    async ionViewDidEnter() {
       await this.get_terlayani()
    }
});
</script>
<style scoped>

</style>