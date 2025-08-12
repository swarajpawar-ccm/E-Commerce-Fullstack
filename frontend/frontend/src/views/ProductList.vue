<template>
  <div>
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="product-grid">
      <ProductCard v-for="product in products" :key="product._id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/api/products';
import type { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard.vue';

const products = ref<Product[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const data = await fetchProducts();
    products.value = data;
  } catch (err) {
    error.value = 'Failed to load products';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
