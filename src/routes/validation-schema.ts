import Joi from 'joi';

export const IdValidator = Joi.object({
  id: Joi.number().required()
});

const MetadataAttributeValidator = Joi.object({
  value: [Joi.number(), Joi.string()],
  trait_type: Joi.string(),
  display_type: Joi.string()
});

export const MetadataCreationValidator = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string(),
  image_data: Joi.binary(),
  external_url: Joi.string(),
  background_color: Joi.string(),
  animation_url: Joi.string(),
  youtube_url: Joi.string(),
  attributes: Joi.array().items(MetadataAttributeValidator)
});

export const MetadataUpdateValidator = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
  image_data: Joi.binary(),
  external_url: Joi.string(),
  background_color: Joi.string(),
  animation_url: Joi.string(),
  youtube_url: Joi.string(),
  attributes: Joi.array().items(MetadataAttributeValidator)
});
