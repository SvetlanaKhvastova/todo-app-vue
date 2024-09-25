import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Product from "@/views/Product.vue";
import ProductList from "@/views/ProductList.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", name: Main, component: Main },
  { path: "/products", name: ProductList, component: ProductList },
  { path: "/products/:id", name: Product, component: Product, props: true },
  { path: "/contact", name: Contact, component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
