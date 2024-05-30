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
    <ion-content >
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
          <ion-col size="12">
            <div style="border-radius: 10px;overflow: hidden;">
            <ion-img src="https://via.placeholder.com/640x360" style="width: 100%;"></ion-img>
        </div>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="12">
                <h5><strong>Layanan Populer</strong></h5>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="4">
                <div style="width: 100%;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;overflow: hidden;display: flex;justify-content: center;align-items: center;flex-direction: column;height:130px;background-color: #0086CF;padding: 0 10px;" @click="$router.push('/tabs/penanganan_air_bersih')">
                    <div style="width:60px;height: 60px;background-color: aqua;border-radius: 100%;overflow: hidden;">
                        <ion-img src="https://via.placeholder.com/60"></ion-img>
                    </div>
                    <h6 style="text-align: center;font-size: 14px;color: #fff;margin-top: 10px !important;font-weight: normal;">Penanganan Air Bersih</h6>
                </div>
            </ion-col>

            <ion-col size="4">
                <div style="width: 100%;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;overflow: hidden;display: flex;justify-content: center;align-items: center;flex-direction: column;height:130px;background-color: #0086CF;padding: 0 10px;" @click="$router.push('/tabs/jejaring_air_bersih')">
                <div style="width:60px;height: 60px;background-color: aqua;border-radius: 100%;overflow: hidden;">
                    <ion-img src="https://via.placeholder.com/60"></ion-img>
                </div>
                <h6 style="text-align: center;font-size: 14px;color: #fff;margin-top: 10px !important;font-weight: normal;">Jejaring Air Bersih</h6>
                </div>
            </ion-col>

            <ion-col size="4">
                <div style="width: 100%;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;overflow: hidden;display: flex;justify-content: center;align-items: center;flex-direction: column;height:130px;background-color: #0086CF;padding: 0 10px;" @click="$router.push('/tabs/sumber_air_sekitar')">
                <div style="width:60px;height: 60px;background-color: aqua;border-radius: 100%;overflow:hidden;">
                    <ion-img src="https://via.placeholder.com/60"></ion-img>
                </div>
                <h6 style="text-align: center;font-size: 14px;color: #fff;margin-top: 10px !important;font-weight: normal;">Cari Sumber Air Bersih</h6>
                </div>
            </ion-col>
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
            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail')">
                    <ion-img src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col>

            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail')">
                    <ion-img src="https://via.placeholder.com/240" style="width: 100%;height: 240px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
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
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonImg, IonInput  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Preferences } from '@capacitor/preferences';
// import axios from "axios";
// import { ip_server } from "@/ip-config.js";
import moment from "moment";
moment.locale("id");
import { addCircleOutline, peopleCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonIcon,
        IonFab,
        IonFabButton,
        IonImg,
        IonInput
    },
    setup() {
        return { addCircleOutline, peopleCircleOutline };
    },
    data() {
        return {
            login:0
        };
    },
    methods: {
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

ion-input{
  border-bottom: 1px solid transparent;
  --highlight-color-focused: none;
}
</style>