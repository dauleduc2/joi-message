const Joi = require("joi");
const { JoiMessage } = require("joi-message");

const testSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .messages({
      ...JoiMessage.createStringMessages({ field: "Username", min: 4 }),
      "string.min": "test message",
    }),
});
const result = testSchema.validate({ username: "aaa" });
console.log(result.error.details);
// [
//  {
//     message: 'test message',
//     type: 'string.min',
//     ...
//   }
// ]
