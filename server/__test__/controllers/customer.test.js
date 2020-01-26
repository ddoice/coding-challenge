
const expect = require('chai').expect;
const { mockModel } = require('../../helpers');
const customerModel = mockModel('customer');
const CustomerController = require('../../controllers/customer');

describe('Customer - validations', () => {
    it('Create new customer without name, should fail', (done) => {
        let controller = new CustomerController({ model: customerModel });
        var gettterSpy = expect.spyOn(customerModel.prototype, 'find');
        controller.getAllCustomers();
        expect(barSpy).toHaveBeenCalled();    
        done();
    });
});