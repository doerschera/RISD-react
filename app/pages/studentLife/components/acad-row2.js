import React from 'react';
import majors from '../../../data/majors.js';

export default class AcadRow2 extends React.Component {

  render() {
    const row1 = majors.row1.map((major, i) =>
      <div class="col m3" key={i}>
        <a href={major.href} target="_blank">
          <div class="majorCircle" id={major.id}>{major.short}</div>
        </a>
        <p>{major.name}</p>
      </div>
    )

    const row2 = majors.row2.map((major, i) =>
      <div class="col m3" key={i}>
        <a href={major.href} target="_blank">
          <div class="majorCircle" id={major.id}>{major.short}</div>
        </a>
        <p>{major.name}</p>
      </div>
    )

    const row3 =majors.row3.map((major, i) =>
      <div class="col m3" key={i}>
        <a href={major.href} target="_blank">
          <div class="majorCircle" id={major.id}>{major.short}</div>
        </a>
        <p>{major.name}</p>
      </div>
    )

    const row4 = majors.row4.map((major, i) =>
      <div class="col m3" key={i}>
        <a href={major.href} target="_blank">
          <div class="majorCircle" id={major.id}>{major.short}</div>
        </a>
        <p>{major.name}</p>
      </div>
    )

    return(
      <div class="row row-no-margin">
        <div class="col s4 majors white-box" id="majorDescription">
          <h1>Majors</h1>
          <p>
            RISD offers sixteen undergraduate studio majors, which students enter during their sophomore year. Major curriculum begins with studio courses aimed at solidifying the fundamentals of the discipline before moving into progessively more independent coursework. During their final year, each student completes a thesis project and participates in a departmental Senior Show at the Woods-Gerry gallery. <br></br><br></br>
            Use the links to the right to learn more about a specific major and see the curriculum.
          </p>
        </div>
        <div class="col s8 majors white-box" id="majorsList">
          <div class="row" id="mjrRow1">
            {row1}
          </div>
          <div class="row" id="mjrRow2">
            {row2}
          </div>
          <div class="row" id="mjrRow3">
            {row3}
          </div>
          <div class="row" id="mjrRow4">
            {row4}
          </div>
        </div>
      </div>
    )
  }
}
