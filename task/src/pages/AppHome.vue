<template>
    <app-about></app-about>
    <app-shop></app-shop>
    <app-products></app-products>
    <app-contact></app-contact>
</template>

<script>
import AppAbout from './AppAbout.vue'
import AppContact from './AppContact.vue'
import AppShop from './AppShop.vue'
import AppProducts from './AppProducts.vue'


export default {
    components: { AppAbout, AppShop, AppProducts, AppContact },
}
</script>
