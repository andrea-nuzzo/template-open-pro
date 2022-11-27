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

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="fade-up">Completa il modulo in un momento</h1>
            </div>

            <!-- Contact form -->
            <VeeForm class="max-w-xl mx-auto" @submit="submit()" v-slot="{errors}">

              <!-- Container first name and last name-->
              <div class="flex flex-wrap -mx-3 mb-4">

                <!-- First name-->
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                      class="block text-gray-200 text-sm font-medium mb-1"
                      for="firstName"
                  >Nome<span :class="{'text-red-500' : errors.firstName}"> *</span></label>

                  <VeeField
                      v-model="form.firstName"
                      rules="required|min:3"
                      name="firstName"
                      id="firstName"
                      type="text"
                      :class="{'border-red-500' : errors.firstName}"
                      class="form-input w-full text-gray-200"
                      placeholder="Nome"
                      label="Nome"/>
                  <VeeErrorMessage name="firstName" class="text-red-500 text-sm mt-2"/>
                </div>

                <!-- Last Name-->
                <div class="w-full md:w-1/2 px-3">
                  <label
                      class="block text-gray-200 text-sm font-medium mb-1"
                      for="lastName">
                    Cognome<span :class="{'text-red-500' : errors.lastName}"> *</span></label>
                  <VeeField
                      rules="required|min:3"
                      v-model="form.lastName"
                      name="lastName"
                      id="lastName"
                      type="text"
                      :class="{'border-red-500' : errors.lastName}"
                      class="form-input w-full text-gray-200"
                      placeholder="Cognome"
                      label="Cognome"
                  />
                  <VeeErrorMessage name="lastName" class="text-red-500 text-sm mt-2"/>
                </div>
              </div>

              <!-- Email-->
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-200 text-sm font-medium mb-1" for="email">Email<span :class="{'text-red-500' : errors.email}"> *</span></label>
                  <VeeField
                      v-model="form.email"
                      rules="required|email"
                      name="email"
                      id="email"
                      type="email"
                      :class="{'border-red-500' : errors.email}"
                      class="form-input w-full text-gray-300"
                      placeholder="Email"
                      label="Email"/>
                  <VeeErrorMessage name="email" class="text-red-500 text-sm mt-2"/>
                </div>
              </div>

              <!-- Container Password and Password Confirmation-->
              <div class="flex flex-wrap -mx-3 mb-4">

                <!-- Password-->
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                      class="block text-gray-200 text-sm font-medium mb-1"
                      for="password"
                  >Password<span :class="{'text-red-500' : errors.password}"> *</span></label>
                  <VeeField
                      v-model="form.password"
                      rules="required|min:8"
                      name="password"
                      id="password"
                      type="password"
                      :class="{'border-red-500' : errors.password}"
                      class="form-input w-full text-gray-200"
                      placeholder="Password"
                      label="Password"/>
                  <VeeErrorMessage name="password" class="text-red-500 text-sm mt-2"/>
                </div>

                <!-- Password Confirmation-->
                <div class="w-full md:w-1/2 px-3">
                  <label
                      class="block text-gray-200 text-sm font-medium mb-1"
                      for="passwordConfirmation"
                  >Conferma Password<span :class="{'text-red-500' : errors.passwordConfirmation}"> *</span></label>
                  <VeeField
                      rules="confirmed:@password|required"
                      name="passwordConfirmation"
                      id="passwordConfirmation"
                      type="password"
                      :class="{'border-red-500' : errors.passwordConfirmation}"
                      class="form-input w-full text-gray-300"
                      placeholder="Conferma Password"
                      label="Conferma Password"/>
                  <VeeErrorMessage name="passwordConfirmation" class="text-red-500 text-sm mt-2"/>
                </div>
              </div>

              <!-- Container Individuals Company and Professionals -->
              <div class="w-full px-3">
                <label
                    class="block text-gray-200 text-sm font-medium mb-4"
                    for="typeUsers"
                >
                  Seleziona tra Privato Azienda o Professionista <span :class="{'text-red-500' : errors.typeUsers}"> *</span>
                </label>
                <div class="flex flex-wrap justify-around -mx-3 mb-4">

                  <!--Individuals-->
                  <VeeField type="radio" id="individuals" rules="required|one_of:individuals,company,professionals" name="typeUsers"  value="individuals" v-model="form.typeUsers" label="Tipo di Utente"/>
                  <label class="block text-gray-200 text-sm font-medium mb-1" for="individuals">Privato</label>

                  <!-- Company -->
                  <VeeField type="radio" id="company" name="typeUsers" value="company" v-model="form.typeUsers"/>
                  <label class="block text-gray-200 text-sm font-medium mb-1" for="individuals">Azienda</label>

                  <!-- Professionals -->
                  <VeeField type="radio" id="professionals" name="typeUsers" value="professionals" v-model="form.typeUsers"/>
                  <label class="block text-gray-200 text-sm font-medium mb-1" for="individuals">Professionista</label>
                </div>
                <VeeErrorMessage name="typeUsers" class="text-red-500 text-sm mt-2"/>
              </div>

              <!-- Vat number-->
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">

                  <label
                      class="block text-sm font-medium mb-1"
                      :class="form.typeUsers === 'company' || form.typeUsers === 'professionals' ?'text-gray-200' : 'text-gray-300 ' "
                      for="vatNumber">Partita IVA
                    <span
                      v-if="form.typeUsers === 'company' || form.typeUsers === 'professionals'"
                      :class="{'text-red-500' : errors.email}"> *
                    </span>
                  </label>
                  <VeeField
                      :rules="form.typeUsers === 'company' || form.typeUsers === 'professionals' ? 'required|isValidVatNumber' : ''"
                      v-model="form.vatNumber"
                      :disabled="form.typeUsers === 'individuals' || form.typeUsers === null"
                      name="vatNumber"
                      id="vatNumber"
                      type="number"
                      :class="errorBorder(errors.taxCode, 'vatNumber'), form.typeUsers === 'company' || form.typeUsers === 'professionals' ?'border-gray-200' : 'border-gray-300 ' "
                      class="form-input w-full"
                      :placeholder="form.typeUsers === 'company' || form.typeUsers === 'professionals' ? 'Partita IVA' : '' "
                      label="Partia IVA"/>
                  <VeeErrorMessage name="vatNumber" class="text-red-500 text-sm mt-2"/>
                </div>
              </div>

              <!-- Tax Code-->
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-200 text-sm font-medium mb-1"
                         :class="form.typeUsers === 'individuals' || form.typeUsers === 'professionals' ?'text-gray-200' : 'text-gray-300 ' "
                         for="taxCode">Codice Fiscale
                    <span v-if="form.typeUsers === 'individuals' || form.typeUsers === 'professionals'"
                          :class="{'text-red-500' : errors.taxCode}"> *</span>
                  </label>
                  <VeeField
                      v-model="form.taxCode"
                      :rules="form.typeUsers === 'individuals' || form.typeUsers === 'professionals' ? 'required|isValidTaxCode' : ''"
                      :disabled="form.typeUsers ==='company' || form.typeUsers === null"
                      name="taxCode"
                      id="taxCode"
                      type="text"
                      :class="errorBorder(errors.taxCode, 'taxCode'), form.typeUsers === 'individuals' || form.typeUsers === 'professionals' ?'border-gray-200' : 'border-gray-300 ' "
                      class="form-input w-full text-gray-200"
                      :placeholder="form.typeUsers === 'individuals' || form.typeUsers === 'professionals' ? 'Codice Fiscale' : '' "
                      label="Codice Fiscale"/>
                  <VeeErrorMessage name="taxCode" class="text-red-500 text-sm mt-2"/>
                </div>
              </div>




              <!-- BUTTON-->
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Acquista ora</button>
                </div>
              </div>
            </VeeForm>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import CtaContact from './../partials/CtaContact.vue'
import Footer from './../partials/Footer.vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  name: 'Contact',
  components: {
    Header,
    PageIllustration,
    CtaContact,
    Footer,
    StripeCheckout,
  },

  data() {
    return{
      form:{
        type: null,
        firstName: null,
        lastName: null,
        email: null,
        password:null,
        typeUsers: null,
        vatNumber:null,
        taxCode:null,
      },
    }
  },

  methods: {

    errorBorder(error, id){

      if(error){
        let element = document.getElementById(id);
        element.classList.remove("border-gray-200");
        element.classList.add("border-red-500")
      }

    },

    goPayments(){
      alert(this.form)
    },

  },
};
</script>
