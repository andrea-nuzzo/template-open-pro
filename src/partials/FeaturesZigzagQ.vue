<template>
  <section class="bg-kit-tesserato">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">IL KIT DEL TESSERATO, SEMPRE GRATUITO</h1>
        </div>

        <!-- Items -->
        <div class="grid gap-20">
          <!-- 2nd item -->
          <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
            <!-- Image -->
            <div
              class="max-w-xl md:max-w-none md:col-span-7 mb-8 md:mb-0 md:rtl"
              data-aos="fade-up"
            >
              <img
                class="max-w-full mx-auto md:max-w-none h-auto"
                src="../images/kit-tessera.webp"
                width="540"
                height="405"
                alt="Features 02"
              />
            </div>
            <!-- Content -->
            <div
              class="max-w-xl sm:mx-auto md:max-w-none mx-auto md:col-span-5"
              data-aos="fade-left"
            >
              <div class="md:pl-4 lg:pl-12 xl:pl-16">
                <ul class="text-lg text-gray-200 -mb-2">
                  <li class="flex items-start mb-2">
                    1.
                    <span class="pl-2">
                      Tessera Quisviluppo.com, simbolo del tesseramento.</span
                    >
                  </li>
                  <li class="flex items-start mb-2">
                    2.
                    <span class="pl-2"
                      >Quickly Card Prepagata per il cashback.</span
                    >
                  </li>
                  <li class="flex items-start">
                    3.
                    <span class="pl-2"
                      >Display da banco, da posizionare nel punto più
                      visibile.</span
                    >
                  </li>
                  <li class="flex items-start">
                    4.
                    <span class="pl-2"
                      >Adesivo per vetrina, da applicare sulla vetrina
                      principale.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <router-link
                class="btn rounded-full text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                to="/subscription"
                >TESSERATI ORA</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesZigzagQ",
};
</script>
