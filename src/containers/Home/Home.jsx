import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/customers";
import { SCHomeBackground, SCHomeCardsContainer, SCHomeContainer } from './styles'
import ButtonFixed from '../../components/ButtonFixed/ButtonFixed';
import CardCustomer from '../../components/CardCustomer/CardCustomer';
import Background from './NoLuggage.png';
import IconPlus from './IconPlus.svg';

class Home extends Component {

  componentDidMount() {
    const { getCustomers } = this.props;
    getCustomers();
  }

  render() {
    const { customers } = this.props;
    const { data = [] } = customers;
    return (
      <SCHomeContainer>

        <SCHomeBackground src={Background} faded={data.length > 0}>
        </SCHomeBackground>

        <SCHomeCardsContainer>
          {data.map(customer => <CardCustomer name={customer.name} bags={customer.bags}></CardCustomer>)}
        </SCHomeCardsContainer>

        <ButtonFixed img={IconPlus} linkTo="/new" ></ButtonFixed>

      </SCHomeContainer>
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
)(Home));