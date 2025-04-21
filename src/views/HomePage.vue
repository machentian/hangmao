<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">航懋机械(上海)有限公司</h1>
        <p class="hero-subtitle">高端制造与精密加工的综合性企业</p>
        <div class="hero-buttons">
          <router-link to="/services"
                       class="btn hero-btn">了解我们的服务</router-link>
          <router-link to="/contact"
                       class="btn hero-btn btn-outline">联系我们</router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about">
      <div class="container">
        <h2 class="section-title">公司简介</h2>
        <div class="about-content">
          <div class="about-text">
            <p>航懋机械（上海）有限公司是一家专注于高端制造与精密加工的综合性企业，依托先进的3D打印、精密铸造及机械加工技术，为全球客户提供从设计到量产的一站式解决方案。</p>
            <p>业务覆盖亚太地区，在中国、泰国设有生产基地，服务领域涵盖汽车、航空航天、医疗、能源等行业。</p>
          </div>
          <div class="about-image">
            <img src="/placeholder.svg?height=400&width=600"
                 alt="公司形象" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section services-overview">
      <div class="container">
        <h2 class="section-title">主营业务</h2>
        <div class="services-grid">
          <div class="service-card card">
            <div class="service-icon">
              <img src="/placeholder.svg?height=80&width=80"
                   alt="单件小批量零件加工" />
            </div>
            <h3 class="service-title">单件小批量零件加工</h3>
            <p class="service-description">针对非标定制零件，提供从设计到生产的快速响应服务</p>
            <router-link to="/services#small-batch"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <img src="/placeholder.svg?height=80&width=80"
                   alt="快速3D打印蜡件" />
            </div>
            <h3 class="service-title">快速3D打印蜡件</h3>
            <p class="service-description">高精度光固化（SLA）和选择性激光烧结（SLS）技术</p>
            <router-link to="/services#3d-printing"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <img src="/placeholder.svg?height=80&width=80"
                   alt="精密铸造" />
            </div>
            <h3 class="service-title">精密铸造</h3>
            <p class="service-description">熔模铸造、砂型铸造、压力铸造等工艺</p>
            <router-link to="/services#precision-casting"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <img src="/placeholder.svg?height=80&width=80"
                   alt="机械加工" />
            </div>
            <h3 class="service-title">机械加工</h3>
            <p class="service-description">CNC车削、铣削、磨削、电火花加工（EDM）</p>
            <router-link to="/services#machining"
                         class="service-link">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Highlights -->
    <section class="section tech-highlights">
      <div class="container">
        <h2 class="section-title">技术优势</h2>
        <div class="tech-content">
          <div class="tech-item">
            <div class="tech-icon">
              <img src="/placeholder.svg?height=60&width=60"
                   alt="精度" />
            </div>
            <div class="tech-info">
              <h3 class="tech-title">高精度加工</h3>
              <p class="tech-description">5轴联动加工中心，精度±0.01mm</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="tech-icon">
              <img src="/placeholder.svg?height=60&width=60"
                   alt="交付" />
            </div>
            <div class="tech-info">
              <h3 class="tech-title">快速交付</h3>
              <p class="tech-description">72小时快速交付周期</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="tech-icon">
              <img src="/placeholder.svg?height=60&width=60"
                   alt="检测" />
            </div>
            <div class="tech-info">
              <h3 class="tech-title">全流程监控</h3>
              <p class="tech-description">无损检测（X光、CT扫描）全流程监控</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Areas -->
    <section class="section application-areas">
      <div class="container">
        <h2 class="section-title">应用领域</h2>
        <div class="applications-grid">
          <div class="application-card card">
            <img src="/placeholder.svg?height=200&width=300"
                 alt="汽车行业"
                 class="application-image" />
            <h3 class="application-title">汽车行业</h3>
            <p class="application-description">发动机缸体、涡轮叶片等精密零件加工</p>
          </div>

          <div class="application-card card">
            <img src="/placeholder.svg?height=200&width=300"
                 alt="航空航天"
                 class="application-image" />
            <h3 class="application-title">航空航天</h3>
            <p class="application-description">卫星结构件、火箭发动机部件制造</p>
          </div>

          <div class="application-card card">
            <img src="/placeholder.svg?height=200&width=300"
                 alt="医疗领域"
                 class="application-image" />
            <h3 class="application-title">医疗领域</h3>
            <p class="application-description">人工关节、手术器械等高精度零件生产</p>
          </div>

          <div class="application-card card">
            <img src="/placeholder.svg?height=200&width=300"
                 alt="能源行业"
                 class="application-image" />
            <h3 class="application-title">能源行业</h3>
            <p class="application-description">核电站阀门、风力发电机部件加工</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">需要精密加工解决方案？</h2>
          <p class="cta-text">我们的专业团队随时为您提供支持</p>
          <router-link to="/contact"
                       class="btn cta-btn">立即联系我们</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
// No additional script needed for this component
</script>
  
  <style scoped>
.hero {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/placeholder.svg?height=1080&width=1920');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.hero-btn {
  min-width: 150px;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  text-align: center;
}

.service-icon {
  margin-bottom: 20px;
}

.service-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-dark);
}

.service-description {
  margin-bottom: 20px;
  color: var(--secondary-dark);
}

.service-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  position: relative;
}

.service-link::after {
  content: '→';
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.service-link:hover::after {
  transform: translateX(5px);
}

.tech-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.tech-item {
  display: flex;
  align-items: center;
  background-color: var(--surface);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  margin-right: 20px;
}

.tech-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--primary-dark);
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.application-card {
  overflow: hidden;
}

.application-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin: -24px -24px 20px -24px;
  width: calc(100% + 48px);
}

.application-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--primary-dark);
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .about-content {
    flex-direction: column;
  }

  .tech-item {
    flex-direction: column;
    text-align: center;
  }

  .tech-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .cta-title {
    font-size: 2rem;
  }
}
</style>