import React from 'react';
import { Link } from 'react-router';

export default class BackArrow extends React.Component {

  render() {
    return (
      <div class='row back-icon'>
        <Link to='/ask'>
          <i class="material-icons">arrow_back</i>
          back
        </Link>
      </div>
    )
  }
}
