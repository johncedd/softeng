<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="title">CHCC Portal Login</h1>

      <form @submit.prevent="login">
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

        <button type="submit" class="btn-login">Login</button>
      </form>

      <p class="signup-text">
        Don't have an account? <router-link to='/signup'>Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function login() {
  const users = JSON.parse(localStorage.getItem('chcc_users') || '[]')
  const user = users.find(u => u.username === username.value && u.password === password.value)

  if (user) {
    localStorage.setItem('chcc_current', username.value)
    router.push('/home')
  } else {
    alert('Invalid credentials')
  }
}
</script>


<style scoped>
/* Full viewport centering */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #cce0ff, #88b4ff);
  font-family: 'Poppins', sans-serif;
}

/* Card container */
.login-card {
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Stretch children to full width */
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
.btn-login {
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

.btn-login:hover {
  background-color: #1d4ed8;
}

/* Signup text */
.signup-text {
  font-size: 0.9rem;
  color: #334155;
  margin-top: 1rem;
  text-align: center;
}

/* Fade animation */
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