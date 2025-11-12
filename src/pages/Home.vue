<template>
  <div class="home-page">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="nav-left">
        <img src="/logo.png" alt="CHCC Logo" class="logo" style="width: auto; height: 40px;"/>
        <span class="nav-title">Concepcion Holy Cross College, Inc.</span>
      </div>

      <div class="nav-right">
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Programs</a>
        <a href="#" class="nav-link">News</a>
        <button class="btn-logout" @click="logout">Logout</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main-container">
      <div class="verification-card">
        <h2 class="card-title">Welcome, {{ currentUser }}</h2>
        <p>Concepcion Holy Cross College, Inc. (CHCC) is a private Catholic educational institution located in Concepcion, Tarlac, Philippines. It was founded with the mission of providing quality education rooted in Christian values, catering to students from various backgrounds while promoting academic excellence, moral development, and community service.</p>
                <h5 class="fw-bold" style="color: #12264A !important;">Foundation and Early Years</h5>
                <p>CHCC traces its origins to the mid-20th century when the need for a faith-based learning institution in Concepcion became evident. With the support of the local clergy and Catholic community, the school was established to provide primary and secondary education with a strong emphasis on Christian teachings.</p>
                <p>Initially, CHCC operated as a small parish school under the guidance of religious leaders. Over the years, the institution expanded, adding more grade levels and accommodating a growing number of students. The school’s commitment to holistic education attracted learners from neighboring towns, cementing its reputation as a center for academic and spiritual formation.</p>
                <h5 class="fw-bold" style="color: #12264A !important;">Growth and Development</h5>
                <p>As the years passed, CHCC underwent several infrastructure developments, curriculum enhancements, and faculty improvements to meet the evolving educational standards. The school introduced new programs, including vocational courses, science-focused tracks, and advanced learning methods that aligned with the national educational system.</p>
                <p>Recognizing the need for higher education, CHCC expanded its academic offerings to include collegiate programs, ensuring students had access to quality tertiary education without having to leave their hometown. This expansion marked a significant milestone in the institution’s history, reinforcing its role in shaping future professionals and leaders.</p>
                <h5 class="fw-bold" style="color: #12264A !important;">Present and Future</h5>
                <p>Today, Concepcion Holy Cross College continues to uphold its mission of providing quality Catholic education. With modernized facilities, digital learning tools, and a strong emphasis on values formation, the school remains dedicated to nurturing students academically, socially, and spiritually.</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer-stats">
      <div class="stat-item">🎓 7,829 Active Users</div>
      <div class="stat-item">📘 550 Online Courses</div>
      <div class="stat-item">📊 83,378 Activities</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentUser = ref('')

onMounted(() => {
  const user = localStorage.getItem('chcc_current')
  if (!user) router.push('/login')
  else currentUser.value = user
})

function logout() {
  localStorage.removeItem('chcc_current')
  router.push('/login')
}
</script>

<style scoped>
/* ==========================
   General Page Setup
========================== */
.home-page {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #eaf0fb 0%, #dce5f4 100%);
}

/* ==========================
   Navbar
========================== */
.navbar {
  background: #ffffff;
  color: #0b2e59;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo-placeholder {
  width: 40px;
  height: 40px;
  background-color: #1d4ed8;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.nav-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: #0b2e59;
}

/* Right side nav */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding-right: 70px;
}

.nav-link {
  color: #0b2e59;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #1d4ed8;
  font-weight: 600;
}

.enroll-btn {
  background-color: #1d4ed8;
  color: #fff;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.enroll-btn:hover {
  background-color: #153eac;
}

.btn-logout {
  background-color: #5dade2;
  border: none;
  color: white;
  padding: 0.45rem 0.8rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-logout:hover {
  background-color: #3498db;
}

/* ==========================
   Main Content
========================== */
.main-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px; /* offset for navbar */
  padding-bottom: 40px;
}

.verification-card {
  background: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0b2e59;
  margin-bottom: 1rem;
}

.card-text {
  color: #4f5d75;
  margin-bottom: 2rem;
}

.validate-btn {
  background: #0b2e59;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}

.validate-btn:hover {
  background: #153eac;
}

/* ==========================
   Footer
========================== */
.footer-stats {
  background: #0b2e59;
  color: white;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  font-size: 0.95rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ==========================
   Responsive
========================== */
@media (max-width: 768px) {
  .nav-right {
    display: none;
  }
  .footer-stats {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
