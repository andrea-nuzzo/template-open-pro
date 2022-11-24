<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Ogni singolo rappresentante per noi è importante</h2>
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          <!-- 1th item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <svg class="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-purple-600" width="64" height="64" rx="32" />
              <g stroke-linecap="square" stroke-width="2" fill="none" fill-rule="evenodd">
                <path class="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                <path class="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
              </g>
            </svg>
            <h4 class="h4 mb-2">Opportunità</h4>
            <p class="text-lg text-gray-400 text-center">In base a risultati meritocratici sarà possibile diventare Manager di Area ricevendo un fisso mensile, tablet e telefono aziendale.
            </p>
          </div>

          <!-- 2th item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <svg class="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-purple-600" width="64" height="64" rx="32" />
              <g transform="translate(22 21)" stroke-linecap="square" stroke-width="2" fill="none" fill-rule="evenodd">
                <path class="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                <circle class="stroke-current text-purple-300" cx="13" cy="9" r="3" />
              </g>
            </svg>
            <h4 class="h4 mb-2">Formazione</h4>
            <p class="text-lg text-gray-400 text-center">Verrà fornita attraverso video, documenti in pdf e video call.</p>
          </div>

          <!-- 3nd item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <svg class="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle class="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path class="stroke-current text-purple-100" stroke-width="2" stroke-linecap="square" d="M21 23h22v18H21z" fill="none" fill-rule="evenodd" />
              <path class="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" stroke-width="2" stroke-linecap="square" />
            </svg>
            <h4 class="h4 mb-2">Selezione</h4>
            <p class="text-lg text-gray-400 text-center">Solo dopo l’avvenuta iscrizione tramite il form, ogni singolo soggetto verrà contattato telefonicamente per valutare l’effettiva collaborazione.</p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesBlocks'
}
</script>