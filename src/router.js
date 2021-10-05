import {createWebHistory, createRouter} from "vue-router";


const routes = [
    {
        path: "/",
        alias: "/Book",
        name: "book",
        component: () => import("../src/components/Books.vue")
    },
    {
        path: "/book/:id",
        name: "book-details",
        component: () => import("../src/components/Book.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("../src/components/addBook.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
