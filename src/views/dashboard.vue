<template>
    <ion-page >
        <ion-header>
            <ion-toolbar>
                <ion-grid style="padding-left:10px;padding-right: 10px;">
                    <ion-row>
                        <ion-col size="2">
                            <div style="width:100%;height:35px;background-color:;display: flex;justify-content: flex-start;align-items: center">
                                <ion-icon :icon="arrowBackOutline" style="font-size: 24px;" @click="$router.push('/')" class="fc-white"></ion-icon>
                            </div>
                        </ion-col>
                        <ion-col size="8">
                            <div style="width:100%;height:35px;background-color:;display: flex;justify-content: center;align-items: center;flex-direction: column">
                                <ion-text>
                                    <h6 class="fc-white fz-16" style="letter-spacing: 2px"><strong>JELAJAH AIR</strong></h6>
                                </ion-text>
    
                                <ion-text>
                                    <h6 class="fc-white fz-10">PROVINSI JAWA TENGAH</h6>
                                </ion-text>
                            </div>
                        </ion-col>

                        <ion-col size="2">
                            <div style="width:100%;height:35px;background-color:;display: flex;justify-content: flex-end;align-items: center">
                                <ion-icon  v-if="login" :icon="logOutOutline" style="font-size: 24px;"  @click="logout" class="fc-white"></ion-icon>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-header>
    
      
      <ion-content :fullscreen="true">
        <ion-grid style="padding: 0;">
            <ion-row>
                <ion-col size="12" style="padding:0">
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
                        <ion-img  :src="banner.src" style="width: 100%;height: 200px;object-fit: fill"></ion-img>
                    </swiper-slide>
                </swiper>
                </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid style="padding:0 10px;margin-top:15px;">
            <ion-row>
                <ion-col size="6">
                    <div style="width:100%;height: 80px;background-color: #fff;border-radius: 10px;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;display: flex;justify-content: center;align-items: center;padding:0 10px;position: relative;overflow-x: hidden;" @click="$router.push('/tabs/lokasi_sekitar')">
                        <ion-img src="/assets/wave-4.png" style="position: absolute;left:0;right:0;bottom:0;width: 100%;z-index: 1;"></ion-img>
                        <div style="width: 40%;height: 80px;background-color: ;display: flex;justify-content: center;align-items: center">
                            <ion-img src="/assets/003-street-view.png" style="width: 50px;position: relative;z-index: 1;"></ion-img>
                        </div>
                        <div style="width:60%;height: 80px;background-color: ; display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                            <h6 class="fz-14 fc-black" style="position: relative;z-index: 1;text-shadow: 2px 2px 2px rgba(255,255,255,0.8);"><strong>JELAJAH AIR</strong></h6>
                            <h6 class="fz-14 fc-black" style="position: relative;z-index: 1;color:#000;text-shadow: 2px 2px 2px rgba(255,255,255,0.8);"><strong>SEKITAR</strong></h6>
                        </div>
                    </div>
                </ion-col>
                <ion-col size="6">
                    <div style="width:100%;height: 80px;background-color: #fff;border-radius: 10px;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;display: flex;justify-content: center;align-items: center;padding:0 10px;position: relative;overflow-x: hidden;" @click="$router.push('/tabs/data_lapor_sumber_air')">
                        <ion-img src="/assets/wave-4.png" style="position: absolute;left:0;right:0;bottom:0;width: 100%;z-index: 1;"></ion-img>
                        <div style="width: 40%;height: 80px;background-color: ;display: flex;justify-content: center;align-items: center">
                            <ion-img src="/assets/002-blogger.png" style="width: 50px;position: relative;z-index: 1;"></ion-img>
                        </div>
                        <div style="width:60%;height: 80px;background-color: ; display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                            <h6 class="fz-14 fc-black" style="position: relative;z-index: 1;text-shadow: 2px 2px 2px rgba(255,255,255,0.8);"><strong>LAPOR  </strong></h6>
                            <h6 class="fz-14 fc-black" style="position: relative;z-index: 1;text-shadow: 2px 2px 2px rgba(255,255,255,0.8);color:#000;"><strong>SUMBER AIR</strong></h6>
                        </div>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row style="margin-top: 10px;">
                <ion-col size="4">
                    <div style="width:100%;height: 85px;background-color: #fff;border-radius: 10px;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;display: flex;justify-content: center;align-items: center;flex-direction: column;position: relative;overflow-x: hidden;" @click="$router.push('/tabs/spam_provinsi')">
                        <ion-img src="/assets/wave-3.png" style="position: absolute;left:0;right:0;bottom:0;width: 100%;z-index: 1;"></ion-img>
                        
                        <ion-img src="/assets/001-lake.png" style="width: 50px;position: relative;z-index: 1;"></ion-img>
                        <h6 class="fz-12 fc-black" style="margin-top: 5px;position: relative;z-index: 1;color: #fff;text-shadow: 2px 2px 2px rgba(0,0,0,0.8);"><strong>SPAM PROV</strong></h6>
                    </div>
                </ion-col>

                <ion-col size="4">
                    <div style="width:100%;height: 85px;background-color: #fff;border-radius: 10px;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;display: flex;justify-content: center;align-items: center;flex-direction: column;position: relative;overflow-x: hidden;" @click="$router.push('/tabs/statistik')">
                        <ion-img src="/assets/wave-3.png" style="position: absolute;left:0;right:0;bottom:0;width: 100%;z-index: 1;"></ion-img>
                        
                        <ion-img src="/assets/005-bar-chart.png" style="width: 50px;position: relative;z-index: 1;"></ion-img>
                        <h6 class="fz-12 fc-black" style="margin-top: 5px;position: relative;z-index: 1;color: #fff;text-shadow: 2px 2px 2px rgba(0,0,0,0.8);"><strong>STATISTIK</strong></h6>
                    </div>
                </ion-col>

                <ion-col size="4">
                    <div style="width:100%;height: 85px;background-color: #fff;border-radius: 10px;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;display: flex;justify-content: center;align-items: center;flex-direction: column;position: relative;overflow-x: hidden;" @click="$router.push('/tabs/sumber_air_sekitar')">
                        <ion-img src="/assets/wave-3.png" style="position: absolute;left:0;right:0;bottom:0;width: 100%;z-index: 1;"></ion-img>
                        

                        <ion-img src="/assets/004-rivers.png" style="width: 50px;position: relative;z-index: 1;"></ion-img>
                        <h6 class="fz-12 fc-black" style="margin-top: 5px;position: relative;z-index: 1;color: #fff;text-shadow: 2px 2px 2px rgba(0,0,0,0.8);"><strong>SUMBER AIR</strong></h6>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>

        <!-- <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <ion-text>
                        <h6 class="fz-18" style="color:#163891"><strong>VIDEO PEMAHAMAN</strong></h6>
                        <h6 class="fz-14 fc-black">JELAJAH AIR</h6>
                    </ion-text>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="12">
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
                        :slidesPerView="1.5"
                        :spaceBetween="15"
                        class="mySwiper"
                        >
                        <swiper-slide  v-for="(banner, i) in banner" :key="i">
                            <ion-img  :src="banner.src" style="width: 100%;height: 160px;object-fit: fill"></ion-img>
                        </swiper-slide>
                    </swiper>
                </ion-col>
            </ion-row>
        </ion-grid> -->

        <ion-grid style="padding:0 10px;margin-top:15px;">
            <ion-row>
                <ion-col size="12">
                    <ion-text>
                        <h6 class="fz-18" style="color:#163891"><strong>SUMBER AIR</strong></h6>
                        <h6 class="fz-14 fc-black" >PROVINSI JAWA TENGAH</h6>
                    </ion-text>
                </ion-col>
                <!-- <ion-col size="4">
                    <ion-text class="ion-text-end">
                        <h6 class="fz-16" style="color:grey" @click="$router.push('/tabs/sumber_air_sekitar')">Lainnya</h6>
                    </ion-text>
                </ion-col> -->
            </ion-row>
  
            <ion-row>
                <ion-col size="12">
                    <swiper 
                        :pagination="{
                            clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        :slidesPerView="2"
                        :spaceBetween="15"
                        class="mySwiper"
                    >
                        <swiper-slide  v-for="(sumber_air, i) in sumber_air" :key="i">
                            <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail/'+sumber_air.OGR_FID)">
                                <ion-img v-if="sumber_air.foto_1" :src="sumber_air.src" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                                <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
    
                                <div style="width:100%;padding:20px 10px;background-color: rgba(0, 0, 0, 0.8);position: absolute;left:0;right:0;bottom:0;">
                                    <ion-text>
                                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{sumber_air.nama?sumber_air.nama:''}}</h5>
                                    </ion-text>
            
                                    <div style="width:100%;height:1px;background-color:#fff;margin:5px 0;"></div>
            
                                    <ion-text>
                                        <h6 class="fz-10 fc-white" style="font-weight:normal;">Kec. {{sumber_air.kecamatan}} Kel. {{sumber_air.desa_kel}}</h6>
                                    </ion-text>
                                </div>
            
                                <ion-badge color="primary" style="position: absolute;top:10px;right:10px;">
                                    <ion-text>
                                        <h6 class="fz-10 fc-white" style="font-weight:bold;">{{sumber_air.kab_kot}}</h6>
                                    </ion-text>
                                </ion-badge>
                            </div>
                        </swiper-slide>
                    </swiper>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-grid style="padding:0 10px;margin-top:15px;">
            <ion-row>
                <ion-col size="12">
                    <ion-text>
                        <h6 class="fz-18" style="color:#163891"><strong>SPAM PROVINSI</strong></h6>
                        <h6 class="fz-14 fc-black" >JAWA TENGAH</h6>
                    </ion-text>
                </ion-col>
                <!-- <ion-col size="4">
                    <ion-text class="ion-text-end">
                        <h6 class="fz-16" style="color:grey" @click="$router.push('/tabs/spam_provinsi')">Lainnya</h6>
                    </ion-text>
                </ion-col> -->
            </ion-row>
  
            <ion-row>
                <ion-col size="12">
                    <swiper 
                        :pagination="{
                            clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        :slidesPerView="2"
                        :spaceBetween="15"
                        class="mySwiper"
                    >
                        <swiper-slide v-for="(spam_desa, i) in spam_desa" :key="i">
                            <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/spam_desa/detail/'+spam_desa.spam_desa_id+'/1')">                      <ion-img v-if="spam_desa.foto_1" :src="spam_desa.src" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
                                <ion-img v-else src="https://via.placeholder.com/240" style="width: 100%;height: 200px;object-fit: cover;"></ion-img>
            
                                <div style="width:100%;padding:20px 10px;background-color: rgba(0, 0, 0, 0.8);position: absolute;left:0;right:0;bottom:0;">
                                    <ion-text>
                                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">{{spam_desa.nama?spam_desa.nama:''}}</h5>
                                    </ion-text>
            
                                    <div style="width:100%;height:1px;background-color:#fff;margin:5px 0;"></div>
                                        
                                    <ion-text>
                                        <h6 class="fz-10 fc-white" style="font-weight:normal;">Kec. {{spam_desa.kecamatan?spam_desa.kecamatan:''}} Kel. {{spam_desa.desa_kel?spam_desa.desa_kel:''}}</h6>
                                    </ion-text>
                                        
                                </div>
            
                                <ion-badge color="primary" style="position: absolute;top:10px;right:10px;">
                                    <ion-text>
                                        <h6 class="fz-10 fc-white" style="font-weight:bold;">{{spam_desa.kab_kot?spam_desa.kab_kot:''}}</h6>
                                    </ion-text>
                                </ion-badge>
                            </div>
                        </swiper-slide>
                    </swiper>
                </ion-col>
            </ion-row>
        </ion-grid>

 


  
        
        <!-- <ion-fab slot="fixed" vertical="bottom" horizontal="end">
            <ion-fab-button @click="$router.push('/tabs/lapor_sumber_air')" style="--background:#163891">
              <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
            </ion-fab-button>
        </ion-fab> -->
      </ion-content>
      <!-- <ion-loading class="custom-loading" message="Loading..." v-else spinner="circles"></ion-loading> -->
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonContent, IonGrid,IonLoading, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonImg, IonInput, IonText, IonBadge  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { Preferences } from '@capacitor/preferences';
  import axios from "axios";
  import { ip_server } from "@/ip-config.js";
  import moment from "moment";
  moment.locale("id");
  import { addCircleOutline, arrowBackOutline, logOutOutline  } from 'ionicons/icons';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import mapboxgl from 'mapbox-gl';
    import * as turf from '@turf/turf';
  
  import 'swiper/css';
  import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  import '@ionic/vue/css/ionic-swiper.css';
  export default defineComponent({
      components: {
          IonPage,IonLoading,
          IonHeader,
          IonToolbar,
          IonContent,
          IonGrid,
          IonRow,
          IonCol,
          IonIcon,
          IonFab,
          IonFabButton,
          IonImg,
          IonInput,
          IonText,
          IonBadge,
          Swiper,
          SwiperSlide
      },
      setup() {
          return { modules: [Autoplay, Pagination, Navigation], addCircleOutline, logOutOutline, arrowBackOutline };
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

async logout() {
  await Preferences.remove({ key: 'token' });
  await Preferences.remove({ key: 'id_user' });

},
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
                        vm.map.loadImage(
            'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            (error, image) => {
                if (error) throw error;
                vm.map.addImage('custom-marker', image);
                        vm.map.addSource('points', {
                'type': 'geojson',
                    'data': {
                        "type": "FeatureCollection",
                        "features": []
                        },
                        "attribution": "Pemerintah Kota Semarang",
                  'generateId': true
              });
              vm.map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'custom-marker',
                        // get the title name from the source's "title" property
                        'text-field': ['get', 'title'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                    }
                });
                  let id_jalan =null;
//                   vm.map.on('moveend', async () => {
//   // console.log(vm.map.getCenter());
//   let koor = vm.map.getCenter();
//   vm.long = koor.lng;
//                   vm.lat = koor.lat;
//                   var point1 = turf.point([vm.long,  vm.lat]);
//                   var buffered = turf.buffer(point1, vm.radius, {units: 'meters'});
//                   // console.log(buffered);
//                   // let ip_server = await Preferences.get({ key: "get" });
//                   let data = await  axios.post(`${ip_server}peta/sumber_air_radius?jarak=${vm.radius}&long=${koor.lng}&lat=${koor.lat}`,{
//                     geojsonpoint: buffered
//       });
//                 if(data){
                  
//                   vm.map.getSource('route').setData(data.data);
//                 }
//   });
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
         
                geolocate.on('geolocate', async function(e) {
                  vm.long = e.coords.longitude;
                  vm.lat = e.coords.latitude
                  var point1 = turf.point([vm.long,  vm.lat]);
                  var buffered = turf.buffer(point1, vm.radius, {units: 'meters'});
                  console.log(buffered);
                //   let ip_server = await Preferences.get({ key: "get" });
                  let data = await  axios.post(`${ip_server}peta/sumber_air_radius?jarak=${vm.radius}&long=${e.coords.longitude}&lat=${e.coords.latitude}`,{
                    geojsonpoint: buffered
      });
                if(data){
                  console.log([data,'ini data']);
                  vm.map.getSource('points').setData(data.data);
                }
                
            });
            geolocate.trigger();
        })
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
          data:{limit:4,desa:1},
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
          if (ret.value) {
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
  <style >
  
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