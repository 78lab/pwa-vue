import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MyList.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/MyList.vue'),
      children :[
        {
          path: "/my-detail/:id",
          component: () => import("@/views/Contact.vue"),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
      props: true
    },
  ],
})
