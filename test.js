const Joi = require("joi");
const { JoiMessage } = require("joi-message");

const testSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .max(20)
    .messages(JoiMessage.createStringMessages({ field: "Username", min: 4, max: 20 })),
  email: Joi.string()
    .email()
    .messages(JoiMessage.createStringMessages({ field: "Email" })),
  list: Joi.array()
    .min(4)
    .messages(JoiMessage.createArrayMessages({ field: "List", min: 4 })),
  listWithoutName: Joi.array()
    .min(4)
    .messages(JoiMessage.createArrayMessages({ showFieldName: false, min: 4 })),
});
const result = testSchema.validate({ username: "aaa", email: "bbb", list: [1, 2, 3] }, { abortEarly: false });
console.log(result.error);
//    The return messages will be like this
//    {
//       message: 'Username should be at least 4 characters',
//       type: 'string.min',
//       ...
//     },
//     {
//       message: 'invalid email',
//       type: 'string.email',
//       ...
//     },
//     {
//       message: 'List should contain at least 4 items',
//       type: 'array.min',
//       ...
//     }
