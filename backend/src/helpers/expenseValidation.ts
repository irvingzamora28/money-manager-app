import Joi from "@hapi/joi";

const expenseCreateSchema = Joi.object({
	name: Joi.string().min(3).max(30).required().pattern(/^[\w\-\,\.\(\)\s]*[^\W_\-\,\.\(\)\s][\w\-\,\.\(\)\s]*$/).messages({
        'string.pattern.base': `"name" is not valid, it can only contain letters, numbers and (,._)`
      }),
	quantity: Joi.number().positive().required(),
	description: Joi.string().min(3).max(500).required(),
});

const expenseUpdateSchema = Joi.object({
	name: Joi.string().min(3).max(30).pattern(/^[\w\-\,\.\(\)\s]*[^\W_\-\,\.\(\)\s][\w\-\,\.\(\)\s]*$/)
    .messages({
        'string.pattern.base': `"name" is not valid, it can only contain letters, numbers and (,._)`
      }),
	quantity: Joi.number().positive(),
	description: Joi.string().min(3).max(500),
});

export { expenseCreateSchema, expenseUpdateSchema };
