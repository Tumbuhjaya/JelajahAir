<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Lapor Sumber Air Bersih</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
            <ion-col size="12">
                <ion-input label="Nama Pelapor" v-model="nama" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Alamat Pelapor" v-model="alamat"  labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input type="email" label="Email Pelapor" v-model="email" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12">
                <ion-input  label="No Telp Pelapor" v-model="telp" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>
            <ion-col size="12" style="margin-top: 30px;">
              <h4><strong>INFO SUMBER AIR</strong></h4>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Jenis" v-model="jenis" label-placement="stacked">
                <ion-select-option value="Mata Air">Mata Air</ion-select-option>
                <ion-select-option value="Sumur">Sumur</ion-select-option>
                <ion-select-option value="Embung">Embung</ion-select-option>
                <ion-select-option value="Waduk">Waduk</ion-select-option>
                <ion-select-option value="Lainnya">Lainnya</ion-select-option>
              </ion-select>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Nama Sumber Air" v-model="nama_sumber_air" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Kabupaten/Kota" @ionChange="get_kecamatan" v-model="kab_id" label-placement="stacked">
                <ion-select-option  v-for="(kabupaten, i) in kabupaten" :key="i" :value="kabupaten.kabupaten_id">{{ kabupaten.kabupaten }}</ion-select-option>

              </ion-select>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Kecamatan"  @ionChange="get_kelurahan" v-model="kec_id" label-placement="stacked">
                <ion-select-option  v-for="(kecamatan, i) in kecamatan" :key="i" :value="kecamatan.id_kec">{{ kecamatan.kec }}</ion-select-option>

              </ion-select>
            </ion-col>

            <ion-col size="12">
              <ion-select label="Kelurahan/Desa" v-model="desa_id" label-placement="stacked">
                <ion-select-option  v-for="(kelurahan, i) in kelurahan" :key="i" :value="kelurahan.id_desakel">{{ kelurahan.desa_kel }}</ion-select-option>
              </ion-select>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Koordinat X Sumber Air" v-model="x" disabled labelPlacement="stacked" placeholder="110.xxx"></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Koordinat Y Sumber Air" v-model="y" disabled labelPlacement="stacked" placeholder="-6.xxx"></ion-input>
            </ion-col>

            <ion-col size="12">
              <ion-textarea label="Deskripsi" v-model="deskripsi" labelPlacement="stacked" placeholder=""></ion-textarea>
            </ion-col>

            <ion-col size="12">
                <div class="w-100-flex" style="justify-content: center;align-items: center;background-color: ;flex-direction: column;">
                    <h6 style="font-size: 12px;font-weight: normal;margin-bottom: 15px;">Foto Sumber Air</h6>
                    <ion-img src="/assets/alt-photo.svg" v-if="!foto_1"
                        @click="takePicture('foto_1')" style="width: 30%;"></ion-img>
                        <ion-img v-else :src="foto_1"
                        @click="takePicture('foto_1')"
                         style="width: 30%;"></ion-img>
                    <!-- untuk load data -->
                    <!-- <ion-img src="https://via.placeholder.com/100" style="width: 75%;object-fit: cover;"></ion-img> -->
                </div>
            </ion-col>
            <ion-col size="12" style="margin-top: 15px;">
                <ion-button color="primary" expand="block" @click="submitForm">Simpan</ion-button>
            </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {  IonLoading,alertController ,loadingController,IonSelect ,IonSelectOption  , IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonImg, IonInput, IonTextarea  } from '@ionic/vue';
