<template>
    <header>
        <nav class="nav-header">
            <ul>
                <li v-for="page in pages" :key="page.path">
                    <router-link :to="page.path">{{ page.title }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
    setup() {
        const pages = [
            { title: 'Home', path: '/' },
            { title: 'Products', path: '/products' },
            { title: 'Contact', path: '/contact' }
        ]
        return {
            pages
        }
    }
})
</script>

<style scoped>
.nav-header {
    padding: 20px 20px 0 20px;
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
}

.nav-header ul {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
    justify-items: center;
    justify-content: start;
    align-items: center;
}
</style>
