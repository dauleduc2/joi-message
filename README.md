# joi-message

A small package of Joi help you to generate more friendly messages

## Installation

### Npm

```sh
npm install joi joi-message
```

### Yarn

```sh
yarn add joi joi-message
```

## Joi main function

- createStringMessages : create messages for String type
- createNumberMessages : create messages for Number type
- createArrayMessages : create string messages for Array type
- createBooleanMessages : create string messages for Boolean type
- createDateMessages : create string messages for Date type
- createObjectMessages : create string messages for Object type

## Import

```js
const { JoiMessage } = require("joi-message");
```

## Note

- when you use any method that needs a value, please pass it into the object into each method to show the exact message as expected

```js
// example/document.js

Joi.string()
  .min(4)
  .max(20)
  .messages(JoiMessage.createStringMessages({ field: "Username", min: 4, max: 20 }));
```

## Usage

```js
// example/usage.js

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
console.log(result.error.details);
//  The return messages will be like this
//  [
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
//  ]

```

## Custom message

```js
// example/custom.js

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

```
