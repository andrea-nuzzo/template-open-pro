import {Form, Field, ErrorMessage, configure, defineRule} from "vee-validate";

// Import all rules
import AllRules from '@vee-validate/rules';

// Set Languages Error
import { localize } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json"
localize({ it });

import codiceFiscale from 'codice-fiscale-js';
import { checkVAT, italy } from 'jsvat';

export  default (app) => {

    defineRule('isValidTaxCode', value => {
        if (codiceFiscale.check(value)) {
            return true;
        }
        return 'Inserisci un Codice Fiscale Valido'
    });

    defineRule('isValidVatNumber', value => {
        if (checkVAT('IT' + value, [italy]).isValid) {
            return true;
        }
        return 'Inserisci una Partita IVA valida'
    });

    Object.keys(AllRules).forEach(rule => {
        defineRule(rule, AllRules[rule]);
    });

    configure({
        generateMessage: localize('it')
        }

    )

    app.component('VeeForm', Form)
    app.component('VeeField', Field)
    app.component('VeeErrorMessage', ErrorMessage)


}