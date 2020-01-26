
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Removes double spaces
 * # TODO remove  special chars to avoid injections
 * @param {string} name Customer name
 * @returns {string}
 */
const nameCleanUp = (name) => name && name.replace(/ +(?= )/g,'')

/**
 * Custom validators api require two independents functions to:
 * 1. Validate the value
 * 2. Return the error message
 * Instead of creating two separate function with the same logic this function takes a second argument to return the boolean value or the message
 * @param {string} value name to be tested
 * @param {string} type indicates if should return boolean or message
 * @returns {boolean|string} returns a boolean or a message
 */
const validateName = (value, type = 'value') => {
  if (value.length > 128) {
    return (type === 'value' ? false : 'Name length must not exceed 128 characters.');
  }  
  if (value.split(' ').length < 2) {
    return (type === 'value' ? false : 'Name should have 2 or more words.');
  }
  if (!/[A-Z]/.test(value.slice(0, 1))) {
    return (type === 'value' ? false : 'First letter must be upper case.');
  }
  return true;
}

/**
 * Just an adapter function to the type forced to 'message'
 * @param {integer|string} value 
 * @returns {string} returns a boolean or a message
 */
const validationMessage = (value) => validateName(value, 'message');

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      validate: {
        validator: (value) => validateName(nameCleanUp(value)),
        message: ({ value }) => validationMessage(nameCleanUp(value))
      },
    },
    bags: {
      type: Number,
      default: undefined,
      required: [true, 'bags is required'],
      min: [1, 'min 1 bag'],
      max: [5, 'max 5 bags']
    }
  }
);

const Model = mongoose.model("Customer", customerSchema);

module.exports = Model;