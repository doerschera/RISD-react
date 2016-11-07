import React from 'react';
import content from '../../data/student-life-content.js';
import Footer from '../components/footer.js';

export default class StudentLife extends React.Component {

  render() {
    console.log(content);
    const row1 = content.row1.map((item, i) =>
      <div class={item.class} id={item.name} key={i}>
        <a href={item.href} target="_blank"><h4 class={item.size}>{item.content}</h4></a>
      </div>
    )

    const row2 = content.row2.map((item, i) =>
      <div class={item.class} id={item.name} key={i}>
        <a href={item.href} target="_blank"><h4 class={item.size}>{item.content}</h4></a>
      </div>
    )

    const row3 = content.row3.map((item, i) =>
      <div class={item.class} id={item.name} key={i}>
        <a href={item.href} target="_blank"><h4 class={item.size}>{item.content}</h4></a>
      </div>
    )

    const row4 = content.row4.map((item, i) =>
      <div class={item.class} id={item.name} key={i}>
        <ul>
          <li><p>{item.label}</p></li>
          <li>
            <a href={item.href} target="_blank"><h4 class={item.size}>{item.content}</h4></a>
          </li>
        </ul>
      </div>
    )

    const row5 = content.row5.map((item, i) =>
      <div class={item.class} id={item.name} key={i}>
        <ul>
          <li><p>{item.label}</p></li>
          <li>
            <a href={item.href} target="_blank"><h4 class={item.size}>{item.content}</h4></a>
          </li>
        </ul>
      </div>
    )

    return(
      <div>
        <div class="container">
          <div class="row row-margin">
            <div class="col m7 white-box" id="slIntro">
              <h2>Student Life</h2>
              <p>
                RISD offers an abundance of resources to enrich the academic and social experience of students. These are just some of the offerings that make RISD a unique place to live and learn.
              </p>
            </div>
            {row1}
          </div>
          <div class="row">
            {row2}
          </div>
          <div class="row">
            {row3}
          </div>
          <div class="row">
            {row4}
          </div>
          <div class="row">
            {row5}
          </div>
        </div>
        <Footer footerID={this.props.footerID}/>
      </div>
    )
  }
}