import { defineComponent ,watch } from 'vue';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { arrowBackCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
        IonLoading ,
        alertController ,
        loadingController,
        IonPage,
        IonHeader,
        IonContent,
        IonGrid,
        IonSelect,
        IonSelectOption,
        IonRow,
        IonCol,
        IonIcon,
        IonButton,
        IonImg,
        IonInput,
        IonTextarea
    },
    setup() {
        return { arrowBackCircleOutline };
    },

    data() {
        return {
          kabupaten :[],
          kab_id:0,
          kecamatan :[],
          kec_id:0,
          kelurahan :[],
          desa_id:0,
            nama_sumber_air:'',
            nama:'',
            email:'',
            alamat:'',
            x:'',
            y:'',
            foto_1:'',
            foto_2:'',
            afoto_1:'',
            afoto_2:'',
            deskripsi:'',
            telp:'',
            jenis:'',
        };
    },

    async ionViewDidEnter() {
      this.get_kabupaten()
      let coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy:true,maximumAge:Infinity});
      this.x = coordinates.coords.longitude
      this.y = coordinates.coords.latitude
    },
    methods: {
      async takePicture(nama) {
        let vm = this;
        const cameraPhoto = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt,
          promptLabelHeader: "Pilih Aksi",
          promptLabelPhoto: "Ambil Dari Galeri",
          promptLabelPicture: "Ambil Dari Camera",
          quality: 30,
          saveToGallery: true,
          allowEditing: false,
        });
        if (cameraPhoto) {
          const allowedTypes = ['jpeg', 'jpg', 'png'];
          const fileType = cameraPhoto.format

          if (allowedTypes.includes(fileType)) {
            let x = await fetch(`${cameraPhoto.webPath}`).then((e) => {
              return e.blob();
            });

            vm[nama] = cameraPhoto.webPath;
            vm["a" + nama] = x;
          } else {
            const alert = await alertController.create({
              header: 'Gagal',
              message: 'File Tidak Cocok , Pastikan Format jpeg, jpg, png',
            });
            await alert.present();
          }
      }
      },

      async submitForm() {
            let vm = this
            vm.check=false
            let formData = new FormData()
            let token = await Preferences.get({ key: "token" });
            let header =''
            let message = ''
            const loading = await loadingController.create({
                message: 'Mohon Tunggu...',
              });
              await loading.present();

          if (!vm.afoto_1) {
              header='Gagal'
              message='Minimal 1 Foto / Lampiran Wajib Di isi'
            }else{
            formData.append("foto_1", vm.afoto_1);
            // formData.append("foto_2", vm.afoto_2);    
            formData.append('nama_sumber_air',vm.nama_sumber_air)
            formData.append('nama',vm.nama)
            formData.append('alamat',vm.alamat)
            formData.append('email',vm.email)
            formData.append('telp',vm.telp)
            formData.append('jenis',vm.jenis)
            formData.append('id_kab',vm.kab_id)
            formData.append('id_kec',vm.kec_id)
            formData.append('id_kel',vm.desa_id)
            formData.append('x',vm.x)
            formData.append('y',vm.y)
            formData.append('deskripsi',vm.deskripsi)
            await axios({
              method: "post",
              headers: {
                "Content-Type": "multipart/form-data",
                token: token.value,
              },
              url: ip_server+'laporan/insert_mobile',
              data: formData,
            }).then(async function (data) {
              header ='sukses'
              if (data.data.message == 'sukses') {
                message = 'Permohonan Informasi Telah Diajukan Mohon Tunggu Konfimasi Dari Admin.'
              } else {
                message = 'sukses'
              }
            }).catch(async function(Gagal) {
              console.log(Gagal);
              header ='Gagal'
              message = data.message=='gagal'?data.message:'Gagal'
            })
          }
            const alert = await alertController.create({
                header: header,
                message: message,
              });
              await alert.present();
              // await this.reload()
              await loading.dismiss();
                  vm.nama_sumber_air=''
                  vm.alamat=''
                  vm.nama=''
                  vm.x=''
                  vm.y=''
                  vm.foto_1=''
                  vm.foto_2=''
                  vm.afoto_1=''
                  vm.afoto_2=''
                  vm.deskripsi=''
                  vm.email=''
                  vm.kab_id=''
                  vm.desa_id=''
                  vm.kec_id=''
                  vm.telp=''
                  vm.debit=''
                  vm.jumlah_KK_terlayani=''
              vm.check=false
      },
      async get_kabupaten() {
        let vm = this
        await axios.get(ip_server+'kabupaten').then(function (hsl) {
          vm.kabupaten = hsl.data.data
        })
      },
      async get_kecamatan() {
        let vm = this
        await axios.get(ip_server+'kecamatan?id_kab='+vm.kab_id).then(function (hsl) {
          vm.kecamatan = hsl.data.data
        })
      },
      async get_kelurahan() {
        let vm = this
        await axios.get(ip_server+'desa?id_kec='+vm.kec_id).then(function (hsl) {
          vm.kelurahan = hsl.data.data
        })
      },
    },
});
</script>
<style scoped>
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

</style>