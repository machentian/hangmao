import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import TechnologyPage from '../views/TechnologyPage.vue'
import ApplicationsPage from '../views/ApplicationsPage.vue'
import ProcessPage from '../views/ProcessPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesPage
    },
    {
        path: '/technology',
        name: 'Technology',
        component: TechnologyPage
    },
    {
        path: '/applications',
        name: 'Applications',
        component: ApplicationsPage
    },
    {
        path: '/process',
        name: 'Process',
        component: ProcessPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router