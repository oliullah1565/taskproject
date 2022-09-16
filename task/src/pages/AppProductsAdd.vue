
<template>
    <div class="_form _two product_add">
        <div class="card">
            <div class="header">
                <h2>Product Add {{get_data}}</h2>
            </div>
            <div class="body">
                <form action="" @submit.prevent="ProductAdd">
                    <div class="group">
                        <label>Name</label>
                        <input type="text" v-model="name" placeholder="title">
                    </div>
                    <div class="group">
                        <label>Price</label>
                        <input type="text" v-model="price" placeholder="20.00">
                    </div>
                    <div class="group">
                        <label>Category</label>
                        <select v-model="category">
                            <option value="">Select</option>
                            <option value="fashion">Fashion</option>
                            <option value="electronics">Electronics</option>
                            <option value="toy">Toy</option>
                        </select>
                    </div>
                    <div class="group">
                        <label>Image</label>
                        <input type="file" @change="ImgChange($event)">
                    </div>
                    <button type="submit" class="button">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { ref } from 'vue';
import API from './composible/api.js'

export default {
    setup(){
        const get_data = ref('');
        const name = ref('');
        const price = ref('');
        const category = ref('');
        const file_path = ref('');

        const ImgChange = (event) => {
            file_path.value = event.target.files[0];
        }

        const ProductAdd = async() => {
            const form  = new FormData();
            form.append('name', name.value);
            form.append('price', price.value);
            form.append('category', category.value);
            form.append('file', file_path.value);

            const result = await API.product(form);
            get_data.value = result.data;

            router.push('/products')
            
        }

        return {
            get_data,
            name,
            price,
            category,
            file_path,
            ImgChange,
            ProductAdd
        }
    },
}
</script>