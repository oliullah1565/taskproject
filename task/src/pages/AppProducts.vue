<template>
    <div class="pdt-display section_padding">
        <div class="pdt-container pdt_lists">
            <div class="pdt_add" v-if="UserId">
                <router-link to="/products/add" class="link">Product Add</router-link>
            </div>
            <div class="items">
                <div class="item" v-for="(data,index) in get_data" :key="index">
                    <div class="thumb">
                        <img :src="data.image" alt="">
                    </div>
                    <div class="content">
                        <div class="title"><router-link :to="'/productdetails/'+data.id" class="link">{{data.name}}</router-link></div>
                        <div class="price">${{data.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import API from './composible/api.js'

export default {
    setup(){
        const UserId = localStorage.getItem("UserId");
        const get_data = ref([]);

        onMounted(async() => {
            const result = await API.productall();
            get_data.value = result.data;
                
        })

        return {
            UserId,
            get_data,
        }
    }
}
</script>
