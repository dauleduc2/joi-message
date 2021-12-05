import { JoiMessageType, ReturnMessages } from "./types/rootType";

const anyTypeMessages: ReturnMessages = {
  "any.required": "required",
};

export const JoiMessage: JoiMessageType = {
  createStringMessages: function ({ field, max, min, length, showFieldName = true }) {
    const messages = {
      "string.min": `${showFieldName ? field + " " : ""}should be at least ${min} characters`,
      "string.base": `${showFieldName ? field + " " : ""}should be a string`,
      "string.max": `${showFieldName ? field + " " : ""}should be less than ${max} characters`,
      "string.email": `Invalid email`,
      "string.alphanum": `${showFieldName ? field + " " : ""}should be only contain letters from Alphabet and 0-9`,
      "string.dataUri": `${showFieldName ? field + " " : ""}should be valid url`,
      "string.guid": `Invalid UUID`,
      "string.ip": `Invalid ip address`,
      "string.length": `${showFieldName ? field + " " : ""}should be ${length} characters`,
      "string.lowercase": `${showFieldName ? field + " " : ""}should not contain any capital letter`,
      "string.uppercase": `${showFieldName ? field + " " : ""}should only contain capital letter`,
    };
    return { ...anyTypeMessages, ...messages };
  },
  createNumberMessages: function ({ field, max, min, greater, less, showFieldName = true }) {
    const messages = {
      "number.min": `${showFieldName ? field + " " : ""}should be higher or equal to ${min}`,
      "number.base": `${showFieldName ? field + " " : ""}should be number`,
      "number.max": `${showFieldName ? field + " " : ""}should be less than or euqual to ${max}`,
      "number.greater": `${showFieldName ? field + " " : ""}should be higher than ${greater}`,
      "number.less": `${showFieldName ? field + " " : ""}should be less than ${less}`,
      "number.negative": `${showFieldName ? field + " " : ""}should be a negative number`,
      "number.port": `invalid port`,
      "number.positive": `${showFieldName ? field + " " : ""}should be positive number  `,
    };
    return { ...anyTypeMessages, ...messages };
  },
  createArrayMessages: function ({ field, max, min, showFieldName = true, length }) {
    const messages = {
      "array.min": `${showFieldName ? field + " " : ""}should contain at least ${min} items`,
      "array.base": `${showFieldName ? field + " " : ""}should be an array`,
      "array.max": `${showFieldName ? field + " " : ""}should be less than or euqual to ${max} items`,
      "array.length": `${showFieldName ? field + " " : ""}should have exact ${length} items `,
      "array.sparse": `${showFieldName ? field + " " : ""}should not have undefined value `,
      "array.unique": `${showFieldName ? field + " " : ""}should not contain duplicate value`,
    };
    return { ...anyTypeMessages, ...messages };
  },
  createBooleanMessages: function ({ field, showFieldName = true }) {
    const messages = {
      "boolean.base": `${showFieldName ? field + " " : ""}can only be true or false`,
    };
    return { ...anyTypeMessages, ...messages };
  },
  createDateMessages: function ({ field, showFieldName = true, greater, less, max, min }) {
    const messages = {
      "date.base": `${showFieldName ? field + " " : ""}should be valid date time`,
      "date.greater": `${showFieldName ? field + " " : ""}should be the day after ${greater}`,
      "date.less": `${showFieldName ? field + " " : ""}should be the day before ${less}`,
      "date.max": `${showFieldName ? field + " " : ""}should be the day before ${max} or ${max}`,
      "date.min": `${showFieldName ? field + " " : ""}should be the day after ${min} or ${min}`,
    };
    return { ...anyTypeMessages, ...messages };
  },
  createObjectMessages: function ({ field, showFieldName = true, length, min, max }) {
    const messages = {
      "object.base": `${showFieldName ? field + " " : ""}should be valid object`,
      "object.length": `${showFieldName ? field + " " : ""}should have exact ${length} keys`,
      "object.min": `${showFieldName ? field + " " : ""}should have at least ${min} keys`,
      "object.max": `${showFieldName ? field + " " : ""}should have ${max} or more than ${max} keys`,
    };
    return { ...anyTypeMessages, ...messages };
  },
};
export default JoiMessage;
