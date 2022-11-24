<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroAboutQ />
      <TimelineQ />
      <FeaturesBlocksQ/>
      <FormSalespersonQ/>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import HeroAboutQ from '../partials/becomeSalespersonQ/HeroAboutQ.vue'
import TimelineQ from '../partials/becomeSalespersonQ/TimelineQ.vue'
import FeaturesBlocksQ from "../partials/becomeSalespersonQ/FeaturesBlocksQ.vue";
import FormSalespersonQ from "../partials/becomeSalespersonQ/FormSalespersonQ.vue";
import Footer from './../partials/Footer.vue'

export default {
  name: 'becomeSalesperson',
  components: {
    FormSalespersonQ,
    FeaturesBlocksQ,
    Header,
    PageIllustration,
    HeroAboutQ,
    TimelineQ,
    Footer,
  },
};
</script>