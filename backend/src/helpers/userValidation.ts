import Joi from '@hapi/joi';

const userRegisterSchema = Joi.object({
	name: Joi.string().min(2).max(64).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).max(100).required()
});

const userLoginSchema = Joi.object({
	name: Joi.string().min(2).max(64).required(),
	password: Joi.string().min(8).max(100).required()
});

export { userRegisterSchema, userLoginSchema };
