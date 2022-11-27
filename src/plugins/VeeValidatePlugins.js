import {Form, Field, ErrorMessage, configure, defineRule} from "vee-validate";


import AllRules from '@vee-validate/rules';

import { localize } from "@vee-validate/i18n";
import it from "@vee-validate/i18n/dist/locale/it.json"
localize({ it });


export  default (app) => {


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