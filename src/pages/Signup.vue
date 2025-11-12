<template>
  <div class="signup-container">
    <div class="signup-card">
      <h1 class="title">Create Your CHCC Account</h1>

      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" class="btn-signup">Sign Up</button>
      </form>

      <p class="login-text">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>

      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const message = ref('')

function signup() {
  const users = JSON.parse(localStorage.getItem('chcc_users') || '[]')
  if (users.some(u => u.username === username.value)) {
    message.value = '⚠️ User already exists.'
    return
  }
  users.push({ username: username.value, password: password.value })
  localStorage.setItem('chcc_users', JSON.stringify(users))
  message.value = '✅ Account created successfully!'
  setTimeout(() => router.push('/login'), 1000)
}
</script>

<style scoped>
/* Match login container design */
.signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #cce0ff, #88b4ff);
  font-family: 'Poppins', sans-serif;
}

/* Card box */
.signup-card {
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  animation: fadeIn 0.5s ease;
}

/* Title */
.title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1e293b;
  text-align: center;
}

/* Form fields */
.form-group {
  width: 100%;
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #334155;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #cbd5e1;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 5px rgba(37, 99, 235, 0.5);
}

/* Button */
.btn-signup {
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
  margin-top: 0.5rem;
}

.btn-signup:hover {
  background-color: #1d4ed8;
}

/* Login redirect text */
.login-text {
  font-size: 0.9rem;
  color: #334155;
  margin-top: 1rem;
  text-align: center;
}

/* Success/error message */
.message {
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin-top: 0.8rem;
  color: #16a34a; /* green */
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
