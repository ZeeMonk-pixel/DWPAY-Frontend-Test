
import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '../views/UserListView.vue'
import CreateUserView from '../views/CreateUserView.vue'

const routes = [
  { path: '/', component: UserListView },
  { path: '/create', component: CreateUserView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
