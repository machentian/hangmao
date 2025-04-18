<template>
  <section id="features"
           class="py-16 bg-gray-50">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Features</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover the amazing features that make our products stand out from the competition.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="feature in features"
           :key="feature.title"
           class="bg-white p-6 rounded-lg shadow-sm">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <component :is="feature.icon"
                     class="h-6 w-6 text-primary" />
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LightbulbIcon, ShieldCheckIcon, TrendingUpIcon } from 'lucide-vue-next'

const features = [
  {
    title: 'Innovative Solutions',
    description: 'We provide cutting-edge solutions that help your business stay ahead of the competition.',
    icon: LightbulbIcon,
  },
  {
    title: 'Secure & Reliable',
    description: 'Our products are built with security in mind, ensuring your data is always protected.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Scalable Growth',
    description: 'Our solutions grow with your business, adapting to your changing needs over time.',
    icon: TrendingUpIcon,
  },
]
</script>