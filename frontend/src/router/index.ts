import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/productlist',
      name: 'productList',
      component: ProductList,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
  ],
})

export default router
