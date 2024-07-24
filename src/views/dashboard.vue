<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 75%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h5 style="font-size: 22px;"><strong>JELAJAH AIR</strong></h5>
                <h6 style="font-weight: normal;font-size: 12px;">PROVINSI JAWA TENGAH</h6>
            </div>
            <div style="width: 25%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;">
                <div style="width:50px;height: 50px;background-color: #0086CF;border-radius: 100%;overflow: hidden;">
                    <ion-icon v-if="login" :icon="peopleCircleOutline" color="light" style="font-size: 50px;" @click="logoff"></ion-icon>
                    <ion-icon v-else :icon="peopleCircleOutline" color="light" style="font-size: 50px;" @click="$router.push('/login')"></ion-icon>
                </div>
            </div>
        </div>
    </ion-header>
    <div style="width:100%;height:300px;position: relative;background-color: wheat;" id='map' ref="map"></div>
        
    <ion-loading class="custom-loading" message="Loading..." v-if="loading" spinner="circles"></ion-loading>

    <ion-content v-else>
        
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
          <ion-col size="12">
            <!-- <div style="border-radius: 10px;overflow: hidden;"  v-for="(banner, i) in banner" :key="i">
                <ion-img  :src="banner.src" style="width: 100%;"></ion-img>
            </div> -->

            <swiper 
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide  v-for="(banner, i) in banner" :key="i">
                    <ion-img  :src="banner.src" style="width: 100%;"></ion-img>
                </swiper-slide>
            </swiper>
          </ion-col>
        </ion-row>
      <ion-row style="margin-top: 15px;">
           
            <ion-col size="8">
                <h5><strong>Spam Provinsi</strong></h5>
            </ion-col>

            <ion-col size="4">
                <h5 style="color: grey;text-align: right;" @click="$router.push('/tabs/spam_provinsi')">Lainnya</h5>
            </ion-col>
        </ion-row>
        <ion-row >
            <ion-col size="6"  v-for="(spam_desa, i) in spam_desa" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/spam_desa_sekitar/detail/'+spam_desa.OGR_FID)">
                    <ion-img v-if="spam_desa.foto_1" :src="spam_desa.src" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama}}</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">{{sumber_air.kab_kot}},{{sumber_air.kecamatan}},{{sumber_air.desa_kel}}</h6>
                        <!-- <h6 style="color: #fff;font-size: 10px;font-weight: normal;">{{sumber_air.foto_1}}</h6> -->
                    </div>
                </div>
            </ion-col>

            <!-- <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail')">
                    <ion-img src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col> -->
        </ion-row>
   
        <ion-row style="margin-top: 15px;">
            <ion-col size="8">
                <h5><strong>Sumber Air Sekitar Anda</strong></h5>
            </ion-col>

            <ion-col size="4">
                <h5 style="color: grey;text-align: right;" @click="$router.push('/tabs/sumber_air_sekitar')">Lainnya</h5>
            </ion-col>
        </ion-row>
        <ion-row >
            <ion-col size="6"  v-for="(sumber_air, i) in sumber_air" :key="i">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail/'+sumber_air.OGR_FID)">
                    <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>
                    <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama}}</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">{{sumber_air.kab_kot}},{{sumber_air.kecamatan}},{{sumber_air.desa_kel}}</h6>
                    </div>
                </div>
            </ion-col>
        </ion-row>
   

        
      </ion-grid>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button @click="$router.push('/tabs/lapor_sumber_air')">
            <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
          </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid,IonLoading, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonImg, IonInput  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Preferences } from '@capacitor/preferences';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { addCircleOutline, peopleCircleOutline  } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import mapboxgl from 'mapbox-gl';
  import * as turf from '@turf/turf';

import 'swiper/css';
import 'swiper/css/pagination';
  import 'swiper/css/navigation';
import '@ionic/vue/css/ionic-swiper.css';

  import 'mapbox-gl/dist/mapbox-gl.css';
