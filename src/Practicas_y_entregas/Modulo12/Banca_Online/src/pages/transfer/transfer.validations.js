import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema = {
    field: {
        iban: [{
            validator: iban.validator,
            message: 'Iban no válido',
            },
            {
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        name: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        amount: [{
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
            validator: minNumber.validator,
            customArgs: {
                minValue: 1,
                inclusive: true,
            },
            message: 'Cantidad no válida',
        }],
        concept: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        day: [{
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: true,
                min: {
                value: 0,
                inclusive: false,
                },
                max: {
                value: 31,
                inclusive: true,
                },
            },
            message: 'Fecha no válida',
        }],
        month: [{
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: true,
                min: {
                value: 0,
                inclusive: false,
                },
                max: {
                value: 12,
                inclusive: true,
                },
            },
            message: 'Fecha no válida',
        }],
        year: [{
            validator: rangeNumber.validator,
            customArgs: {
                strictTypes: true,
                min: {
                value: Number(new Date().getFullYear()),
                inclusive: true,
                },
                max: {
                value: Number(new Date().getFullYear()) + 1, //Permito que el año de la transacción sea el actual o el siguiente
                inclusive: true,
                },
            },
            message: 'Fecha no válida',
        }],
        date: [{
            validator: laterDate.validator,
            customArgs: {
                parseStringToDateFn: (value) => new Date(value),
                date: new Date(),
            },
            message: 'Fecha no válida',
        }], 
        email: [{
            validator: Validators.email,
            message: 'Email no válido',
        }],
    },
};

export const formValidation = createFormValidation(validationSchema);