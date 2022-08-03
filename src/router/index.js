import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddIssue from '../views/AddIssue.vue'
import EditIssue from '../views/EditIssue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add_issue',
    name: 'addissue',
    component: AddIssue
  },
  {
    path: '/issues/:id',
    name: 'editissue',
    component: EditIssue,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
