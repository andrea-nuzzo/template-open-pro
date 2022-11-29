<template>
  <section class="relative max-w-6xl mx-auto px-4 sm:px-6">
    <div class="py-12 md:py-20 border-t border-gray-800 relative">

        <!-- Page header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="fade-up">Candidati ora</h1>
          <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Nella tua Area Riservata potrai tenere sotto controllo tutti i clienti acquisiti e disporre di reportistica, in qualunque momento.</p>
        </div>

        <!-- Contact form -->
        <VeeForm class="max-w-xl mx-auto" @submit="sendRegistration" v-slot="{errors}">

          <!-- Tax Code-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="block text-gray-200 text-sm font-medium mb-1" for="taxCode">Codice Fiscale
                <span :class="{'text-red-500' : errors.taxCode}"> *</span>
              </label>
              <VeeField
                  v-model="form.taxCode"
                  rules="required|isValidTaxCode"
                  name="taxCode"
                  id="taxCode"
                  type="text"
                  :class="{'border-red-500' : errors.password}"
                  class="form-input w-full border-gray-200 text-gray-200"
                  placeholder="Codice Fiscale"
                  label="Codice Fiscale"/>
              <VeeErrorMessage name="taxCode" class="text-red-500 text-sm mt-2"/>
            </div>
          </div>

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

          <!-- Mobile-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="block text-gray-200 text-sm font-medium mb-1" for="mobile">Telefono<span :class="{'text-red-500' : errors.email}"> *</span></label>
              <VeeField
                  v-model="form.mobile"
                  rules="required"
                  name="mobile"
                  id="mobile"
                  type="text"
                  :class="{'border-red-500' : errors.mobile}"
                  class="form-input w-full text-gray-300"
                  placeholder="Telefono Cellulare"
                  label="Telefono"/>
              <VeeErrorMessage name="mobile" class="text-red-500 text-sm mt-2"/>
            </div>
          </div>

          <!-- Customer sector toggle -->
          <div class="flex justify-start mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="inline-flex items-center">
              <div class="text-gray-200 font-medium mr-3">Portafoglio Clienti</div>
              <div class="form-switch">
                <input type="checkbox" name="pricing-toggle" id="pricing-toggle" class="sr-only" v-model="customerPortfolio" />
                <label class="bg-gray-600" for="pricing-toggle">
                  <span class="bg-gray-100" aria-hidden="true"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- Container  Industry Sector Number of Customers-->
          <div class="flex flex-wrap -mx-3 mb-8">

            <!-- Industry Sector-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label v-if="!customerPortfolio" class="block text-gray-300 text-sm font-medium mb-1" for="industrySector">Settore Merceologico</label>
              <label v-else class="block text-gray-200 text-sm font-medium mb-1" for="industrySector">Settore Merceologico<span :class="{'text-red-500' : errors.industrySector}"> *</span></label>
              <VeeField name="industrySector"
                        as="select"
                        id="industrySector"
                        v-model="form.industrySector"
                        :disabled="!customerPortfolio"
                        :rules="customerPortfolio ? 'required' : ''"
                        :class="{'border-red-500' : errors.industrySector}"
                        class="form-select w-full text-gray-200 disabled:border-gray-300"
                        label="Settore Merceologico"
                        placeholder="Settore Merceologico"
              >
                <option value="">Settore Merceologico</option>
                <option v-for="item in industrySector" :key="item.value" :value="item.value">{{ item.text }}</option>
              </VeeField>
              <VeeErrorMessage name="industrySector" class="text-red-500 text-sm mt-2"/>
            </div>

            <!-- Number of Customers-->
            <div class="w-full md:w-1/2 px-3">
              <label v-if="!customerPortfolio" class="block text-gray-300 text-sm font-medium mb-1" for="numberCustomers">Numero Clienti</label>
              <label v-else class="block text-gray-200 text-sm font-medium mb-1" for="numberCustomers">Numero Clienti<span :class="{'text-red-500' : errors.numberCustomers}"> *</span></label>
              <VeeField
                  v-model="form.numberCustomers"
                  :disabled="!customerPortfolio"
                  :rules="customerPortfolio ? 'required' : ''"
                  name="numberCustomers"
                  id="numberCustomers"
                  type="number"
                  :class="{'border-red-500' : errors.numberCustomers}"
                  class="form-input w-full text-gray-300 disabled:border-gray-300"
                  placeholder="Numero Clienti"
                  label="Numero Clienti"/>
              <VeeErrorMessage name="numberCustomers" class="text-red-500 text-sm mt-2"/>
            </div>
          </div>


          <div class="flex justify-center mb-4" data-aos="fade-up" data-aos-delay="400">

            <!-- Area toggle -->
            <div class="inline-flex items-center">
              <div v-if="!customerPortfolio" class="text-gray-300 font-medium mr-3">Copertura Regionale</div>
              <div v-else class="text-gray-200 font-medium mr-3">Copertura Regionale</div>
              <div class="form-switch">
                <input :disabled="!customerPortfolio" type="checkbox" name="area-toggle" id="area-toggle" class="sr-only" v-model="areaToggle" />
                <label class="bg-gray-600" for="area-toggle">
                  <span class="bg-gray-100" aria-hidden="true"></span>
                </label>
              </div>
              <div v-if="!customerPortfolio" class="text-gray-300 font-medium ml-3">Copertura Provinciale</div>
              <div v-else class="text-gray-200 font-medium ml-3">Copertura Provinciale</div>
            </div>
          </div>

          <!-- Container Region  and Province-->
          <div class="flex flex-wrap -mx-3 mb-4">

            <!-- Region-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label v-if="!customerPortfolio || areaToggle" class="block text-gray-300 text-sm font-medium mb-1" for="region">Regione</label>
              <label v-else class="block text-gray-200 text-sm font-medium mb-1" for="region">Regione<span :class="{'text-red-500' : errors.region}"> *</span></label>
              <VeeField name="region"
                        as="select"
                        id="region"
                        v-model="form.region"
                        :disabled="!customerPortfolio || areaToggle"
                        :rules="customerPortfolio ? 'required' : ''"
                        :class="{'border-red-500' : errors.region}"
                        class="form-select w-full text-gray-200 disabled:border-gray-300"
                        label="Regione"
                        placeholder="Regione"
              >
                <option value="">Regione</option>
                <option v-for="item in region" :key="item.id" :value="item.nome">{{ item.nome }}</option>
              </VeeField>
              <VeeErrorMessage v-if="customerPortfolio && !areaToggle" name="region" class="text-red-500 text-sm mt-2"/>
            </div>

            <!-- Province-->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label v-if="!customerPortfolio || !areaToggle" class="block text-gray-300 text-sm font-medium mb-1" for="province">Provincia</label>
              <label v-else class="block text-gray-200 text-sm font-medium mb-1" for="province">Provincia<span :class="{'text-red-500' : errors.province}"> *</span></label>
              <VeeField name="province"
                        as="select"
                        id="province"
                        v-model="form.province"
                        :disabled="!customerPortfolio || !areaToggle"
                        :rules="customerPortfolio ? 'required' : ''"
                        :class="{'border-red-500' : errors.province}"
                        class="form-select w-full text-gray-200 disabled:border-gray-300"
                        label="Provincia"
              >
                <option value="">Provincia</option>
                <option v-for="item in province" :key="item.id" :value="item.nome">{{ item.nome }}</option>
              </VeeField>
              <VeeErrorMessage v-if="customerPortfolio && areaToggle" name="province" class="text-red-500 text-sm mt-2"/>
            </div>
          </div>

          <!-- Vat number-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">

              <label v-if="!customerPortfolio"
                  class="block text-sm font-medium mb-1 text-gray-300"
                  for="vatNumber">Partita IVA
              </label>
              <label v-else
              class="block text-sm font-medium mb-1 text-gray-200"
              for="vatNumber">Partita IVA
            <span
                :class="{'text-red-500' : errors.email}"> *
                </span>
          </label>

              <VeeField
                  :rules="customerPortfolio ? 'required|isValidVatNumber' : ''"
                  v-model="form.vatNumber"
                  :disabled="!customerPortfolio"
                  name="vatNumber"
                  id="vatNumber"
                  type="number"
                  :class="{'border-red-500' : errors.province}"
                  class="form-input w-full disabled:border-gray-300 "
                  placeholder="Partita IVA"
                  label="Partia IVA"/>
              <VeeErrorMessage name="vatNumber" class="text-red-500 text-sm mt-2"/>
            </div>
          </div>


          <!-- PRIVACY-->
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label class="flex items-center">
                <VeeField rules="isChecked" type="checkbox" name="consent" id="consent" class="form-checkbox" />
                <span class="text-gray-200 ml-2">Accetto e do il consenso *</span>
               
              </label>
              <VeeErrorMessage name="consent" class=" block text-red-500 text-sm mt-2"/>
            </div>
          </div>

          <!-- BUTTON-->
          <div class="flex flex-wrap -mx-3 mt-6">
            <div class="w-full px-3">
              <button class="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send</button>
            </div>
          </div>
        </VeeForm>
      </div>
  </section>

</template>

<script>
import CtaContact from "../CtaContact.vue";
import region from "../../data/regioni.json"
import province from "../../data/province.json"
import industrySector from "../../data/settore-merceologico.json"

export default {
  name: "FormSalesperson",

  components: {
    CtaContact,
  },

  data(){
    return{
      region,
      province,
      industrySector,
      form:{
        taxCode: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        mobile: null,
        industrySector: null,
        numberCustomers: null,
        region:null,
        province:null,
        vatNumber: null
      },
      customerPortfolio: false,
      areaToggle: false,
    }
  },

  methods:{
    sendRegistration(){
      alert('Send')
    },
  },
}
</script>

<style scoped>

</style>