<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <div class="text-2xl font-bold mb-4">
            <span class="text-blue-500">航懋机械</span>
          </div>
          <p class="text-gray-400 mb-4">
            航懋机械（上海）有限公司，一家专注于多品种小批量零件一站式交付服务的供应商
          </p>
          <div class="flex space-x-4">
            <a href="#"
               class="text-gray-400 hover:text-white">
              <WeiboIcon class="h-6 w-6" />
            </a>
            <a href="#"
               class="text-gray-400 hover:text-white">
              <WechatIcon class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">快速链接</h3>
          <div class="flex flex-wrap gap-4">
            <router-link to="/"
                         class="text-gray-400 hover:text-white">首页</router-link>
            <router-link to="/services"
                         class="text-gray-400 hover:text-white">主营业务</router-link>
            <router-link to="/technology"
                         class="text-gray-400 hover:text-white">技术优势</router-link>
            <router-link to="/applications"
                         class="text-gray-400 hover:text-white">应用案例</router-link>
            <router-link to="/process"
                         class="text-gray-400 hover:text-white">服务流程</router-link>
            <router-link to="/contact"
                         class="text-gray-400 hover:text-white">联系我们</router-link>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">联系方式</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <MapPinIcon class="h-5 w-5 text-blue-500 mr-2" />
              <span class="text-gray-400">上海市奉贤区肖湾路511号2幢3层</span>
            </div>
            <div class="flex items-center">
              <PhoneIcon class="h-5 w-5 text-blue-500 mr-2" />
              <span class="text-gray-400">张谦 +86-18939777123</span>
            </div>
            <div class="flex items-center">
              <MailIcon class="h-5 w-5 text-blue-500 mr-2" />
              <span class="text-gray-400">james.zhang@126.com</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} 航懋机械（上海）有限公司. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-vue-next'
import WeiboIcon from './icons/WeiboIcon.vue'
import WechatIcon from './icons/WechatIcon.vue'

const currentYear = new Date().getFullYear()
</script>