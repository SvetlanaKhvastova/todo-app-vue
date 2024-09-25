<template>
    <div>
        <h1>Products</h1>
        <div v-if="loading">Loading products information....</div>
        <div v-else>
            <ul class="product-list">
                <template v-for="product in products" :key="product.id">
                    <router-link :to="`/products/${product.id}`">
                        <li>
                            {{ product.title }}
                        </li>
                    </router-link>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios'

export default defineComponent({
    name: 'ProductList',
    setup() {
        const products = ref({})
        const loading = ref(true)

        onMounted(async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                products.value = response.data
                loading.value = false
            } catch (error) {
                console.error(error)
                loading.value = false
            }
        })
        return {
            products,
            loading
        }
    }
})
</script>

<style scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
}

.product-list li {
    display: grid;
    justify-items: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px;
}

.product-list li:hover {
    border: 1px solid #fff;
    background: #acafbe;
    color: #fff;
}

a:hover {
    text-decoration: none;
}
</style>