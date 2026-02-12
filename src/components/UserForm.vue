
<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  email: '',
  role: 'Viewer'
})

const errors = reactive({ name: '', email: '' })

function validate() {
  errors.name = ''
  errors.email = ''
  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    valid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    valid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Invalid email format'
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (!validate()) return
  emit('submit', { ...form })
  form.name = ''
  form.email = ''
  form.role = 'Viewer'
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Name</label>
      <input v-model="form.name" />
      <div class="error">{{ errors.name }}</div>
    </div>

    <div>
      <label>Email</label>
      <input v-model="form.email" />
      <div class="error">{{ errors.email }}</div>
    </div>

    <div>
      <label>Role</label>
      <select v-model="form.role">
        <option>Admin</option>
        <option>Editor</option>
        <option>Viewer</option>
      </select>
    </div>

    <button type="submit">Create User</button>
  </form>
</template>
