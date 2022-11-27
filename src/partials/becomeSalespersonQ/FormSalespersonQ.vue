<template>
  <section class="relative max-w-6xl mx-auto px-4 sm:px-6">
    <div class="py-12 md:py-20 border-t border-gray-800 relative">

        <!-- Page header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="fade-up">Candidati ora</h1>
          <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Nella tua Area Riservata potrai tenere sotto controllo tutti i clienti acquisiti e disporre di reportistica, in qualunque momento.</p>
        </div>

        <!-- Contact form -->
        <form class="max-w-xl mx-auto">

          <!-- CODICE FISCALE-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Codice Fiscale <span class="text-red-600">*</span></label>
              <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="Enter your email address" required />
            </div>
          </div>

          <!-- FIRST AND LAST NAME-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <!-- FIRST NAME-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="first-name">Nome<span class="text-red-600">*</span></label>
              <input id="first-name" type="text" class="form-input w-full text-gray-300 border-red-500 focus:border-red-500" placeholder="Enter your first name" required />
              <p class="text-red-500 text-sm mt-2">This field is required</p>
            </div>
            <!-- LAST NAME-->
            <div class="w-full md:w-1/2 px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="last-name">Cognome<span class="text-red-600">*</span></label>
              <input id="last-name" type="text" class="form-input w-full text-gray-300" placeholder="Enter your last name" required />
            </div>
          </div>

          <!-- EMAIL-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
              <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="Enter your email address" required />
            </div>
          </div>

          <!-- PASSWORD-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <!-- PASSWORD-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="first-name">Password <span class="text-red-600">*</span></label>
              <input id="first-name" type="text" class="form-input w-full text-gray-300 border-red-500 focus:border-red-500" placeholder="Enter your first name" required />
              <p class="text-red-500 text-sm mt-2">This field is required</p>
            </div>
            <!-- PASSWORD CONFIRMATION-->
            <div class="w-full md:w-1/2 px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="last-name">Conferma Password <span class="text-red-600">*</span></label>
              <input id="last-name" type="text" class="form-input w-full text-gray-300" placeholder="Enter your last name" required />
            </div>
          </div>

          <!-- TELEFONO-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Telefono<span class="text-red-600">*</span></label>
              <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="Enter your email address" required />
            </div>
          </div>

          <!-- Customer sector toggle -->
          <div class="flex justify-start mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="inline-flex items-center">
              <div class="text-gray-500 font-medium mr-3">Portafoglio Clienti</div>
              <div class="form-switch">
                <input type="checkbox" name="pricing-toggle" id="pricing-toggle" class="sr-only" v-model="value" />
                <label class="bg-gray-600" for="pricing-toggle">
                  <span class="bg-gray-100" aria-hidden="true"></span>
                  <span class="sr-only">Enable to see yearly prices</span>
                </label>
              </div>
            </div>
          </div>

          <!-- SETTORE MERCEOLOGICO E NUMERO CLIENTI-->
          <div class="flex flex-wrap -mx-3 mb-8">
            <!-- SETTORE MERCEOLOGICO-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="country">Settore Merceologico</label>
              <select id="country" class="form-select w-full text-gray-300">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>

            <!-- NUMERO DEI CLIENTI-->
            <div class="w-full md:w-1/2 px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="last-name">Numero Clienti<span class="text-red-600">*</span></label>
              <input id="last-name" type="text" class="form-input w-full text-gray-300" required />
            </div>
          </div>
          <!-- Area toggle -->
          <div class="flex justify-center mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="inline-flex items-center">
              <div class="text-gray-500 font-medium mr-3">Copertura Regionale</div>
              <div class="form-switch">
                <input type="checkbox" name="area-toggle" id="area-toggle" class="sr-only" v-model="areaToggle" />
                <label class="bg-gray-600" for="area-toggle">
                  <span class="bg-gray-100" aria-hidden="true"></span>
                </label>
              </div>
              <div class="text-gray-500 font-medium ml-3">Copertura Provinciale</div>
            </div>
          </div>

          <!-- REGIONE E PROVINCIA DI COPERTURA-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <!-- REGIONI-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="country">Copertura regionale</label>
              <select id="country" class="form-select w-full text-gray-300">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
            <!-- PROVINCE-->
            <div class="w-full md:w-1/2 px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="country">Copertura Provinciale</label>
              <select id="country" class="form-select w-full text-gray-300">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
          </div>

          <!-- PARTTITA IVA-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="block text-gray-300 text-sm font-medium mb-1" for="email">Partita IVA<span class="text-red-600">*</span></label>
              <input id="email" type="email" class="form-input w-full text-gray-300" placeholder="Enter your email address" required />
            </div>
          </div>

          <!-- PRIVACY-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-gray-400 ml-2">I agree to the privacy policy</span>
              </label>
            </div>
          </div>

          <!-- BUTTON-->
          <div class="flex flex-wrap -mx-3 mt-6">
            <div class="w-full px-3">
              <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send</button>
            </div>
          </div>
        </form>
      </div>
  </section>

</template>

<script>
import CtaContact from "../CtaContact.vue";
export default {
  name: "FormSalesperson",

  components: {
    CtaContact,
  },

  data(){
    return{
      value: false,
      areaToggle: false,
    }
  },
}
</script>

<style scoped>

</style>