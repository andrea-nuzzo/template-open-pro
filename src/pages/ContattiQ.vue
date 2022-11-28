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
      <HeroAboutQ :title="'CONTATTI'" />
      <div class="flex flex-col lg:flex-row lg:justify-between w-full">
        <section class="relative lg:w-1/2">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div class="pt-32 pb-12 md:pt-40 md:pb-20">
              <!-- Page header -->
              <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 class="h1 mb-4" data-aos="fade-up">Raccontaci tutto.</h1>
              </div>

              <!-- Contact form -->
              <VeeForm
                class="max-w-xl mx-auto flex flex-col gap-4"
                @submit="submit()"
                v-slot="{ errors }"
              >
     
                <!-- Motivo contatto -->
                <div class="w-full mb-4 md:mb-0">
                  <label
                    class="block text-gray-200 text-sm font-medium mb-1"
                    for="contactType"
                    >Motivo del contatto<span
                      :class="{ 'text-red-500': errors.contactType }"
                    >
                      *</span
                    ></label
                  >

                  <VeeField
                    as="select"
                    v-model="form.contactType"
                    rules="required"
                    name="contactType"
                    id="contactType"
                    :class="{ 'border-red-500': errors.contactType }"
                    class="form-input w-full text-gray-200"
                    placeholder="MOTIVO DEL CONTATTO"
                    label="Il motivo del contatto è richiesto"
                  >
                    <option value="" disabled>MOTIVO DEL CONTATTO</option>
                    <option value="richiesta-informazioni">
                      Richiesta informazioni
                    </option>
                    <option value="tesseramento">Tesseramento</option>
                    <option value="amministrazione">Amministrazione</option>
                    <option value="ufficio-stampa">Ufficio stampa</option>
                    <option value="partnership">Partnership</option>
                  </VeeField>
                  <VeeErrorMessage
                    name="contactType"
                    class="text-red-500 text-sm mt-2"
                  />
                </div>

                <!-- First name-->
                <div class="w-full mb-4 md:mb-0">
                  <label
                    class="block text-gray-200 text-sm font-medium mb-1"
                    for="firstName"
                    >Nome<span :class="{ 'text-red-500': errors.firstName }">
                      *</span
                    ></label
                  >

                  <VeeField
                    v-model="form.firstName"
                    rules="required|min:3"
                    name="firstName"
                    id="firstName"
                    type="text"
                    :class="{ 'border-red-500': errors.firstName }"
                    class="form-input w-full text-gray-200"
                    placeholder="Nome"
                    label="Nome"
                  />
                  <VeeErrorMessage
                    name="firstName"
                    class="text-red-500 text-sm mt-2"
                  />
                </div>

                <!-- Last Name-->
                <div class="w-full">
                  <label
                    class="block text-gray-200 text-sm font-medium mb-1"
                    for="lastName"
                  >
                    Cognome<span :class="{ 'text-red-500': errors.lastName }">
                      *</span
                    ></label
                  >
                  <VeeField
                    rules="required|min:3"
                    v-model="form.lastName"
                    name="lastName"
                    id="lastName"
                    type="text"
                    :class="{ 'border-red-500': errors.lastName }"
                    class="form-input w-full text-gray-200"
                    placeholder="Cognome"
                    label="Cognome"
                  />
                  <VeeErrorMessage
                    name="lastName"
                    class="text-red-500 text-sm mt-2"
                  />
                </div>

                <!-- Email-->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-200 text-sm font-medium mb-1"
                      for="email"
                      >Email<span :class="{ 'text-red-500': errors.email }">
                        *</span
                      ></label
                    >
                    <VeeField
                      v-model="form.email"
                      rules="required|email"
                      name="email"
                      id="email"
                      type="email"
                      :class="{ 'border-red-500': errors.email }"
                      class="form-input w-full text-gray-300"
                      placeholder="Email"
                      label="Email"
                    />
                    <VeeErrorMessage
                      name="email"
                      class="text-red-500 text-sm mt-2"
                    />
                  </div>
                </div>

                <!-- Messaggio -->
                <div class="w-full mb-4 md:mb-0">
                  <label
                    class="block text-gray-200 text-sm font-medium mb-1"
                    for="textMessage"
                    >Testo<span :class="{ 'text-red-500': errors.textMessage }">
                      *</span
                    ></label
                  >

                  <VeeField
                    as="textarea"
                    v-model="form.textMessage"
                    rules="required|max:500"
                    name="textMessage"
                    id="textMessage"
                    :class="{ 'border-red-500': errors.textMessage }"
                    class="form-input w-full text-gray-200"
                    placeholder="Scrivi il tuo messaggio (max. 500 caratteri)"
                    label="Testo"
                  >
                  </VeeField>
                </div>

                <!-- Consenso -->
                <div class="w-full flex flex-col md:flex-row mb-4 md:mb-0">
                  <VeeField
                    type="checkbox"
                    v-model="form.consent"
                    rules="required|max:500"
                    name="consent"
                    id="consent"
                    :class="{ 'border-red-500': errors.consent }"
                    class="form-input text-gray-200 w-2"
                    label="Consenso"
                  />
                  <div class="flex justify-between w-full">
                    <label
                      class="block text-gray-200 text-sm font-medium mb-1 ml-2 md:ml-3"
                      for="consent"
                      >Accetto e do il consenso<span
                        :class="{ 'text-red-500': errors.consent }"
                      >
                        *</span
                      ></label
                    >
                    <router-link to="/">Modifica consensi</router-link>
                  </div>
                </div>
                <VeeErrorMessage
                  name="consent"
                  class="text-red-500 text-sm"
                />

                <!-- BUTTON-->
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button
                      class="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    >
                      INVIA
                    </button>
                  </div>
                </div>
              </VeeForm>
            </div>
          </div>
        </section>
        <section class="relative lg:w-1/2">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 relative flex flex-col justify-end">
            <div
              class="pt-32 pb-12 md:pt-40 md:pb-20 flex justify-end"
            >
              <img
                src="../images/logo/quisviluppo.svg"
                width="350"
                alt="quisviluppo-logo"
              />
             
            </div>
            <div class="flex flex-col">
              <div class="text-right">
                <h4 class="h4 pb-6">VeMa Web S.r.l.</h4>
                <p class="">Sede Legale</p>
                <p class="pb-6">Via S. Agostino 12 - 63066 Grottammare (AP)</p>
                <p>P.IVA / C.F. 02446480440</p> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import CtaContact from "./../partials/CtaContact.vue";
import Footer from "./../partials/Footer.vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "Contact",
  components: {
    Header,
    PageIllustration,
    CtaContact,
    Footer,
    StripeCheckout,
  },

  data() {
    return {
      form: {
        contactType: null,
        consent: false,
        type: null,
        firstName: null,
        lastName: null,
        email: null,
        textMessage: null,
        typeUsers: null,
        vatNumber: null,
        taxCode: null,
      },
    };
  },

  methods: {
    errorBorder(error, id) {
      if (error) {
        let element = document.getElementById(id);
        element.classList.remove("border-gray-200");
        element.classList.add("border-red-500");
      }
    },

    goPayments() {
      alert(this.form);
    },
  },
};
</script>
