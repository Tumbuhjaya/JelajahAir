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
                <ion-input label="Nama Sumber Air" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Koordinat X Sumber Air" labelPlacement="stacked" placeholder="110.xxx"></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Koordinat Y Sumber Air" labelPlacement="stacked" placeholder="-6.xxx"></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Alamat" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Desa/Kelurahan" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Pengelola" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="No. Hp Pengelola" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Keterangan Lainnya" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Debit" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="12">
                <ion-input label="Jumlah KK Terlayani" labelPlacement="stacked" placeholder=""></ion-input>
            </ion-col>

            <ion-col size="6">
                <div class="w-100-flex" style="justify-content: center;align-items: center;background-color: ;flex-direction: column;">
                    <h6 style="font-size: 12px;font-weight: normal;margin-bottom: 15px;">Foto Sumber Air</h6>
                    <ion-img src="/assets/alt-photo.svg" style="width: 75%;"></ion-img>
                    <!-- untuk load data -->
                    <!-- <ion-img src="https://via.placeholder.com/100" style="width: 75%;object-fit: cover;"></ion-img> -->
                </div>
            </ion-col>

            <ion-col size="6">
                <div class="w-100-flex" style="justify-content: center;align-items: center;background-color: ;flex-direction: column;">
                    <h6 style="font-size: 12px;font-weight: normal;margin-bottom: 15px;">Foto Sumber Air</h6>
                    <ion-img src="/assets/alt-photo.svg" style="width: 75%;"></ion-img>
                    <!-- untuk load data -->
                    <!-- <ion-img src="https://via.placeholder.com/100" style="width: 75%;object-fit: cover;"></ion-img> -->
                </div>
            </ion-col>

            <ion-col size="12" style="margin-top: 15px;">
                <ion-button color="primary" expand="block">Simpan</ion-button>
            </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFab, IonFabButton, IonImg, IonInput  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { addCircleOutline, arrowBackCircleOutline  } from 'ionicons/icons';
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
        return { addCircleOutline, arrowBackCircleOutline };
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
ion-content{
    /* --background:purple; */
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

</style>