import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import SinglePost from "./pages/SinglePost";
import PageNotFound from "./pages/PageNotFound"

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/chi-siamo",
            name: "ChiSiamo",
            component: ChiSiamo
        },
        {
            path: "/contatti",
            name: "Contatti",
            component: Contatti
        },
        {
            path: "/post/:slug",
            name: "SinglePost",
            component: SinglePost
        },
        {
            path: "/*",
            name: "PageNotFound",
            component: PageNotFound
        },
        
    ]
});

export default router