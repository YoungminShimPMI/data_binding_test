import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropsComponent from "@/components/props/PropsComponet.vue";
import ModelComponent from "@/components/model/ModelComponet.vue";
import ExposeComponent from "@/components/expose/ExposeComponet.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'expose',
        component: ExposeComponent
      },
      {
        path: 'props',
        name: 'props',
        component: PropsComponent
      },
      {
        path: 'model',
        name: 'model',
        component: ModelComponent
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
