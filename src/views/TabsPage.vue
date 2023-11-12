<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/dashboard">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/data_lapor_sumber_air">
          <ion-icon aria-hidden="true" :icon="chatbubblesOutline" />
          <ion-label>Data Lapor</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/statistik">
          <ion-icon aria-hidden="true" :icon="statsChartOutline" />
          <ion-label>Statistik</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
          <ion-label>Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, statsChartOutline, personCircleOutline, chatbubblesOutline } from 'ionicons/icons';
</script>
