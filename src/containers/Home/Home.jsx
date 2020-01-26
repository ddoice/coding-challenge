import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/customers";

class Home extends Component {

  componentDidMount() {
    const { getCustomers } = this.props;
    getCustomers();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
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