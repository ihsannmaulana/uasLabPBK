//router
import { createRouter, createWebHistory } from 'vue-router'
import WeatherWidget from './components/WeatherWidget.vue'
import KalenderWidget from './components/KalenderWidget.vue'
import StopwatchWidget from './components/StopwatchWidget.vue'
import GameWidget from './components/GameWidget.vue'
import PhotoWidget from './components/PhotoWidget.vue'

const routes = [
  {
    path: '/weather',
    component: WeatherWidget
  },
  {
    path: '/kalender',
    component: KalenderWidget
  },
  {
    path: '/stopwatch',
    component: StopwatchWidget
  },
  {
    path: '/game',
    component: GameWidget
  },
  {
    path: '/photo',
    component: PhotoWidget
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router