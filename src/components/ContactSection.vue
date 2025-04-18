<template>
  <section id="contact"
           class="py-16">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Have questions or want to learn more about our services? Reach out to us!
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <form @submit.prevent="submitForm"
              class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName"
                     class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text"
                     id="firstName"
                     v-model="form.firstName"
                     class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                     required />
            </div>
            <div>
              <label for="lastName"
                     class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text"
                     id="lastName"
                     v-model="form.lastName"
                     class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                     required />
            </div>
          </div>

          <div>
            <label for="email"
                   class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email"
                   id="email"
                   v-model="form.email"
                   class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                   required />
          </div>

          <div>
            <label for="message"
                   class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message"
                      v-model="form.message"
                      rows="4"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required></textarea>
          </div>

          <button type="submit"
                  class="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md"
                  :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div v-if="formStatus"
               :class="formStatus.success ? 'text-green-600' : 'text-red-600'"
               class="mt-4">
            {{ formStatus.message }}
          </div>
        </form>
      </div>

      <div>
        <div class="bg-gray-50 p-6 rounded-lg h-full">
          <h3 class="text-xl font-semibold mb-4">Contact Information</h3>

          <div class="space-y-4">
            <div class="flex items-start">
              <MapPinIcon class="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h4 class="font-medium">Address</h4>
                <p class="text-gray-600">123 Business Street, Suite 100<br />Shanghai, China 200000</p>
              </div>
            </div>

            <div class="flex items-start">
              <PhoneIcon class="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h4 class="font-medium">Phone</h4>
                <p class="text-gray-600">+86 123 456 7890</p>
              </div>
            </div>

            <div class="flex items-start">
              <MailIcon class="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h4 class="font-medium">Email</h4>
                <p class="text-gray-600">info@hangmao.com</p>
              </div>
            </div>

            <div class="pt-4">
              <h4 class="font-medium mb-2">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#"
                   class="text-gray-600 hover:text-primary">
                  <FacebookIcon class="h-6 w-6" />
                </a>
                <a href="#"
                   class="text-gray-600 hover:text-primary">
                  <TwitterIcon class="h-6 w-6" />
                </a>
                <a href="#"
                   class="text-gray-600 hover:text-primary">
                  <InstagramIcon class="h-6 w-6" />
                </a>
                <a href="#"
                   class="text-gray-600 hover:text-primary">
                  <LinkedinIcon class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const formStatus = ref(null)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }

    formStatus.value = {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    }
  } catch (error) {
    formStatus.value = {
      success: false,
      message: 'There was an error sending your message. Please try again.',
    }
  } finally {
    isSubmitting.value = false

    // Clear status after 5 seconds
    setTimeout(() => {
      formStatus.value = null
    }, 5000)
  }
}
</script>