import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";

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
    ]
});

export default router