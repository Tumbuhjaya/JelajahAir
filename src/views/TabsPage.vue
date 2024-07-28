<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
        
        <ion-fab slot="fixed" vertical="bottom" horizontal="center">
          <div style="width: 75px;height: 75px;border-radius: 100%;background-color: #fff;display: flex;justify-content: center;align-items: center;">
            <ion-fab-button @click="$router.push('/tabs/lapor_sumber_air')" style="--background:#163891">
              <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
            </ion-fab-button>
          
          </div>
            
        </ion-fab>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/dashboard">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/sekilas">
          <ion-icon aria-hidden="true" :icon="chatbubblesOutline" />
          <ion-label>Sekilas</ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="tab4" href="/tabs/lokasi_sekitar">
          <ion-icon aria-hidden="true" :icon="navigateOutline" />
          <ion-label>Lokasi Sekitar</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/statistik">
          <ion-icon aria-hidden="true" :icon="statsChartOutline" />
          <ion-label>Statistik</ion-label>
        </ion-tab-button> -->

        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, statsChartOutline, chatbubblesOutline, navigateOutline, addCircleOutline } from 'ionicons/icons';

</script>