<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Sumber Air Sekitar</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
          <ion-col size="12">
            <ion-input placeholder="Cari Sumber Air " class="custom"></ion-input>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;" @click="$router.push('/tabs/sumber_air_sekitar/detail')">
                    <ion-img src="https://via.placeholder.com/230" style="width: 100%;height: 230px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col>

            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;">
                    <ion-img src="https://via.placeholder.com/230" style="width: 100%;height: 230px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;">
                    <ion-img src="https://via.placeholder.com/230" style="width: 100%;height: 230px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col>

            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;">
                    <ion-img src="https://via.placeholder.com/230" style="width: 100%;height: 230px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;">
                    <ion-img src="https://via.placeholder.com/230" style="width: 100%;height: 230px;object-fit: cover;"></ion-img>

                    <div style="width: 100%;height: 100%;position: absolute;left:0;right: 0;top:0;bottom:0;background-color: rgba(0, 0, 0, 0.19);"></div>
                    <div style="position: absolute;left:0;right: 0;bottom: 0;padding: 10px;">
                        <h5 style="color: #fff;font-weight: bold;font-size: 14px;">Sumber Air Pringkurung</h5>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;margin-top: 5px !important;">Kalongan Kec. Ungaran Timur</h6>
                        <h6 style="color: #fff;font-size: 10px;font-weight: normal;">Kalongan Kec. Ungaran Timur</h6>
                    </div>
                </div>
            </ion-col>

            <ion-col size="6">
                <div style="width: 100%;position: relative;border-radius: 10px;overflow: hidden;">
                    <ion-img src="https://via.placeholder.com/230" style="width: 100%;height: 230px;object-fit: cover;"></ion-img>

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
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { arrowBackCircleOutline  } from 'ionicons/icons';
export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonGrid,
        IonRow,
        IonCol
    },
    setup() {
        return { arrowBackCircleOutline };
    },
    data() {
        return {
        
        };
    },
    methods: {
        
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

ion-input{
  border-bottom: 1px solid transparent;
  --highlight-color-focused: none;
}
</style>