<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">主营业务</h1>
        <p class="text-xl max-w-3xl mx-auto">
          我们提供全方位的精密制造服务，满足客户从设计到量产的各种需求
        </p>
      </div>
    </section>

    <!-- Services List -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 gap-16">
          <!-- Service 1 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-2xl font-bold mb-4">单件小批量零件加工</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">服务内容</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>针对非标定制零件，提供从设计到生产的快速响应服务</li>
                  <li>材料涵盖金属（铝合金、不锈钢、钛合金）、工程塑料等</li>
                  <li>应用场景：研发样件、设备维修、工业测试等</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-2">技术优势</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>5轴联动加工中心，精度±0.01mm</li>
                  <li>72小时快速交付周期</li>
                </ul>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <img src="/placeholder.svg?height=400&width=600&text=单件小批量零件加工" alt="单件小批量零件加工" class="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <!-- Service 2 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/placeholder.svg?height=400&width=600&text=快速3D打印蜡件" alt="快速3D打印蜡件" class="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">快速3D打印蜡件</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">服务内容</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>高精度光固化（SLA）和选择性激光烧结（SLS）技术</li>
                  <li>支持复杂结构、薄壁件及多孔结构蜡模生产</li>
                  <li>应用场景：珠宝铸造、精密模具、医疗植入物原型</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-2">技术优势</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>表面粗糙度Ra≤3.2μm</li>
                  <li>材料兼容性：蜡基、树脂基</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-2xl font-bold mb-4">精密铸造</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">服务内容</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>熔模铸造、砂型铸造、压力铸造等工艺</li>
                  <li>产品范围：汽车发动机部件、航空航天结构件、医疗器械等</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-2">技术优势</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>无损检测（X光、CT扫描）全流程监控</li>
                  <li>材料性能：抗拉强度≥800MPa，延伸率≥10%</li>
                </ul>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <img src="/placeholder.svg?height=400&width=600&text=精密铸造" alt="精密铸造" class="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <!-- Service 4 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/placeholder.svg?height=400&width=600&text=机械加工" alt="机械加工" class="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">机械加工</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">服务内容</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>CNC车削、铣削、磨削、电火花加工（EDM）</li>
                  <li>复杂曲面、螺纹、齿轮等精密加工</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-2">技术优势</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>德国DMG MORI、日本MAZAK设备</li>
                  <li>表面粗糙度Ra≤0.4μm</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 5 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-2xl font-bold mb-4">流体输送、仪表仪器、测量设备</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">服务内容</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>流体管道系统设计、阀门定制、泵体加工</li>
                  <li>温度/压力传感器、流量计、分析仪器等仪表生产</li>
                  <li>三坐标测量仪、激光扫描仪等测量设备开发</li>
                </ul>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <img src="/placeholder.svg?height=400&width=600&text=流体输送与仪表" alt="流体输送与仪表" class="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <!-- Service 6 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/placeholder.svg?height=400&width=600&text=工具柜及五金设备" alt="工具柜及五金设备" class="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">工具柜及五金设备</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">服务内容</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>工具柜定制：模块化设计，满足不同行业存储需求</li>
                  <li>五金设备：电动工具、手动工具、气动工具等全品类供应</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">需要定制服务？</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          我们可以根据您的具体需求提供定制化解决方案，请联系我们的技术团队。
        </p>
        <router-link to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block">
          咨询定制服务
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for this page
</script>