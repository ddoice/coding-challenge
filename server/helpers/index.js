/**
 * Loads a model and overrides some methods to avoid real data modification
 * # REFACTOR NEEDED
 * This is hacky, won't work if any method gets renamed due to api changes
 * If you forgot to add a not yet used method it will ececute the query on live data
 * @param {string} model Model to be mocked
 */
const mockModel = (model) => {
    let modelMocked = require(`../models/${model}`);
    modelMocked.find = () => { };
    modelMocked.save = () => { };
    modelMocked.updateOne = () => { };
    modelMocked.deleteOne = () => { };
    return modelMocked;
}

module.exports = {
    mockModel
};