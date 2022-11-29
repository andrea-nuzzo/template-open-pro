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
      <HeroAboutQ :title="'FACCIAMO RETE'" />
      <div class="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="fade-up">
            L’economia locale sta morendo. Qui c’è la soluzione.
          </h1>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I big mondiali dell’e-commerce continuano a costruire nuovi depositi
            in giro per l’Italia. Sai perchè lo fanno? Per arrivare a consegnare
            in tempo reale i prodotti e avere sempre più il monopolio delle
            vendite al dettaglio. I clienti degli e-commerce, in questo modo,
            sono sempre più soddisfatti senza rendersi conto però, che così
            facendo, si sta annientando l’economia locale.
          </p>
        </div>
      </div>
      <div class="relative pb-12 md:pb-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <section class="flex justify-start pb-10 md:pb-14">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              class="inline-flex items-center relative md:right-2 lg:right-7 justify-center py-3 px-4 text-sm font-semibold w-8 h-8 text-white bg-black rounded-full"
            >
              1
            </div>
            <div
              class="flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 class="h4 mb-5">
                Come riportare le persone a comprare nei negozi
              </h4>
              <p class="text-left">
                Come riportare le persone a comprare nei negozi. Rendendo le
                economie locali molto più competitive e capaci di superare i
                benefici ottenuti acquistando dai colossi delle vendite online.
                Abbiamo creato strumenti web ad hoc e stravolto il modo di
                vendere, spedire, gestire e fare promozione. Diamo, anche,
                grande importanza alle competenze professionali.
              </p>
            </div>
          </section>
          <section class="flex justify-end pb-10 md:pb-14">
            <div
              class="flex flex-col items-end"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 class="h4 mb-5">
                Nasce la soluzione perfetta: Quisviluppo.com
              </h4>
              <p class="text-right">
                Sette piattaforme web sono la soluzione completa per ridare
                potere alle economie locali. Sono la base della nostra Rete di
                sviluppo economico nazionale. Ogni singolo negozio, azienda,
                artigiano e professionista sono le realtà vere che faranno da
                carburante alla Rivoluzione. Perché di questo si tratta.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              class="inline-flex items-center relative md:left-2 lg:left-7 justify-center py-3 px-4 text-sm font-semibold w-8 h-8 text-white bg-black rounded-full"
            >
              2
            </div>
          </section>
          <section class="flex justify-start">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              class="inline-flex items-center relative md:right-2 lg:right-7 justify-center py-3 px-4 text-sm font-semibold w-8 h-8 text-white bg-black rounded-full"
            >
              3
            </div>
            <div
              class="flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 class="h4 mb-5">
                Rete di sviluppo economico nazionale. Uniamoci e facciamo rete
              </h4>
              <p class="text-left">
                A cosa serve la Rete? A valorizzare la nostra cultura, i valori
                sani dell’impegno, dell’innovazione e della voglia di
                migliorarsi. Noi di Quisviluppo.com sappiamo come fare, sappiamo
                come vincere. Nei nostri canali social usiamo l’#eroepernoi.
                Questa è la nostra arma vincente, sei Tu. Siamo tutti Noi.
              </p>
            </div>
          </section>
        </div>
        <div
          class="text-center pt-20 lg:pt-30 pb-12 md:pb-16"
        >
       
          <TabsQ />
        </div>
      </div>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAboutQ from "../partials/becomeSalespersonQ/HeroAboutQ.vue";
import TabsQ from "../partials/TabsQ.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "FacciamoReteQ",
  components: {
    Header,
    PageIllustration,
    HeroAboutQ,
    Footer,
    TabsQ,
  },
};
</script>
