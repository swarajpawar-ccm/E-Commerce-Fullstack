<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h2>{{ product.name }}</h2>
    <p class="category">{{ product.category }}</p>
    <p class="price">{{ product.price }}</p>
    <p class="description">{{ product.description }}</p>
    <button @click="handleAddToCart"> Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "@/types/product";
import { useCartStore } from "@/stores/cart";

const props = defineProps<{ product: Product }>();
const cart = useCartStore();

function handleAddToCart(){
cart.addToCart(props.product)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  width: 250px;
  background-color: #fff;
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
}

.price {
  color: green;
  font-weight: bold;
}

.category {
  font-style: italic;
  color: #666;
}

.description {
  font-size: 14px;
  color: #444;
}
</style>
