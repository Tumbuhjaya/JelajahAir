<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid style="width: 100%;height: 100vh;background-image: url('/assets/bg_ilustrasi.png');background-repeat: no-repeat;background-color: ;background-size: 100%;background-position: center;">
        <ion-row>
          <ion-col size="12">
            <div style="width: 100%;height: 95vh;display: flex;justify-content: flex-end;align-items: flex-end;padding: 0 60px;">
              <ion-button style="width: 100%;" size="large" @click="$router.push('/tabs/dashboard')">Lanjutkan</ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
      IonPage,
      IonContent,
      IonGrid,
      IonRow,
      IonCol,
      IonButton
    },
    setup() {
        
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
  --background: #269BDF
}
</style>