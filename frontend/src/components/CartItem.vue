<template>
  <div v-for="item in cart.items" :key="item._id ?? item.name">
    <h3>{{ item.name }}</h3>
    <p>Price: ${{ item.price }}</p>
    <p>Quantity: {{ item.quantity }}</p>
    <button @click="item._id && increaseQuantity(item._id)">+</button>
    <button @click="item._id && decreaseQuantity(item._id)">-</button>
    <button @click="item._id && cart.removeFromCart(item._id)">Remove</button>
  </div>

  <p>Total Items: {{ cart.totalItems }}</p>
  <p>Total Price: ${{ cart.totalPrice }}</p>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();

const increaseQuantity = (id: string) =>  {
  const item = cart.items.find(i => i._id === id);
  if (item) {
    cart.updateQuantity(id, item.quantity + 1);
  }
}

const decreaseQuantity = (id: string) =>  {
  const item = cart.items.find(i => i._id === id);
  if (item) {
    cart.updateQuantity(id, item.quantity - 1);
  }
}
</script>
