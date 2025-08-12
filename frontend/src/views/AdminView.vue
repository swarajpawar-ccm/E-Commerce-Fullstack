<template>
  <div class="admin-form">
    <h1>Add Product</h1>
    <form @submit.prevent="handleSubmit">
        <label>
            Name:
            <input v-model="form.name" required />
        </label>

        <label>
            Price:
            <input v-model="form.price" type="number" required /> 
        </label>

        <label>
            Category:
            <input v-model="form.category" required />
        </label>

        <label>
            Image URL:
            <input v-model="form.image" required />
        </label>

        <label>
            Description:
            <textarea v-model="form.description" required ></textarea>
        </label>

         <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createProduct } from "@/api/products";

const form = ref({
  name: "",
  price: 0,
  category: "",
  image: "",
  description: "",
});

const success = ref(false);
const error = ref(false);

const handleSubmit = async () => {
  try {
    await createProduct(form.value);
    success.value = true;
    error.value = false;
    form.value = {
      name: "",
      price: 0,
      category: "",
      image: "",
      description: "",
    };
  } catch (err) {
    success.value = false
    error.value = true
    console.log(err)
  }
};
</script>

<style scoped></style>
