<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">3 vantaggi per Te</h2>
          <p class="text-xl text-gray-400">fino al 31/12/2022.</p>
        </div>

        <div class="m-7">
          <h3 class="h3 w-full mb-7 text-center">Per le attività</h3>
          <!-- Items -->
          <div
            class="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            <!-- 1st item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  class="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  class="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  stroke-linecap="square"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  class="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  stroke-linecap="square"
                  stroke-width="2"
                />
              </svg>
              <h4 class="h4 mb-2 text-center">
                Valutazione del merito creditizio
              </h4>
              <p class="text-lg text-gray-400 text-center">
                gratuita, fruibile entro il 01/03/23
              </p>
            </div>

            <!-- 2nd item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  class="stroke-current text-purple-100"
                  stroke-width="2"
                  stroke-linecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  class="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
              <h4 class="h4 mb-2 text-center">SPID gratuito</h4>
              <p class="text-lg text-gray-400 text-center">
                siamo gestori di identità digitali
              </p>
            </div>

            <!-- 3rd item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  class="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  stroke-linecap="square"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <ellipse
                    class="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    class="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    class="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 class="h4 mb-2 text-center">
                Tesseramento a 100€ + IVA / anno
              </h4>
              <p class="text-lg text-gray-400 text-center">
                prezzo standard 300€ + IVA/anno
              </p>
            </div>
          </div>
          <div
            class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-10"
          >
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0"
                >{{ctaText1}}</a
              >
            </div>
          </div>
        </div>
        <div class="m-7 pt-5">
          <h3 class="h3 w-full mt-10 mb-7 text-center">
            Per i professionisti.
          </h3>
          <div
            class="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            <!-- 1st item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  class="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  class="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  stroke-linecap="square"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  class="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  stroke-linecap="square"
                  stroke-width="2"
                />
              </svg>
              <h4 class="h4 mb-2 text-center">
                10 visure del merito creditizio
              </h4>
              <p class="text-lg text-gray-400 text-center">
                gratuite per i tuoi clienti
              </p>
            </div>

            <!-- 2nd item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  class="stroke-current text-purple-100"
                  stroke-width="2"
                  stroke-linecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  class="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
              <h4 class="h4 mb-2 text-center">
                Profilo in evidenza sui nostri media
              </h4>
              <p class="text-lg text-gray-400 text-center">per tutto l’anno</p>
            </div>

            <!-- 3rd item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  class="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  stroke-linecap="square"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <ellipse
                    class="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    class="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    class="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 class="h4 mb-2 text-center">
                Tesseramento a 100€ + IVA / anno
              </h4>
              <p class="text-lg text-gray-400 text-center">
                prezzo standard 300€ + IVA/anno
              </p>
            </div>
          </div>
          <div
            class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center m-10"
          >
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0"
                >{{ctaText2}}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesBlocksQ",
  props: ['ctaText1', 'ctaText2']
};
</script>
