<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroHomeQ />
      <!-- Servizi in evidenza -->
      <div class="text-center mt-10 mb-10" data-aos-id-target>
        <!-- Servizi in Evidenza -->
        <h1 class="h1 text-center" data-aos="fade-up">Servizi in evidenza</h1>
        <div
          class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        >
          <div class="md:pl-4 lg:pl-12 xl:pl-16">
            <div
              class="mt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">
                <span class="text-pink-500">.</span> Valutazione del merito
                creditizio
              </h4>
              <p class="text-lg text-gray-400">
                Indica se è il momento adatto per richiedere finanziamenti
                bancari. Con esito negativo, possiamo risollevare la tua
                situazione. Puoi richiedere la tua visura solo con un clic.
              </p>
            </div>
            <div
              class="mt-6"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">
                <span class="text-pink-500">.</span> Cancellazione della
                sofferenza bancaria
              </h4>
              <p class="text-lg text-gray-400">
                Con la sofferenza la tua impresa non è in grado di rimborsare
                uno o più debiti. Inoltre, scatta la segnalazione alla Centrale
                Rischi. Siamo esperti nella risoluzione totale di ogni
                situazione.
              </p>
            </div>
            <div
              class="mt-6"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">
                <span class="text-pink-500">.</span> Bandi, fondi, finanziamenti
                e crowdfunding
              </h4>
              <p class="text-lg text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
            href="#0"
            >SCOPRI TUTTI I SERVIZI</a
          >
        </div>
      </div>

      <!-- <Process />
      <FeaturesHome />
      <Tabs />
      <Target />
      <News />
      <Newsletter /> -->
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "./../partials/PageIllustration.vue";
import HeroHomeQ from "./../partials/HeroHomeQ.vue";
import Process from "./../partials/Process.vue";
import FeaturesHome from "./../partials/FeaturesHome.vue";
import Tabs from "./../partials/Tabs.vue";
import Target from "./../partials/Target.vue";
import News from "./../partials/News.vue";
import Newsletter from "./../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    PageIllustration,
    HeroHomeQ,
    Process,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    Footer,
  },
};
</script>
