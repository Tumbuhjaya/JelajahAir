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

                        <ion-input class="custom" placeholder="Email" style="margin: 30px 0 15px 0;"></ion-input>

                        <ion-input  class="custom" placeholder="Password" type="password" ></ion-input>

                        <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                            <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" color="primary" size="large"  @click="$router.push('/tabs/dashboard')">Masuk</ion-button>
                        </div>
                            
                    </ion-col>
                </ion-row>

                <ion-row class="list" v-if="segment == 'data2'">
                    <ion-col style="margin-top: 15px;">
                        <div style="width:100%;height:45vh;overflow-y: scroll;">
                            <h6 style="font-size: 24px;font-weight: 700;color: #000">Daftar</h6>
                            <h6 style="font-size: 14px;font-weight: 500;color: #000;margin-top: 10px !important;margin-bottom: 10px !important;">Jika Anda belum memiliki akun, silahkan daftarkan diri anda  di bawah ini.</h6>

                            <ion-input class="custom" placeholder="Nama"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Alamat"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Desa/Kel."  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="No. KTP"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="No. HP" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Ket. Lain" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Jabatan" style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Email"  style="margin: 15px 0;"></ion-input>
                            <ion-input  class="custom" placeholder="Password" type="password" style="margin: 15px 0;"></ion-input>

                            <div style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px;padding: 0 60px;">
                                <ion-button style="text-transform: capitalize;border-radius: 20px;width: 100%;" color="primary" size="large">Daftar</ion-button>
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
    },
});
</script>
<style scoped>
ion-content{
  --background: #269BDF
}
</style>