import React from 'react';
import { Link } from 'react-router';

export default class Arrows extends React.Component {

  render() {
    const arrows = [
      {
        src: '/style/images/arrow-right.png',
        id: 'arrowRight',
        route: 'ask',
      },
      {
        src: '/style/images/arrow-left.png',
        id: 'arrowLeft',
        route: 'studentlife',
      },
      {
        src: '/style/images/down-arrow.png',
        id: 'arrowDown',
        route: 'tour',
      }
    ]

    const showArrows = arrows.map((arrow, key) =>
      <div class="arrow valign-wrapper" key={key} id={arrow.id}>
        <Link to={arrow.route}>
          <img
            src={arrow.src}
            alt={arrow.href}
          />
        </Link>
      </div>
    )

    return (
      <div>
      {showArrows}
      </div>
    )
  }
}
