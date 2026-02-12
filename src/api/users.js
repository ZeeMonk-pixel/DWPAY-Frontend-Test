
let users = [
  { id: 1, name: "John Doe", email: "johndoe@email.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "janedoe@email.com", role: "Editor" }
]

export function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => resolve([...users]), 800)
  })
}

export function createUser(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newUser = { ...user, id: Date.now() }
      users.push(newUser)
      resolve(newUser)
    }, 600)
  })
}
