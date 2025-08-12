import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/types/product";

interface Cartitem extends Product {
    quantity: number;
}

export const useCartStore = defineStore("cart", () => {
  // state
  const items = ref<Cartitem[]>([]);

  // Load cart from localstorage
  const loadCart = () => {
    const data = localStorage.getItem('cartItems');
     if (data) {
      try {
        items.value = JSON.parse(data);
      } catch {
        items.value = [];
      }
    }
  }

  const saveCart = () => {
    localStorage.setItem('cartItems', JSON.stringify(items.value));
  };

  // Actions
  const addToCart = (product: Product) => {
    const existingItem = items.value.find(item => item._id === product._id);
    if(existingItem){
        existingItem.quantity++
    }else{
        items.value.push({...product, quantity: 1});
    }
     saveCart();
  };

  const removeFromCart = (productId: string) => {
    items.value = items.value.filter((items) => items._id != productId);
    saveCart()
  };

  const updateQuantity = (productiId: string ,quantity: number) => {
    const item = items.value.find(i => i._id === productiId);
    if(item && quantity > 0){
        item.quantity = quantity;
    }else if(item && quantity <= 0){
       removeFromCart(productiId)
    }
    saveCart()
  }

  const clearCart = () => {
    items.value = [];
    saveCart()
  };

  // Getters

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });

  
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loadCart,
    totalPrice,
    totalItems
  };
});
