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
                @submit="submitFormHandler"
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
                    class="form-input w-full text-gray-200 h-[200px] md:h-[300px]"
                    placeholder="Scrivi il tuo messaggio (max. 500 caratteri)"
                    label="Testo"
                  >
                  </VeeField>
                </div>

                <!-- Consenso -->
                <div class="w-full flex flex-col md:flex-row mb-4 md:mb-0">
                  <VeeField
                    type="checkbox"
                    rules="isChecked"
                    name="consent"
                    id="consent"
                    :class="{ 'border-red-500': errors.consent }"
                    class="text-purple-600"
                    label="Consenso"
                  />
                  
                  <VeeErrorMessage
                    name="consent"
                    class="text-red-500 text-sm"
                  />
                  <div class="flex justify-between items-center w-full">
                    <label
                      class="block text-gray-200 text-sm font-medium mb-1 ml-1 md:ml-2"
                      for="consent"
                      >Accetto è do il consenso<span
                        :class="{ 'text-red-500': errors.consent }"
                      >
                        *</span
                      ></label
                    >
                    <router-link to="/">Modifica consensi</router-link>
                  </div>
                </div>

                <!-- BUTTON-->
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button
                      class="btn rounded-full text-white bg-purple-600 hover:bg-purple-700 w-full"
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
          <div
            class="max-w-6xl mx-auto px-4 sm:px-6 relative flex flex-col justify-end"
          >
            <div class="pt-32 pb-12 md:pt-40 md:pb-20 flex justify-end">
              <img
                src="../images/logo/quisviluppo.svg"
                class="w-[200px] md:w-[300px] lg:w-[350px]"
                alt="quisviluppo-logo"
              />
            </div>
            <div class="flex flex-col">
              <div class="text-right pb-20 md:pb-26 lg:pb-30">
                <h4 class="h4 pb-6">VeMa Web S.r.l.</h4>
                <p class="">Sede Legale</p>
                <p class="pb-6">Via S. Agostino 12 - 63066 Grottammare (AP)</p>
                <p>P.IVA / C.F. 02446480440</p>
              </div>
              <ul class="flex justify-end pb-16 md:pb-24 lg:pb-28">
                <li class="ml-4">
                  <router-link
                    to="#"
                    class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                    aria-label="Linkedin"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"
                      />
                    </svg>
                  </router-link>
                </li>
                <li class="ml-4">
                  <router-link
                    to="#"
                    class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                    aria-label="Instagram"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20.145" cy="11.892" r="1" />
                      <path
                        d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                      />
                      <path
                        d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"
                      />
                    </svg>
                  </router-link>
                </li>
                <li class="ml-4">
                  <router-link
                    to="#"
                    class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                    aria-label="Twitter"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                      />
                    </svg>
                  </router-link>
                </li>

                <li class="ml-4">
                  <router-link
                    to="#"
                    class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                    aria-label="Facebook"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
                      />
                    </svg>
                  </router-link>
                </li>
              </ul>
              <h4 class="h4 flex justify-end pb-16 md:pb-22 lg:pb-26">
                Scorciatoie.
              </h4>
            </div>
            <div class="w-full border border-green-500 p-5 flex">
              <img class="mr-5" src="https://picsum.photos/60/60" alt="img" />
              <div class="flex flex-col">
                <h3 class="h3 text-green-500">0735.740710</h3>
                <small>08:00 - 18:00 da lunedì a venerdì</small>
              </div>
            </div>
            <div class="w-full border border-green-500 p-5 flex mt-7">
              <img class="mr-5" src="https://picsum.photos/60/60" alt="img" />
              <div class="flex flex-col">
                <h3 class="h3 text-green-500">339.463 98 91</h3>
                <small>08:00 - 18:00 da lunedì a venerdì</small>
              </div>
            </div>
            <h4 class="h4 flex justify-end py-16 md:py-22 lg:py-26">
              Link rapidi.
            </h4>
            <h1>Accordion goes here.</h1>
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
        content:null,
        firstName: null,
        lastName: null,
        email: null,
        textMessage: null,
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
    submitFormHandler() {
      console.log(this.form);
    },

    goPayments() {
      alert(this.form);
    },
  },
};
</script>
