<template>
  <ion-page >
    <ion-header>
        <div class="w-100-flex" style="padding: 0 20px;">
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <ion-icon :icon="arrowBackCircleOutline" color="light" size="large" @click="$router.push('/tabs/dashboard')"></ion-icon>
            </div>
            <div style="width: 70%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                <h5 style="color: #fff;font-weight: bold;">Jejaring Air Bersih</h5>
            </div>
            <div style="width: 15%;height: 60px;background-color: ;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                
            </div>
        </div>
    </ion-header>
    <ion-content >
      <ion-grid style="padding: 0 20px 15px 20px;">
        <ion-row style="margin-top: 15px;">
            <ion-col size="12">
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #eefafd;display: flex;">
                    <div style="width: 40%;">
                        <ion-img src="https://placehold.co/100?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                    </div>
                    <div style="width:60%;margin-left: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                        <h6 style="font-size: 16px;color:#1c47bc"><strong>Tirta Sumber Air</strong></h6>
                        <div style="display: table;margin-top: 5px;">
                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Alamat</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Desa/Kel.</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Pengelola</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Debit</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Jumlah KK Terlayani</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="12">
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #eefafd;display: flex;">
                    <div style="width: 40%;">
                        <ion-img src="https://placehold.co/100?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                    </div>
                    <div style="width:60%;margin-left: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                        <h6 style="font-size: 16px;color:#1c47bc"><strong>Tirta Sumber Air</strong></h6>
                        <div style="display: table;margin-top: 5px;">
                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Alamat</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Desa/Kel.</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Pengelola</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Debit</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Jumlah KK Terlayani</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row style="margin-top: 15px;">
            <ion-col size="12">
                <div style="width: 100%;box-shadow: 0px 4px 4px 0px #00000040;padding: 20px 15px;border-radius: 8px;background-color: #eefafd;display: flex;">
                    <div style="width: 40%;">
                        <ion-img src="https://placehold.co/100?text=No Image Available" style="width:100%;height:140px;object-fit: cover;"></ion-img>
                    </div>
                    <div style="width:60%;margin-left: 15px;height: 140px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                        <h6 style="font-size: 16px;color:#1c47bc"><strong>Tirta Sumber Air</strong></h6>
                        <div style="display: table;margin-top: 5px;">
                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Alamat</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Desa/Kel.</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Pengelola</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Debit</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div>

                            <div style="display: table-row;">
                                <div style="display: table-cell;width: 80px;">
                                    <h6 style="font-size: 12px;">Jumlah KK Terlayani</h6>
                                </div>

                                <div style="display: table-cell;width: 10px;">
                                    <h6 style="font-size: 12px;">:</h6>
                                </div>

                                <div style="display: table-cell;">
                                    <h6 style="font-size: 12px;">-</h6>
                                </div>
                            </div> 
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