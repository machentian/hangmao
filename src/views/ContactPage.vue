<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">联系我们</h1>
        <p class="text-xl max-w-3xl mx-auto leading-relaxed">
          我们期待与您沟通，了解您的需求，为您提供最佳解决方案
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-20">
      <div class="container mx-auto px-4 max-w-5xl">
        <!-- Contact Information -->
        <div class="space-y-16">
          <!-- Main Contact -->
          <div>
            <h2 class="text-3xl font-bold mb-8 text-center">
              联系方式
              <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div class="bg-blue-100 p-4 rounded-full text-blue-600 mr-6">
                  <MapPinIcon class="h-8 w-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">公司地址</h3>
                  <p class="text-gray-600 text-lg">上海市浦东新区临港新片区XX路XX号</p>
                </div>
              </div>

              <div class="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div class="bg-blue-100 p-4 rounded-full text-blue-600 mr-6">
                  <PhoneIcon class="h-8 w-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">联系电话</h3>
                  <p class="text-gray-600 text-lg">+86-21-XXXXXXXX</p>
                </div>
              </div>

              <div class="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div class="bg-blue-100 p-4 rounded-full text-blue-600 mr-6">
                  <MailIcon class="h-8 w-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">电子邮箱</h3>
                  <p class="text-gray-600 text-lg">info@hangmaojicheng.com</p>
                </div>
              </div>

              <div class="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div class="bg-blue-100 p-4 rounded-full text-blue-600 mr-6">
                  <ClockIcon class="h-8 w-8" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">工作时间</h3>
                  <p class="text-gray-600 text-lg">周一至周五: 9:00 - 18:00</p>
                  <p class="text-gray-600 text-lg">周六、周日: 休息</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Factory Locations -->
          <div>
            <h2 class="text-3xl font-bold mb-8 text-center">
              工厂地址
              <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div class="flex items-center mb-6">
                  <BuildingIcon class="h-8 w-8 text-blue-600 mr-4" />
                  <h3 class="text-2xl font-semibold text-blue-700">中国工厂</h3>
                </div>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <MapPinIcon class="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <p class="text-gray-600">上海市临港新片区XX路XX号</p>
                  </div>
                  <div class="flex items-start">
                    <PhoneIcon class="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <p class="text-gray-600">+86-21-XXXXXXXX</p>
                  </div>
                </div>
              </div>

              <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div class="flex items-center mb-6">
                  <BuildingIcon class="h-8 w-8 text-blue-600 mr-4" />
                  <h3 class="text-2xl font-semibold text-blue-700">泰国工厂</h3>
                </div>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <MapPinIcon class="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <p class="text-gray-600">泰国罗勇工业园XX路XX号</p>
                  </div>
                  <div class="flex items-start">
                    <PhoneIcon class="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <p class="text-gray-600">+66-XX-XXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">我们的位置</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div class="bg-white p-1 rounded-xl shadow-lg max-w-5xl mx-auto">
          <div class="bg-gray-100 h-[500px] rounded-lg overflow-hidden">
            <!-- Map container -->
            <img src="https://api.map.baidu.com/staticimage/v2?ak=E4805d16520de693a3fe707cdc962045&width=800&height=500&center=121.937234,30.877567&zoom=15&markers=121.937234,30.877567"
                 alt="公司地址地图"
                 class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, BuildingIcon } from 'lucide-vue-next'
</script>