
const expect = require('chai').expect;
const Customer = require('../../models/customer');

describe('Customer - validations', () => {
    it('Create new customer without name, should fail', (done) => {
        let customer = new Customer();
        customer.validate((err) => {
            expect(err.errors.name).to.exist;
            done();
        });
    });
    it('Create customer name supplied with only one word, should fail', (done) => {
        let customer = new Customer({ name: 'John' });
        customer.validate((err) => {
            expect(err.errors.name.message).to.equal('Name should have 2 or more words.');
            done();
        });
    });
    it('Create customer first letter of name supplied is not uppercase, should fail', (done) => {
        let customer = new Customer({ name: 'john Doe' });
        customer.validate((err) => {
            expect(err.errors.name.message).to.equal('First letter must be upper case.');
            done();
        });
    });
    it('Create customer with name longer than 128 characters, should fail', (done) => {
        let customer = new Customer({ name: 'john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe john Doe' });
        customer.validate((err) => {
            expect(err.errors.name.message).to.equal('Name length must not exceed 128 characters.');
            done();
        });
    });    
    it('Create customer with no bags, should fail', (done) => {
        let customer = new Customer({ name: 'John Doe' });
        customer.validate((err) => {
            expect(err.errors.bags).to.exist;
            done();
        });
    });
    it('Create customer with less than 1 bags, should fail', (done) => {
        let customer = new Customer({ name: 'John Doe', bags: 0 });
        customer.validate((err) => {
            expect(err.errors.bags).to.exist;
            done();
        });
    });
    it('Create customer with more than 5 bags, should fail', (done) => {
        let customer = new Customer({ name: 'John Doe', bags: 6 });
        customer.validate((err) => {
            expect(err.errors.bags).to.exist;
            done();
        });
    });
});

describe('Customer - valid', () => {
    it('Create customer with valid name and bags, should pass', (done) => {
        let customer = new Customer({ name: 'John Doe', bags: 5 });
        customer.validate((err) => {
            expect(err).to.not.exist;
            done();
        });
    });
});