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
                  <li>超过200种不同材料类型10000种零件的制造经验</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">材料</h3>
                <ul class="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Ductile Irons 球墨铸铁</li>
                  <li>Heat-resistant Cast & Ductile Irons 耐热铸铁&球墨铸铁</li>
                  <li>Wear Resistant Cast Irons & Ductile Irons 耐磨铸铁&球墨铸铁</li>
                  <li>Alloyed Carbon Steels 合金钢</li>
                  <li>Stainless Steels 不锈钢</li>
                  <li>Austenitic Corrosion Resisting Steels 奥氏体耐腐蚀钢</li>
                  <li>Austenitic-Ferritic Corrosion Resisting Steels 奥氏体-铁素体耐腐蚀钢</li>
                  <li>Ferritic Corrosion Resisting Steels 铁素体耐腐蚀钢</li>
                  <li>Martensitic Corrosion Resisting Steels 马氏体耐腐蚀钢</li>
                  <li>Precipitation Hardening Corrosion Resisting Steels 沉淀硬化抗腐蚀钢</li>
                  <li>Heat-Resistant Steels 耐热钢</li>
                  <li>Ferritic heat-resisting steels 铁素体耐热钢</li>
                  <li>Austenitic heat-resisting steels 奥氏体耐热钢</li>
                  <li>Austenitic-Ferritic heat-resisting steels 奥氏体-铁素体耐热钢</li>
                  <li>Nickel alloys 镍合金</li>
                  <li>Titanium Alloys 钛合金</li>
                  <li>Aluminium & Aluminium-Magnisium Alloys 铝&铝镁合金</li>

                </ul>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <img src="/src/assets/product1.jpg"
                   alt="单件小批量零件加工"
                   class="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <!-- Service 2 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/src/assets/product2.jpg"
                   alt="快速3D打印蜡件"
                   class="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">精密流体</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              <div class="service-details">
                <h3 class="section-subtitle">典型零件及特点</h3>
                <ul class="service-list">
                  <li>耐腐蚀，薄壁，高压零件</li>
                  <li>精密流体测量部件</li>
                  <li>高压管道连接件</li>
                </ul>
              </div>

              <div class="service-materials">
                <h3 class="section-subtitle">材料</h3>
                <ul class="service-list">
                  <li>碳钢</li>
                  <li>不锈钢（奥氏体、双相钢）</li>
                  <li>有色金属</li>
                </ul>
              </div>

              <div class="service-applications">
                <h3 class="section-subtitle">典型应用场景</h3>
                <ul class="service-list">
                  <li>高压细水雾系统</li>
                  <li>精密流体测量设备</li>
                  <li>流体控制系统</li>
                </ul>
              </div>

              <div class="service-cases">
                <h3 class="section-subtitle">成功案例</h3>
                <p>芬兰高压细水雾奥氏体不锈钢管道零件、德国精密仪器管道、阀体双相钢零件</p>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-2xl font-bold mb-4">工业设备备品备件</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>

              <div class="service-details">
                <h3 class="section-subtitle">典型零件及特点</h3>
                <ul class="service-list">
                  <li>耐腐蚀/耐磨铸件</li>
                  <li>复杂薄壁结构件</li>
                  <li>高精度机械零部件</li>
                </ul>
              </div>

              <div class="service-materials">
                <h3 class="section-subtitle">材料</h3>
                <ul class="service-list">
                  <li>碳钢</li>
                  <li>不锈钢</li>
                  <li>双相钢</li>
                  <li>有色金属</li>
                </ul>
              </div>

              <div class="service-applications">
                <h3 class="section-subtitle">典型应用场景</h3>
                <ul class="service-list">
                  <li>交通运输设备</li>
                  <li>电力输送系统</li>
                  <li>工业自动化设备</li>
                </ul>
              </div>

              <div class="service-cases">
                <h3 class="section-subtitle">成功案例</h3>
                <p>备品备件承压碳钢、不锈钢、高温合金，有色金属零件</p>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <img src="/src/assets/product3.jpg"
                   alt="精密铸造"
                   class="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <!-- Service 5 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="order-1 md:order-1">
              <img src="/src/assets/product4.jpg"
                   alt="流体输送与仪表"
                   class="rounded-lg shadow-lg w-full" />
            </div>
            <div class="order-2 md:order-1">
              <h2 class="text-2xl font-bold mb-4">医疗器械</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>
              <div class="service-details">
                <h3 class="section-subtitle">典型零件及特点</h3>
                <ul class="service-list">
                  <li>结构件</li>
                  <li>高精度医疗器械零部件</li>
                  <li>生物相容性部件</li>
                </ul>
              </div>

              <div class="service-materials">
                <h3 class="section-subtitle">材料</h3>
                <ul class="service-list">
                  <li>钴铬钼合金</li>
                  <li>医用级不锈钢</li>
                  <li>钛合金</li>
                </ul>
              </div>

              <div class="service-applications">
                <h3 class="section-subtitle">典型应用场景</h3>
                <ul class="service-list">
                  <li>骨科植入物</li>
                  <li>齿科器械</li>
                  <li>医疗设备结构件</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 6 -->
          <div class="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <h2 class="text-2xl font-bold mb-4">航空航天</h2>
              <div class="w-16 h-1 bg-blue-600 mb-6"></div>

              <div class="service-details">
                <h3 class="section-subtitle">典型零件及特点</h3>
                <ul class="service-list">
                  <li>复杂壳体类零件</li>
                  <li>特种合金铸件</li>
                  <li>高精度结构件</li>
                </ul>
              </div>

              <div class="service-materials">
                <h3 class="section-subtitle">材料</h3>
                <ul class="service-list">
                  <li>高温合金</li>
                  <li>钛合金</li>
                  <li>铝合金</li>
                </ul>
              </div>

              <div class="service-applications">
                <h3 class="section-subtitle">典型应用场景</h3>
                <ul class="service-list">
                  <li>备品备件</li>
                  <li>航空发动机部件</li>
                  <li>航天器结构件</li>
                </ul>
              </div>
            </div>
            <div>
              <img src="/src/assets/product5.jpg"
                   alt="工具柜及五金设备"
                   class="rounded-lg shadow-lg w-full" />
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
        <router-link to="/contact"
                     class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block">
          咨询定制服务
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for this page
</script>