import Joi from "joi";
const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({

        'string.pattern.base': 'Бранд має складатись тільки з літер мін 1 макс 20 літер',
        'string.required': 'Це поле обов\'язкове'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({

        'number.min':'Поле більше нуля',
        'number.required':'Це поле обов\'язкове'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'Рік не менше ніж 1990',
        'number.required':'Це поле обов\'язкове'
    })
})
export {
    carValidator
}