
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'
import UserSearch from '../components/UserSearch.vue'
import UserTable from '../components/UserTable.vue'

const store = useUserStore()
const search = ref('')

onMounted(() => {
  if (!store.users.length) store.fetchUsers()
})

const filteredUsers = computed(() =>
  store.users.filter(u =>
    u.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
  <div class="container">
    <h2>User List</h2>
    <p>Total Admin Users: {{ store.adminCount }}</p>

    <UserSearch v-model="search" />

    <div v-if="store.loading">Loading...</div>
    <div v-if="store.error" class="error">{{ store.error }}</div>

    <UserTable
      v-if="!store.loading && !store.error"
      :users="filteredUsers"
    />
  </div>
</template>
