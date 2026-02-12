
<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import UserForm from '../components/UserForm.vue'
import Toast from '../components/Toast.vue'

const store = useUserStore()
const showToast = ref(false)

async function handleCreate(user) {
  try {
    await store.addUser(user)
    showToast.value = true
    setTimeout(() => showToast.value = false, 3000)
  } catch (e) {
    alert(e.message)
  }
}
</script>

<template>
  <div class="container">
    <h2>Create User</h2>
    <UserForm @submit="handleCreate" />
    <Toast v-if="showToast" message="User successfully added!" />
  </div>
</template>