export default defineComponent({
    components: {
        IonPage,IonLoading,
        IonHeader,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonIcon,
        IonFab,
        IonFabButton,
        IonImg,
        IonInput,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return { modules: [Autoplay, Pagination, Navigation], addCircleOutline, peopleCircleOutline };
    },
    
    data() {
        return {
            login:0,
            banner :[],
            sumber_air :[],
            spam_desa :[],
            loading :false,
            radius: 1000,
            map:null
        };
    },
    async ionViewDidEnter() {
        this.peta()
        this.get_banner()
        this.get_sumber_air()
        this.get_spam_desa()
     
    },
    methods: {
        async peta(){
  
      let vm = this;
      // const mapRef = document.getElementById('map');
      mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhZ2FzIiwiYSI6ImNsZnNlaXRqNjA1ZDAzY2wydzhkNndpbWEifQ.7fH0v4wHwHD9n1dJFM8gXA';
      vm.map = new mapboxgl.Map({
      container: vm.$refs.map, // container ID
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      center: [110.416664, -6.966667], // starting position [lng, lat]
      zoom: 9, // starting zoom
      attributionControl: false
      });
    //   console.log(vm.map);
  //     vm.map.addControl(new mapboxgl.AttributionControl({
  // customAttribution: 'Map design by me'
  // }));
//   vm.map.resize();

let geolocate =  new mapboxgl.GeolocateControl({
                    positionOptions: {
                    enableHighAccuracy: true
                    },
                  
                    // When active the map will receive updates to the device's location as it changes.
                    trackUserLocation: true,
                    // Draw an arrow next to the location dot to indicate which direction the device is heading.
                    showUserHeading: true,
                    })
                    vm.map.addControl(geolocate);
                    vm.map.on('load', async () => {
                      vm.map.addSource('route', {
              'type': 'geojson',
                  'data': {
                      "type": "FeatureCollection",
                      "features": []
                      },
                      "attribution": "Pemerintah Kota Semarang",
                'generateId': true
            });
            vm.map.addLayer({
              'id': 'route',
              'type': 'line',
              'source': 'route',
              'paint': {
                  'line-width': 8,
                  // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
                  // to set the line-color to a feature property value.
                  'line-color': [
                    'case',
                    ['boolean',['feature-state', 'clicked'], false],
                    'purple',
                    ['get', 'color']
                  ]
                  },
                  'filter': ['==', '$type', 'LineString']
              });
  
              vm.map.addLayer({
                  "id": "symbols",
                  "type": "symbol",
                  "source": "route",
                  "layout": {
                    "symbol-placement": "line",
                    "text-font": ["Open Sans Semibold"],
                    // "text-field": ['get', 'nm_ruas'],
                    "text-field": ['get', 'nm_ruas'],
                    "text-size": 8,
                    "text-ignore-placement": true,
                    "text-allow-overlap": true,
                  },
                  "paint":{
                    "text-color": 'white'
                  }
                });
                let id_jalan =null;
                vm.map.on('moveend', async () => {
// console.log(vm.map.getCenter());
let koor = vm.map.getCenter();
vm.long = koor.lng;
                vm.lat = koor.lat;
                var point1 = turf.point([vm.long,  vm.lat]);
                var buffered = turf.buffer(point1, vm.radius, {units: 'meters'});
                // console.log(buffered);
                // let ip_server = await Preferences.get({ key: "get" });
                let data = await  axios.post(`${ip_server}peta/sumber_air_radius?jarak=${vm.radius}&long=${koor.lng}&lat=${koor.lat}`,{
                  geojsonpoint: buffered
    });
              if(data){
                
                vm.map.getSource('route').setData(data.data);
              }
});
          vm.map.on('click', 'route', async (e) => {
            
            //ganti warna
            
          
            if(e.features[0].properties.status!='JALAN LINGKUNGAN'){
              const toast = await toastController.create({
                  message: 'Jalan dipilih bukan Jalan Lingkungan',
                  duration: 2000,
                  position: 'top'
                });

                await toast.present();
            }else{
              vm.map.getCanvas().style.cursor = 'pointer';
            if(e.features.length>0){
              if(id_jalan!=null){
                vm.map.setFeatureState({
                  source: 'route',
                  id: id_jalan
                },{
                  clicked: false
                })
              }
            }
            id_jalan = e.features[0].id;
              vm.map.setFeatureState({
              source:'route',
              id: id_jalan
                },{
                  clicked: true
                })
                // console.log(e.features[0]);
                  vm.nama_ruas = e.features[0].properties.nm_ruas;
                  vm.kode_ruas = e.features[0].properties.kd_ruas;
                  vm.id_jalan_dipilih = e.features[0].properties.id_jln;
                  vm.search = e.features[0].properties.nm_ruas;
            }
          


              
            });
// const coordinates = await Geolocation.getCurrentPosition();
             
        
             
              // let data = await  axios.get(`http://survplus.id:8848/peta/jalan_radius?jarak=100&long=${coordinates.coords.longitude}&lat=${coordinates.coords.latitude}`);
              // if(data){
                
              //   vm.map.getSource('route').setData(data.data);
              // }
       
    //           geolocate.on('geolocate', async function(e) {
    //             vm.long = e.coords.longitude;
    //             vm.lat = e.coords.latitude
    //             var point1 = turf.point([vm.long,  vm.lat]);
    //             var buffered = turf.buffer(point1, vm.radius, {units: 'meters'});
    //             console.log(buffered);
    //             let ip_server = await Preferences.get({ key: "get" });
    //             let data = await  axios.post(`${ip_server.value}/peta/jalan_radius?jarak=${vm.radius}&long=${e.coords.longitude}&lat=${e.coords.latitude}`,{
    //               geojsonpoint: buffered
    // });
    //           if(data){
                
    //             vm.map.getSource('route').setData(data.data);
    //           }
              
    //       });
          geolocate.trigger();
    })
  
    
        },
        async get_spam_desa(){
        let vm = this
        vm.loading = true
        let list_spam_desa = await axios({
        method: "post",
        data:{limit:4,desa:1},
            url: ip_server + `spam_desa/list`,
        })
            vm.spam_desa = []
            console.log(list_spam_desa);
            vm.spam_desa = list_spam_desa.data.data
            for (let i = 0; i <  vm.spam_desa.length; i++) {
                vm.spam_desa[i].src=ip_server+'foto/'+  vm.spam_desa[i].foto_1 
            }
            vm.loading = false

    },
        async get_sumber_air(){
        let vm = this
        vm.loading = true

        let list_sumber_air = await axios({
        method: "post",
        data:{limit:2,desa:1},
            url: ip_server + `sumber_air/list`,
        })
            vm.sumber_air = []
            vm.sumber_air = list_sumber_air.data.data
            for (let i = 0; i <  vm.sumber_air.length; i++) {
                if(vm.sumber_air[i].foto_1.substring(0,4) == 'http' ){
                    vm.sumber_air[i].src =  vm.sumber_air[i].foto_1 
                }else if(vm.sumber_air[i].foto_1){
                    vm.sumber_air[i].src=ip_server+'foto/'+  vm.sumber_air[i].foto_1 

                }
            }
            console.log(vm.sumber_air,'sumber_air');
            vm.loading = false

    },
    async get_banner(){
        let vm = this
        vm.loading = true

        let lapor = await axios({
        method: "post",
            url: ip_server + `banner/list`,
        })
            vm.banner = []
            vm.banner = lapor.data.data
            for (let i = 0; i <  vm.banner.length; i++) {
                vm.banner[i].src=ip_server+'foto/'+  vm.banner[i].foto_1 
            }
            console.log(vm.banner,'banner');
            vm.loading = false

    },
        async logoff(){
            await Preferences.clear()
            this.login = 0
        }
    },
    async ionViewWillEnter() {
        const ret = await Preferences.get({ key: 'token' });
        if (ret) {
            this.login = 1
        }else{
            this.login = 0
        }
    },
    ionViewDidLeave() {
      if(this.map){
        this.map.remove()
      this.map = null;
      }
      
      console.log('Home page did leave');
    },
});
</script>
<style scoped>
ion-header{
  box-shadow: none !important;
  background-color: #fff;
}

ion-content{
    /* --background:purple; */
}

ion-input{
  border-bottom: 1px solid transparent;
}
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

.fab-vertical-bottom{
    right: 20px;
}
ion-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;

    color: #1c6dff;
  }
ion-input{
  border-bottom: 1px solid transparent;
  --highlight-color-focused: none;
}
.mapboxgl-ctrl-logo {
    display: none !important;
}
</style>