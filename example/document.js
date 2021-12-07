Joi.string()
  .min(4)
  .max(20)
  .messages(JoiMessage.createStringMessages({ field: "Username", min: 4, max: 20 }));
