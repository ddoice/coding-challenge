const BaseController = require("./base");

class CustomerController extends BaseController {

    constructor(...args) {
        super({ ...args, model: 'customer' });
    }

    // #TODO pagination and limits
    getAllCustomers(...args) {
        this.model.find({}, this.responseHandler(...args))
    }

    // #TODO investigate, exposing internal MongoDB _id, it's a good idea?
    getCustomer(...args) {
        const [req] = args;
        const { params } = req;
        const { id } = params;
        this.model.find({ _id: id }, this.responseHandler(...args))
    }

    addNewCustomer(...args) {
        const [req] = args;
        const { body } = req;
        const newCustomer = new this.model(body);
        newCustomer.save(this.responseHandler(...args));
    }

    updateCustomer(...args) {
        const [req] = args;
        const { params, body } = req;
        const { id } = params;
        this.model.updateOne({ _id: id }, body, { new: true, runValidators: true, }, this.responseHandler(...args));
    }

    deleteCustomer(...args) {
        const [req] = args;
        const { params } = req;
        const { id } = params;
        this.model.deleteOne({ _id: id }, this.responseHandler(...args));
    }

}

module.exports = CustomerController;