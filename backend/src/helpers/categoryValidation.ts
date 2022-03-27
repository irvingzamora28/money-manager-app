import Joi from "@hapi/joi";

const categoryCreateSchema = Joi.object({
	name: Joi.string().min(3).max(30).required().pattern(/^[\w\-\,\.\(\)\s]*[^\W_\-\,\.\(\)\s][\w\-\,\.\(\)\s]*$/).messages({
        'string.pattern.base': `"name" is not valid, it can only contain letters, numbers and (,._)`
      }),
	icon: Joi.string().min(3).max(1024).required(),
});

const categoryUpdateSchema = Joi.object({
	name: Joi.string().min(3).max(30).pattern(/^[\w\-\,\.\(\)\s]*[^\W_\-\,\.\(\)\s][\w\-\,\.\(\)\s]*$/)
    .messages({
        'string.pattern.base': `"name" is not valid, it can only contain letters, numbers and (,._)`
      }),
	icon: Joi.string().min(3).max(1024),
});

export { categoryCreateSchema, categoryUpdateSchema };
