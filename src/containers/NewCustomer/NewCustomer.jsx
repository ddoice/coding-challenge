import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/customers";
import Input from '../../components/Input/Input';
import BagSelector from '../../components/BagSelector/BagSelector';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Alert from '../../components/Alert/Alert';
import { SCNewCustomerContainer, SCNewCustomerForm } from './styles';

class NewCustomer extends Component {

  state = { name: '', bags: 1, errorMessages: {}, forceDisable: false, registerSuccess : false }

  handleChange = (name) => ({ target }) => {
    const { value } = target
    this.setState({ [name]: value })
  }

  handleSaveCustomer = async () => {
    const { name, bags } = this.state;
    const { addCustomer } = this.props;
    await addCustomer({ name, bags })
      .then(_ => {
        this.setState({ forceDisable: true, registerSuccess: true });
        setTimeout(()=>{
          this.props.history.push('/')
        }, 2000);        
      })
      .catch(_ => {

      })
  }

  invalidName = (name) => {
    if (name.length > 128) {
      return 'Name length must not exceed 128 characters.';
    }
    if (name.split(' ').length < 2) {
      return 'Name should have 2 or more words.';
    }
    if (!/[A-Z]/.test(name.slice(0, 1))) {
      return 'First letter must be upper case.';
    }
    return false;
  }

  invalidBags = (bags) => {
    return bags < 1 ? "Choose at least 1 bag." : bags > 9 ? "Please choose max 5 bags." : false;
  }

  isInvalid = () => {
    const { bags, name, errorMessages } = this.state;
    errorMessages.name = this.invalidName(name);
    errorMessages.bags = this.invalidBags(bags);
    return Object.keys(errorMessages).reduce((all, item) => all + (errorMessages[item] ? 1 : 0), 0)
  }

  render() {
    const disabled = this.isInvalid();
    const { errorMessages, forceDisable, registerSuccess } = this.state;
    const { customers } = this.props;
    const { loading, error } = customers;
    console.log(this.props.customers);
    return (
      <SCNewCustomerContainer>
        <SCNewCustomerForm>
          <Header>New customer</Header>
          <Input disabled={forceDisable || loading} placeHolder="Type your name" handleChange={this.handleChange('name')} value={this.state.name} errorMessage={errorMessages.name}></Input>
          <BagSelector disabled={forceDisable || loading} handleChange={this.handleChange('bags')} errorMessage={errorMessages.bags} value={this.state.bags}></BagSelector>
          {!registerSuccess && <Button disabled={forceDisable || loading || disabled} message="Register" callback={this.handleSaveCustomer}></Button>}
          {error && <Header>{error}</Header>}
          {registerSuccess && <Alert>Registro completado!</Alert>}
        </SCNewCustomerForm>
      </SCNewCustomerContainer>
    )
  }
}

const mapStateToProps = ({ customers }) => ({ customers });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCustomer));
