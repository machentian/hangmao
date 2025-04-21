<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">航懋机械(上海)有限公司</h1>
        <p class="hero-subtitle">专注于多品种小批量零件一站式交付服务的供应商</p>
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

            <p style="font-size: 20px; font-weight: bold;"> 航懋机械（上海）有限公司</p>
            <p>成立时间：2014年 </p>
            <p>定位：专注于高精度、多材质、中、小批量零件的生产制造。
            </p>
            <p>服务领域：流体动力、电力输送、交通运输、航空航天、医疗器械、新能源等行业领域。

            </p>
            <p>核心能力：以柔性制造技术和数字化工艺为核心，实现“小批量、快交付、零缺陷”的服务。

            </p>
          </div>
          <div class="about-image">
            <img src="/src/assets/car.jpg?height=600&width=600"
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
              <img src="/src/assets/car2.jpg"
                   alt="单件小批量零件加工" />
            </div>
            <h3 class="service-title">单件小批量零件加工</h3>
            <p class="service-description">针对非标定制零件，提供从设计到生产的快速响应服务</p>
            <router-link to="/services#small-batch"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <img src="/src/assets/product5.jpg"
                   alt="快速3D打印蜡件" />
            </div>
            <h3 class="service-title">快速3D打印蜡件</h3>
            <p class="service-description">高精度光固化（SLA）和选择性激光烧结（SLS）技术</p>
            <router-link to="/services#3d-printing"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <img src="/src/assets/product3.jpg"
                   alt="精密铸造" />
            </div>
            <h3 class="service-title">精密铸造</h3>
            <p class="service-description">熔模铸造、砂型铸造、压力铸造等工艺</p>
            <router-link to="/services#precision-casting"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <img src="/src/assets/product4.jpg"
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
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-settings">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12"
                        cy="12"
                        r="3" />
              </svg>
            </div>
            <div class="tech-info">
              <h3 class="tech-title">柔性化生产能力</h3>
              <p class="tech-description">采用失蜡3D打印技术（无模成型），支持单件至百件级订单快速交付</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-cpu">
                <rect x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2" />
                <rect x="9"
                      y="9"
                      width="6"
                      height="6" />
                <path d="M15 2v2" />
                <path d="M15 20v2" />
                <path d="M2 15h2" />
                <path d="M2 9h2" />
                <path d="M20 15h2" />
                <path d="M20 9h2" />
                <path d="M9 2v2" />
                <path d="M9 20v2" />
              </svg>
            </div>
            <div class="tech-info">
              <h3 class="tech-title">数字化工艺闭环</h3>
              <p class="tech-description">通过ProCAST/Magma软件预判铸造缺陷，减少试模次数50%以上</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-flask-conical">
                <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                <path d="M8.5 2h7" />
                <path d="M7 16h10" />
              </svg>
            </div>
            <div class="tech-info">
              <h3 class="tech-title">材料与工艺创新</h3>
              <p class="tech-description">覆盖铸铁、铝合金、碳钢、不锈钢、钛合金、高温合金等多种材质</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Areas -->
    <section class="section application-areas">
      <div class="container">
        <h2 class="section-title">业务范围</h2>
        <div class="services-grid">
          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-droplets">
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
              </svg>
            </div>
            <h3 class="service-title">精密流体</h3>
            <p class="service-description">耐腐蚀，薄壁，高压零件，材料包括碳钢，不锈钢，双相钢，有色金属等</p>
            <router-link to="/services#fluid"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-cog">
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M12 2v2" />
                <path d="M12 22v-2" />
                <path d="m17 20.66-1-1.73" />
                <path d="M11 10.27 7 3.34" />
                <path d="m20.66 17-1.73-1" />
                <path d="m3.34 7 1.73 1" />
                <path d="M14 12h8" />
                <path d="M2 12h2" />
                <path d="m20.66 7-1.73 1" />
                <path d="m3.34 17 1.73-1" />
                <path d="m17 3.34-1 1.73" />
                <path d="m11 13.73-4 6.93" />
              </svg>
            </div>
            <h3 class="service-title">工业设备备品备件</h3>
            <p class="service-description">耐腐蚀/耐磨铸件、复杂薄壁结构件，适用于交通运输、电力输送等领域</p>
            <router-link to="/services#industrial"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-heart-pulse">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M3.22 12H9.5l.5-1 2 4 .5-1h6.78" />
              </svg>
            </div>
            <h3 class="service-title">医疗器械</h3>
            <p class="service-description">钴铬钼合金结构件，应用于骨科植入物、齿科器械等医疗领域</p>
            <router-link to="/services#medical"
                         class="service-link">了解更多</router-link>
          </div>

          <div class="service-card card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="40"
                   height="40"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="lucide lucide-plane">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </div>
            <h3 class="service-title">航空航天</h3>
            <p class="service-description">复杂壳体类零件，特种合金铸件高温合金、钛合金、铝合金，用于备品备件</p>
            <router-link to="/services#aerospace"
                         class="service-link">了解更多</router-link>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/company.jpg');
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