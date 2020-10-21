import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
    field: {
      title: [
          {
            validator: Validators.required,
            message: 'Campo requerido'
          }],
      notes: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
      email: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },
        {
            validator: Validators.email,
            message: 'Email no válido',
        }],
      phone: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }, {
            validator: Validators.pattern,
            customArgs: { pattern: /^(\+\d{2})?(6|7|8|9)\d{8}$/ },
            message: 'Teléfono no válido',
        }],
      price: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },{
            validator: Validators.pattern,
            customArgs: { pattern: /^(\d)+$/ },
            message: 'No es un precio válido. El precio introducido no puede contener puntos, comas o espacios',
        }],
      saleTypes: [{
            validator: arrayRequired.validator,
            customArgs: { minLength: 1},
            message: 'Debe seleccionar al menos una opción',
        }],
      address: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
      city: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
      province: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
      squareMeter: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },{
            validator: positiveNumber.validator,
            message: 'No es un número válido',
        }],
      rooms: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },{
            validator: positiveNumber.validator,
            message: 'No es un número válido',
        }],
      bathrooms: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },{
            validator: positiveNumber.validator,
            message: 'No es un número válido',
        }],
      locationUrl: [{
            validator: Validators.required,
            message: 'Campo requerido',
      },{
            validator: isUrl.validator,
            message: 'No es una url válida',
      }, {
        validator: Validators.pattern,
        customArgs: { pattern: /^(https:\/\/)?(www\.)?(google.com\/maps\/embed\?[\w|\W|!|\=|%]+)$/ },
        message: 'No es una url válida',
      }],
    },
};

export const formValidation = createFormValidation(validationSchema);