<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid style="padding: 0;">
        <ion-row >
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;height: 40vh;background-color: ;display: flex;justify-content: center;align-items: center;">
                <ion-img src="/assets/bg_login.png" style="width: 100%"></ion-img>
            </div>
          </ion-col>
        </ion-row>

        <ion-row style="padding: 0 15px;">
          <ion-col size="12">
            <div style="width: 100%;background-color:#fff ;padding: 15px 20px;border-radius: 30px;box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
                <ion-row>
                    <ion-col size="12">
                        <ion-segment
                        color="success"
                        :swipe-gesture="true"
                        v-model="segment"
                        @ionChange="segmentChanged($event)"
                        >
                            <ion-segment-button class="button" value="data1">
                                <ion-label class="label" style="color: #000;font-size: 18px;font-weight: 600;">MASUK</ion-label>
                            </ion-segment-button>
                            <ion-segment-button class="button" value="data2">
                                <ion-label class="label" style="color: #000;font-size: 18px;font-weight: 600;">DAFTAR</ion-label>
                            </ion-segment-button>
                        </ion-segment>
                    </ion-col>
                </ion-row>

                <ion-row class="list" v-if="segment == 'data1'">
                    <ion-col style="margin-top: 15px;">
                        <h6 style="font-size: 24px;font-weight: 700;color: #000">Log In</h6>
                        <h6 style="font-size: 14px;font-weight: 500;color: #000;margin-top: 10px !important;">Akses akun Anda dengan masuk di bawah ini.</h6>

                        <ion-input class="custom" placeholder="Email" v-model="email" style="margin: 30px 0 15px 0;"></ion-input>

                        <ion-input  class="custom" placeholder="Password" type="password" v-model="pwd" ></ion-input>

                        <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                          <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" color="primary" size="large"  @click="submit_login">Masuk</ion-button>
                          <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" color="primary" size="large" @click="login_google">Google</ion-button>
                          </div>
                            
                    </ion-col>
                </ion-row>

                <ion-row class="list" v-if="segment == 'data2'">
                    <ion-col style="margin-top: 15px;">
                        <div style="width:100%;height:45vh;overflow-y: scroll;">
                            <h6 style="font-size: 24px;font-weight: 700;color: #000">Daftar</h6>
                            <h6 style="font-size: 14px;font-weight: 500;color: #000;margin-top: 10px !important;margin-bottom: 10px !important;">Jika Anda belum memiliki akun, silahkan daftarkan diri anda  di bawah ini.</h6>

                            <ion-input class="custom" placeholder="Nama" v-model="fullname" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Alamat" v-model="alamat"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Desa/Kel." v-model="desa"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="No. KTP" v-model="ktp" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="No. HP" v-model="hp" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Ket. Lain" v-model="keterangan" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Jabatan" v-model="jabatan" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Email" v-model="email"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Password" v-model="pwd" type="password" style="margin: 15px 0;"></ion-input>

                            <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                                <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" color="primary" size="large" @click="submit_register">Daftar</ion-button>
                            
                              </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput, IonLabel, IonSegment, IonSegmentButton, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { Preferences } from '@capacitor/preferences';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

// use hook after platform dom ready
GoogleAuth.initialize({
  clientId: '576386395599-t2e4r1gpivibj70e3tsme3raeavjo4lm.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: false,
});
export default defineComponent({
    components: {
      IonPage,
      IonContent,
      IonGrid,
      IonRow,
      IonCol,
      IonButton,
      IonInput,
      IonLabel, 
      IonSegment, 
      IonSegmentButton,
      IonImg
    },
    setup() {
        
    },
    data() {
        return {
            segment: "data1",
            fullname:'',
            pwd:'',
            desa:'',
            ktp:'',
            hp:'',
            keterangan:'',
            jabatan:'',
            alamat:'',
            email:'',
        };
    },
    methods: {
        segmentChanged(e) {
            this.segment = e.detail.value;
            this.class();
        },
        class() {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        async login_google(){
          const response = await GoogleAuth.signIn();
          console.log(response);
        },
       async submit_register(){
        let post ={
            fullname:this.fullname,
            username:this.email,
            pwd:this.pwd,
            desa:this.desa,
            ktp:this.ktp,
            hp:this.hp,
            keterangan:this.keterangan,
            jabatan:this.jabatan,
            alamat:this.alamat,
            email:this.email,
        }
          await axios.post(ip_server+'user/insert',post).then(async function (data) {
            this.fullname='';
            this.pwd='';
            this.desa='';
            this.ktp='';
            this.hp='';
            this.keterangan='';
            this.jabatan='';
            this.alamat='';
            this.email='';
            alert(data.data.message)
          })
        },
        async submit_login(){
          let vm = this
          try {
          await axios.post(ip_server+'autentifikasi/login_mobile',{username:this.email,password:this.pwd}).then(async function (res) {
            await Preferences.set({
                      key: "token",
                      value: res.data.token,
                  });
                  await Preferences.set({
                      key: "id_user",
                      value: String(res.data.id_user),
                  });
              
                        vm.loading = false;
                            vm.$router.push('/tabs/dashboard');
                            
          })} catch (error) {
            alert('Data Tidak Sesuai')
          }
      }
    },
});
</script>
<style scoped>
ion-content{
  --background: #269BDF
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

ion-input{
  border-bottom: 1px solid transparent;
  --highlight-color-focused: none;
}

ion-select{
  border-bottom: 1px solid transparent; 
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  --highlight-color-focused: none;
}
</style>