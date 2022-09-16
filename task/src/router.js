import { createRouter,createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppContact from './pages/AppContact.vue'
import AppShop from './pages/AppShop.vue'
import AppProducts from './pages/AppProducts.vue'
import AppProductsAdd from './pages/AppProductsAdd.vue'
import AppLogin from './pages/AppLogin.vue'
import AppRegister from './pages/AppRegister.vue'
import AppProductDetails from './pages/AppProductDetails.vue'


const routes = [
    { 
        path:"/", 
        component:AppHome,
        meta: {FrontendLogin: false}
    },
    { 
        path:"/about-me", 
        component:AppAbout,
        meta: {FrontendLogin: false}
    },
    { 
        path:"/shop", 
        component:AppShop,
        meta: {FrontendLogin: false}
    },
    { 
        path:"/products", 
        component:AppProducts,
        meta: {FrontendLogin: false} 
    },
    { 
        path:"/products/add", 
        component:AppProductsAdd,
        meta: {FrontendLogin: true}
 
    },
    { 
        path:"/contact-me", 
        component:AppContact,
        meta: {FrontendLogin: false}
    },
    { 
        path:"/login", 
        component:AppLogin,
        meta: {FrontendLogin: false} 
    },
    { 
        path:"/register", 
        component:AppRegister,
        meta: {FrontendLogin: false}
    },

    { 
        path:"/productdetails/:id", 
        component:AppProductDetails,
        meta: {FrontendLogin: false}
    },
]

const router = createRouter({

    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.meta.FrontendLogin){
        if(!localStorage.getItem('UserId')){
            next({
                path:'/login',
            });
        }else{
            next();
        }
    }else{
        next();
    }
})


export default router;
