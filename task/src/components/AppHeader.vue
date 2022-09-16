<template>
    <div class="nav-bar">
        <ul class="menu m-0">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/login" v-if="!UserId">Login</router-link></li>
            <li><router-link to="/register" v-if="!UserId">Register</router-link></li>
            <li><router-link to="" v-if="UserId" @click="Logout">Logout</router-link></li>
        </ul>
        <div class="cart">{{UserName}}</div>
    </div>
</template>

<script>
// import router from '@/router';
export default {
    setup(){
        const UserId = localStorage.getItem("UserId");
        const UserName = localStorage.getItem("UserName");

        const Logout = () => {
            localStorage.clear();
            // router.push('/')
            window.location.href='/';
        }

        return {
            UserId,
            UserName,
            Logout,
        }
    }
}
</script>
