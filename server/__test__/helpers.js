let models = ['customer'];

// To perform tests with mongoose 
// we require al the models and then override all the used methods to avoid real data modification while testing
module.exports = models.reduce((all, model) => {
    let modelMocked = require(`../models/${model}`);
    modelMocked.find = (...args) => { args.pop()() };
    modelMocked.save = (...args) => { args.pop()() };
    modelMocked.updateOne = (...args) => { args.pop()() };
    modelMocked.deleteOne = (...args) => { args.pop()() };
    return ({ ...all, [`${model}Mock`]: modelMocked })
}, {});