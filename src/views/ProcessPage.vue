<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">服务流程</h1>
        <p class="text-xl max-w-3xl mx-auto">
          我们提供从需求沟通到交付服务的全流程支持，确保项目顺利完成
        </p>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Vertical Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

            <!-- Process Steps -->
            <div class="space-y-12">
              <div v-for="(step, index) in processSteps"
                   :key="step.title"
                   class="relative">
                <div class="flex items-center justify-center mb-6">
                  <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                    {{ index + 1 }}
                  </div>
                </div>

                <div :class="[
                  'ml-auto w-5/12 p-6 bg-white rounded-lg shadow-lg',
                  index % 2 === 0 ? 'mr-auto ml-0' : ''
                ]">
                  <div class="flex flex-col md:flex-row items-start gap-6">
                    <div class="md:w-1/3">
                      <img :src="placeholderImage"
                           :alt="step.title"
                           class="rounded-lg w-full" />
                    </div>
                    <div class="md:w-2/3">
                      <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                      <p class="text-gray-700 mb-4">{{ step.description }}</p>
                      <div class="bg-gray-100 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">关键点</h4>
                        <ul class="list-disc pl-5 space-y-1 text-gray-700">
                          <li v-for="(point, pointIndex) in step.keyPoints"
                              :key="pointIndex">
                            {{ point }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">质量保证</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p class="text-lg max-w-3xl mx-auto text-gray-700">
            我们在整个服务流程中实施严格的质量控制措施，确保产品质量和客户满意度
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <ClipboardCheckIcon class="h-12 w-12" />
            </div>
            <h3 class="text-xl font-bold mb-2">质量管理体系</h3>
            <p class="text-gray-700">
              我们通过ISO 9001:2015质量管理体系认证，建立了完善的质量控制流程和标准。
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <SearchIcon class="h-12 w-12" />
            </div>
            <h3 class="text-xl font-bold mb-2">全流程检测</h3>
            <p class="text-gray-700">
              从原材料到成品，每个环节都进行严格检测，确保产品符合设计要求和质量标准。
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <RefreshCwIcon class="h-12 w-12" />
            </div>
            <h3 class="text-xl font-bold mb-2">持续改进</h3>
            <p class="text-gray-700">
              我们不断收集客户反馈，持续改进生产工艺和服务流程，提高产品质量和客户满意度。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Testimonials -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">客户评价</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p class="text-lg max-w-3xl mx-auto text-gray-700">
            听听我们的客户怎么说
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials"
               :key="index"
               class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex text-yellow-400 mb-4">
              <StarIcon v-for="i in 5"
                        :key="i"
                        class="h-5 w-5" />
            </div>
            <p class="text-gray-700 mb-6 italic">{{ testimonial.content }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 class="font-bold">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">准备开始您的项目？</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          联系我们，了解我们如何为您的业务提供定制化的精密制造解决方案。
        </p>
        <router-link to="/contact"
                     class="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block">
          立即联系
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ClipboardCheckIcon, SearchIcon, RefreshCwIcon, StarIcon } from 'lucide-vue-next'
import placeholderImage from '../assets/placeholder.svg'

const processSteps = [
  {
    title: '需求沟通',
    description: '深入了解客户需求，提供专业建议。',
    keyPoints: ['技术要求确认', '材料选型建议', '加工工艺讨论', '成本预算评估'],
  },
  {
    title: '方案制定',
    description: '根据需求制定详细的加工方案。',
    keyPoints: ['工艺路线规划', '加工参数设定', '质量控制计划', '交期安排确定'],
  },
  {
    title: '样品制作',
    description: '制作样品并进行验证。',
    keyPoints: ['首件加工制作', '尺寸精度检测', '性能指标测试', '样品确认审核'],
  },
  {
    title: '批量生产',
    description: '按计划进行规模化生产。',
    keyPoints: ['生产计划执行', '过程质量控制', '生产进度跟踪', '异常情况处理'],
  },
  {
    title: '品质检验',
    description: '严格的质量检验流程。',
    keyPoints: ['尺寸检测', '外观检查', '性能测试', '质量报告生成'],
  },
  {
    title: '交付服务',
    description: '及时交付并提供后续支持。',
    keyPoints: ['包装防护', '物流配送', '技术支持', '售后服务'],
  },
]

const testimonials = [
  {
    content: '航懋机城为我们提供了高质量的发动机部件，不仅满足了我们的技术要求，而且交付及时，服务专业。',
    name: '张先生',
    position: '采购经理',
    company: '某汽车制造商',
  },
  {
    content: '我们与航懋机城合作开发航空结构件，他们的技术实力和质量控制给我们留下了深刻印象。',
    name: '李女士',
    position: '技术总监',
    company: '某航空公司',
  },
  {
    content: '航懋机城的3D打印技术帮助我们大幅缩短了产品开发周期，提高了我们的市场竞争力。',
    name: '王先生',
    position: '研发主管',
    company: '某医疗器械公司',
  },
]
</script>

<style scoped>
.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg?height=600&width=1920');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 150px 0 80px;
  margin-bottom: 40px;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.page-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.overview-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.overview-text {
  flex: 1;
}

.overview-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--secondary-dark);
}

.overview-image {
  flex: 1;
}

.overview-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.steps-timeline {
  position: relative;
  max-width: 900px;
  margin: 60px auto 0;
}

.steps-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50px;
  width: 4px;
  background-color: var(--primary);
  transform: translateX(-50%);
}

.step-item {
  position: relative;
  padding-left: 100px;
  margin-bottom: 60px;
}

.step-item:last-child {
  margin-bottom: 0;
}

.step-number {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 1;
}

.step-content {
  position: relative;
  padding: 30px;
}

.step-icon {
  margin-bottom: 20px;
  color: var(--primary);
}

.step-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-dark);
}

.step-description {
  margin-bottom: 20px;
  color: var(--secondary-dark);
  line-height: 1.6;
}

.step-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.feature-item {
  display: flex;
  align-items: center;
}

.feature-icon {
  color: var(--primary);
  font-weight: bold;
  margin-right: 10px;
}

.bg-light {
  background-color: #f9f9f9;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.benefit-card {
  text-align: center;
  padding: 40px 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.benefit-icon {
  margin-bottom: 20px;
  color: var(--primary);
}

.benefit-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-dark);
}

.benefit-description {
  color: var(--secondary-dark);
  line-height: 1.6;
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.testimonial-card {
  padding: 30px;
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 20px;
  color: var(--secondary-dark);
  line-height: 1.8;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  font-size: 4rem;
  color: rgba(26, 35, 126, 0.1);
  position: absolute;
  top: -20px;
  left: -15px;
  font-family: serif;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  margin-right: 15px;
}

.author-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--primary-dark);
}

.author-company {
  font-size: 0.9rem;
  color: var(--secondary);
}

.cta {
  background-color: var(--primary-dark);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btn {
  background-color: white;
  color: var(--primary-dark);
  font-size: 1.1rem;
  padding: 15px 30px;
}

.cta-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 992px) {
  .overview-content {
    flex-direction: column;
    gap: 30px;
  }

  .steps-timeline::before {
    left: 30px;
  }

  .step-item {
    padding-left: 60px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .testimonials-slider {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .step-features {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 2rem;
  }
}
</style>