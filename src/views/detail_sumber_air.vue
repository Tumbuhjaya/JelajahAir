<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Detail Sumber Air Bersih</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 15px 20px;">
        <ion-row>
            <ion-col size="12">
                <ion-img src="https://via.placeholder.com/640x360" style="width: 100%;"></ion-img>
            </ion-col>

            <ion-col size="12">
                <h2 style="text-align: center;"><strong>Sumber Air Pringkung</strong></h2>
                <div style="display: table;margin-top: 15px;">
                    <div style="display: table-row;">
                        <div style="display: table-cell;width: 100px;">
                            <h6 style="font-size: 16px;">Alamat</h6>
                        </div>

                        <div style="display: table-cell;width: 10px;">
                            <h6 style="font-size: 16px;">:</h6>
                        </div>

                        <div style="display: table-cell;">
                            <h6 style="font-size: 16px;">-</h6>
                        </div>
                    </div>

                    <div style="display: table-row;">
                        <div style="display: table-cell;width: 100px;">
                            <h6 style="font-size: 16px;">Desa/Kel.</h6>
                        </div>

                        <div style="display: table-cell;width: 10px;">
                            <h6 style="font-size: 16px;">:</h6>
                        </div>

                        <div style="display: table-cell;">
                            <h6 style="font-size: 16px;font-weight: normal;">-</h6>
                        </div>
                    </div>

                    <div style="display: table-row;">
                        <div style="display: table-cell;width: 100px;">
                            <h6 style="font-size: 16px;">Pengelola</h6>
                        </div>

                        <div style="display: table-cell;width: 10px;">
                            <h6 style="font-size: 16px;">:</h6>
                        </div>

                        <div style="display: table-cell;">
                            <h6 style="font-size: 16px;font-weight: normal;">-</h6>
                        </div>
                    </div>

                    <div style="display: table-row;">
                        <div style="display: table-cell;width: 100px;">
                            <h6 style="font-size: 16px;">Debit</h6>
                        </div>

                        <div style="display: table-cell;width: 10px;">
                            <h6 style="font-size: 16px;">:</h6>
                         </div>

                        <div style="display: table-cell;">
                            <h6 style="font-size: 16px;font-weight: normal;">-</h6>
                        </div>
                    </div>

                    <div style="display: table-row;">
                        <div style="display: table-cell;width: 100px;">
                            <h6 style="font-size: 16px;">Jumlah KK Terlayani</h6>
                        </div>

                        <div style="display: table-cell;width: 10px;">
                            <h6 style="font-size: 16px;">:</h6>
                        </div>

                        <div style="display: table-cell;">
                            <h6 style="font-size: 16px;font-weight: normal;">-</h6>
                        </div>
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

</style>