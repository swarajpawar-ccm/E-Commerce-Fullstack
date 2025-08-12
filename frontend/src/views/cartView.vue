<template>
  <div>
    <h1>Your Cart</h1>
    <div v-if="cart.items.length === 0">Cart is empty</div>
    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item._id ?? item.name"
        class="cart-item"
      >
        <h2>{{ item.name }}</h2>
        <p>{{ item.price }}</p>
        <div class="quantity-controls">
          <button @click="decrease(item._id)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increase(item._id)">+</button>
        </div>
        <p>Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="cart.removeFromCart(item._id!)">Remove</button>
      </div>
      <hr />
      <h3>Total Price: ${{ cart.totalPrice.toFixed(2) }}</h3>
      <button @click="cart.clearCart()">Clear Cart</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";
const cart = useCartStore();

onMounted(() => {
  cart.loadCart();
});

function increase(productId: string) {
  const item = cart.items.find((p) => p._id === productId);
  if (item) {
    cart.updateQuantity(productId, item.quantity + 1);
  }
}

function decrease(productId: string) {
  const item = cart.items.find((p) => p._id === productId);
  if (item) {
    cart.updateQuantity(productId, item.quantity - 1);
  }
}
</script>

<style scoped>
 
</style>
