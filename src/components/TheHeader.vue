<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
          :class="{ 'py-2': scrolled, 'py-4': !scrolled }">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <router-link to="/"
                     class="flex items-center">
          <div class="text-2xl font-bold text-gray-800">
            <span class="text-blue-700">航懋</span>机城
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link v-for="item in navItems"
                       :key="item.path"
                       :to="item.path"
                       class="text-gray-700 hover:text-blue-700 font-medium transition-colors">
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Mobile Navigation Toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen"
                class="md:hidden text-gray-700">
          <MenuIcon v-if="!mobileMenuOpen"
                    class="h-6 w-6" />
          <XIcon v-else
                 class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen"
         class="md:hidden bg-white shadow-lg">
      <div class="container mx-auto px-4 py-2">
        <div class="flex flex-col space-y-3">
          <router-link v-for="item in navItems"
                       :key="item.path"
                       :to="item.path"
                       class="text-gray-700 hover:text-blue-700 py-2 font-medium transition-colors"
                       @click="mobileMenuOpen = false">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <div :class="{ 'pt-16': scrolled, 'pt-24': !scrolled }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MenuIcon, XIcon } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '主营业务', path: '/services' },
  { name: '技术优势', path: '/technology' },
  { name: '应用案例', path: '/applications' },
  { name: '服务流程', path: '/process' },
  { name: '联系我们', path: '/contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>