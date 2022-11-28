<template>
  <div>
    <h1>{{destination.name}}</h1>
    <!--Component CaseStudies-->
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class=" md:py-20 border-t border-gray-800">

          <!-- Section header -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2">Servizi Correlati</h2>
          </div>

          <!-- Articles -->
          <div class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

            <!-- article -->
            <article class="flex flex-col h-full " data-aos="fade-up" v-for="service in destination.correlati" :key="service.slug">
              <div class="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 class="h4 mb-2">
                  <div class="hover:text-purple-600 text-gray-900 transition duration-150 ease-in-out capitalize">{{service.name}}</div>
                </h3>
                <p class="text-lg text-gray-400 grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua.</p>
                <div>
                  <router-link class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" :to="`${service.slug}`">
                    <router-link :to="`/${service.slug}`" class="text-sm">Scopri</router-link>
                    <svg class="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
  </div>



</template>

<script>
import sourceData from '../data/servizi.json';

export default {
  name: "ServizioQ.vue",

  computed: {
    destinationSlug() {
      return this.$route.params.slug;
    },
    destination() {
      return sourceData.servizi.find(servizi => servizi.slug === this.destinationSlug);
    },
  },
}
</script>

<style scoped>

</style>