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
        const { id } = args.params;
        this.model.find({ _id: id }, this.responseHandler(...args))
    }

    addNewCustomer(...args) {
        const newCustomer = new Customer(req.body);
        newCustomer.save(this.responseHandler(...args));
    }

    updateCustomer(...args) {
        const { id } = args.params;
        this.model.updateOne({ _id: id }, req.body, { new: true }, this.responseHandler(...args));
    }

    deleteCustomer(...args) {
        const { id } = args.params;
        this.model.deleteOne({ _id: id }, this.responseHandler(...args));
    }

}

module.exports = CustomerController;