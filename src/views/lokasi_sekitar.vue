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
                                <h6 class="fz-16 fc-white">LOKASI SEKITAR</h6>
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
              <ion-col size="12" style="padding:0">
                  <div style="width:100%;height:100vh;position: relative;background-color: wheat;" id='map' ref="map"></div>
              </ion-col>
          </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonText, toastController} from '@ionic/vue';
import { defineComponent } from 'vue';
import { arrowBackCircleOutline  } from 'ionicons/icons';
import axios from "axios";
import { Preferences } from "@capacitor/preferences";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

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
            radius: 1000,
            map:null
        };
    },
    async ionViewDidEnter() {
        this.peta()
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
                    "attribution": "Pemerintah Provinsi Jawa Tengah",
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
            vm.map.addSource('garis', {
            'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": []
                    },
                    "attribution": "Pemerintah Provinsi Jawa Tengah",
              'generateId': true
          });
          vm.map.addLayer({
              'id': 'route',
              'type': 'line',
              'source': 'garis',
              'paint': {
                  'line-width': 8,
                  // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
                  // to set the line-color to a feature property value.
                  'line-color': [
                    'case',
                    ['boolean',['feature-state', 'clicked'], false],
                    'purple',
                    'cyan'
                  ]
                  },
                  'filter': ['==', '$type', 'LineString']
              });
            vm.map.addLayer({
                  "id": "symbols",
                  "type": "symbol",
                  "source": "garis",
                  "layout": {
                    "symbol-placement": "line",
                    "text-font": ["Open Sans Semibold"],
                    // "text-field": ['get', 'nm_ruas'],
                    "text-field": ['get', 'kabkot'],
                    "text-size": 8,
                    "text-ignore-placement": true,
                    "text-allow-overlap": true,
                  },
                  "paint":{
                    "text-color": 'black'
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
vm.map.on('click', 'points', async (e) => {
console.log(e.features[0].properties);
   const toast = await toastController.create({
                message: e.features[0].properties.nama,
                duration: 2000,
                position: 'top'
              });

              await toast.present();
})
        vm.map.on('click', 'route', async (e) => {
          console.log('ke klik');
          //ganti warna
          
        
          // if(e.features[0].properties.status!='JALAN LINGKUNGAN'){
          //   const toast = await toastController.create({
          //       message: 'Jalan dipilih bukan Jalan Lingkungan',
          //       duration: 2000,
          //       position: 'top'
          //     });

          //     await toast.present();
          // }else{
            vm.map.getCanvas().style.cursor = 'pointer';
          if(e.features.length>0){
            if(id_jalan!=null){
              vm.map.setFeatureState({
                source: 'garis',
                id: id_jalan
              },{
                clicked: false
              })
            }
          }
          id_jalan = e.features[0].id;
            vm.map.setFeatureState({
            source:'garis',
            id: id_jalan
              },{
                clicked: true
              })
              const toast = await toastController.create({
                message: "PDAM "+e.features[0].properties.kabkot,
                duration: 2000,
                position: 'top'
              });

              await toast.present();
          // }
        


            
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
  // let poly = `${buffered.geometry.coordinates}`.replace(/[\[\],]/g, ' ').replace(/110./g, ',110.')
  //             let data = await  axios.post(`${ip_server}peta/jaringan_pdam?jarak=${vm.radius}&long=${e.coords.longitude}&lat=${e.coords.latitude}`,{
  //               // geojsonpoint: buffered
  //               polygon:poly.substring(1,poly.length)
            if(data){
              // console.log([data,'ini data']);
              vm.map.getSource('points').setData(data.data);
            }
            

            let data_jaringan = await  axios.post(`${ip_server}peta/jaringan_pdam?jarak=${vm.radius}&long=${e.coords.longitude}&lat=${e.coords.latitude}`,{
                geojsonpoint: buffered
  });
  // let poly = `${buffered.geometry.coordinates}`.replace(/[\[\],]/g, ' ').replace(/110./g, ',110.')
  //             let data = await  axios.post(`${ip_server}peta/jaringan_pdam?jarak=${vm.radius}&long=${e.coords.longitude}&lat=${e.coords.latitude}`,{
  //               // geojsonpoint: buffered
  //               polygon:poly.substring(1,poly.length)
            if(data_jaringan){
              // console.log([data_jaringan,'ini data']);
              vm.map.getSource('garis').setData(data_jaringan.data);
            }
        });
        geolocate.trigger();
    })
  })

  
      },
      ionViewDidLeave() {
        if(this.map){
          this.map.remove()
        this.map = null;
        }
        
        console.log('Home page did leave');
      },
    },
    
});
</script>
<style scoped>
      .mapboxgl-ctrl-logo {
      display: none !important;
  }
</style>