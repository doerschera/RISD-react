import React from 'react';
import { connect } from 'react-redux';


@connect((store) => {
  return {
    error: store.ask.error
  }
})
export default class Error extends React.Component {

  render() {
    return <p>{this.props.error}</p>
  }
}
