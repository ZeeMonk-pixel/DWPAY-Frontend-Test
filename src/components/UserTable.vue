
<script setup>
defineProps(['users'])
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <span class="badge" :class="user.role">
            {{ user.role }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
