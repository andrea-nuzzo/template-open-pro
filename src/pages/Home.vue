<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />
    <AboutHeroTidy />

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
      <HeroHomeQ class="bg-no-repeat bg-cover bg-pack-train"/>
      <!-- Servizi in evidenza -->
      <div class="text-center mt-10 mb-10" data-aos-id-target>
        <!-- Servizi in Evidenza -->
        <h1 class="h1 text-center" data-aos="fade-up">Servizi in evidenza</h1>
        <div
          class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        >
          <div class="mx-auto p-10">
            <div
              class="m-10"
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
              class="m-10"
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
              class="m-10"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">
                <span class="text-pink-500">.</span> Bandi, fondi, finanziamenti
                e crowdfunding
              </h4>
              <p class="text-lg text-gray-400">
                Sono un reale accesso al credito. Ricerca bandi e fondi con un
                clic e il modulo di adesione si compila in automatico. Zero
                commissioni e zero spese. Ora puoi davvero farcela.
              </p>
            </div>
            <div
              class="m-10"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">
                <span class="text-pink-500">.</span> Apertura nuova attività e
                studi di fattibilità
              </h4>
              <p class="text-lg text-gray-400">
                Servizi veloci e indispensabili per una nuova apertura. Annulla
                ogni rischio e usa la nostra innovazione per avere successo.
                Abbiamo creato dei pacchetti molto performanti.
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

      <ProcessQ class="mt-10" />

      <!-- Chi può tesserarsi -->
      <div class="text-center mt-10 mb-10" data-aos-id-target>
        <div
          class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        >
          <div class="mx-auto">
            <div
              class="mt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">Chi può tesserarsi?</h4>
              <p class="text-lg text-gray-400 m-6">
                Professionisti, micro imprese, aziende e privati con intenzione
                di aprire un'attività.
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div data-aos="fade-up" data-aos-delay="400">
            <router-link
              to="/tesserati"
              class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
              href="#0"
              >TESSERATI ORA</router-link
            >
          </div>
        </div>
      </div>

      <!-- Tre vantaggi per te -->
      <FeaturesBlocksQ ctaText1="MAGGIORI INFO" ctaText2="MAGGIORI INFO" />

      <!-- Riportare persone a comprare nei negozi -->
      <div
        class="relative pb-10 md:pt-40 md:pb-16 bg-no-repeat bg-cover bg-riportare"
      >
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="fade-up">
            Come riportare le persone a comprare nei negozi.
          </h1>
          <p
            class="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Rendendo le economie locali più competitive e superando i benefici
            dati dai colossi delle vendite online.
          </p>
          <p
            class="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Abbiamo creato nuovi strumenti web e stravolto tutto.
          </p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0"
                >FACCIAMO RETE PER VINCERE</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Blog -->
      <div class="text-center mt-10 mb-10" data-aos-id-target>
        <div
          class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        >
          <div class="mx-auto">
            <div
              class="mt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-target]"
            >
              <h4 class="h4 mb-2">Leggi Quiblog.it</h4>
              <p class="text-lg text-gray-400 m-6">
                Qui puoi anche richiedere di approfondire argomenti e accedere a
                contenuti premium gratuiti.
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
              href="#0"
              >VAI AL BLOG</a
            >
          </div>
        </div>
        <BlogListQ />
      </div>

      <NewsletterQ />

      <!-- <FeaturesHome /> -->
      <!-- <Tabs /> -->
      <!-- <Target /> -->
      <!-- <News /> -->
      <!-- <Newsletter /> -->
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "./../partials/PageIllustration.vue";
import HeroHomeQ from "./../partials/HeroHomeQ.vue";
import ProcessQ from "./../partials/ProcessQ.vue";
import FeaturesHome from "./../partials/FeaturesHome.vue";
import Tabs from "./../partials/Tabs.vue";
import Target from "./../partials/Target.vue";
import News from "./../partials/News.vue";
import Newsletter from "./../partials/Newsletter.vue";
import FeaturesBlocksQ from "./../partials/FeaturesBlocksQ.vue";
import BlogListQ from "./../partials/BlogListQ.vue";
import NewsletterQ from "./../partials/NewsletterQ.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    PageIllustration,
    HeroHomeQ,
    ProcessQ,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    FeaturesBlocksQ,
    BlogListQ,
    NewsletterQ,
    Footer,
  },
};
</script>
