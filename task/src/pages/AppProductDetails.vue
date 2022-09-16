<template>
    <div class="pdt-display section_padding" >
        <div class="pdt-container" >
            <div class="pdt-image">
                <!-- pdt Image -->
                <div class="pdt-image">
                    <img :src="get_data.image" alt="">
                </div>
            </div>

            <div class="pdt-info">
                <!-- pdt Info -->
                <h1 class="pdt-title">{{get_data.name}}</h1>
                <br>
                <p>Price : {{get_data.price}}</p>
                <ul class="pdt-details">
                    <li>{{get_data.category}}</li>
                    
                </ul>
               
                <button type="button" class="button">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { onMounted, ref } from 'vue';
import API from './composible/api.js'

export default {
    setup(){
       
        const get_data = ref([]);

        onMounted(() => {
            setTimeout(async()=>{
                const result = await API.productdetails(router.currentRoute.value.fullPath.split('/')[2]);
            get_data.value = result.data;
            },100)
            
                
        })

        return {
            get_data,
        }
    }
}
</script>
