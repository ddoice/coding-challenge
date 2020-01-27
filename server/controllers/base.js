class BaseController {

    /**
     * @param {string|model} model either a string to require the model or a model previously required
     * # TODO string or model, not both
     */
    constructor({ model, responseHandler }) {
        this.model = typeof model === 'string'
            ? require(`../models/${model}`)
            : model;
        if (responseHandler) {
            this.responseHandler = responseHandler;
        }
    }

    responseHandler(req, res, next) {
        return (err, data) => {
            try {
                if (err) {
                    const error = new Error(err.message)
                    // #TODO it should flag as safe errors only validation errors
                    err.safe = true;
                    throw err
                }
                res.json({ data });
            } catch (err) {
                next(err)
            }
        }
    }

}

module.exports = BaseController;
