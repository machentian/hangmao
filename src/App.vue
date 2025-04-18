<template>
  <div class="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>
  
  <script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

:root {
  --primary: #1a237e;
  --primary-light: #534bae;
  --primary-dark: #000051;
  --secondary: #546e7a;
  --secondary-light: #819ca9;
  --secondary-dark: #29434e;
  --text-on-primary: #ffffff;
  --text-on-secondary: #ffffff;
  --background: #f5f5f5;
  --surface: #ffffff;
  --error: #b71c1c;
  --success: #2e7d32;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans SC', sans-serif;
  background-color: var(--background);
  color: #333;
  line-height: 1.6;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: var(--primary-dark);
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondary-dark);
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary);
  color: var(--text-on-primary);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: var(--primary-dark);
}

.card {
  background-color: var(--surface);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
  }
}
</style>