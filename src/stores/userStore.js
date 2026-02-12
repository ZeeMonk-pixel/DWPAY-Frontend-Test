
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getUsers, createUser } from '../api/users'

export const useUserStore = defineStore('users', () => {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)

  const adminCount = computed(() =>
    users.value.filter(u => u.role === 'Admin').length
  )

  async function fetchUsers() {
    loading.value = true
    error.value = null
    try {
      users.value = await getUsers()
    } catch {
      error.value = "Failed to fetch users."
    } finally {
      loading.value = false
    }
  }

  async function addUser(data) {
    const tempUser = { ...data, id: Date.now() }
    users.value.push(tempUser)
    try {
      await createUser(data)
      return true
    } catch {
      users.value = users.value.filter(u => u.id !== tempUser.id)
      throw new Error("Failed to create user")
    }
  }

  return { users, loading, error, adminCount, fetchUsers, addUser }
})
