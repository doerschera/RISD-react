import React from 'react';

export default class AcadRow1 extends React.Component {

  render() {
    return (
      <div class="row row-margin">
        <div class="col s7 white-box" id="foundations">
          <h1>Foundations</h1>
          <p>
            All first-year students take Experimental and Foundation Studies, three core studio courses meant to challenge and strengthen your ability and critical thinking. Each studio-- Design, Drawing, and Spatial Dynamics-- meets for one full day a week, with additional work outside of class time. Students are introduced to broad range of techniques and processes and are encouraged to explore their individual interests.
            This intensive, collaborative investigation of abstract and conceptual issues that touch every discipline is considered fundamental to the educational experience at RISD. <br></br><br></br>In addition to the three studios, first-year students take two liberal arts classes each semester. </p>
          <a href="http://www.risd.edu/academics/foundation-studies/" target="_blank">Learn more about Foundations</a>
        </div>
        <div class="col s5 white-box" id="liberalArts">
          <h1>Liberal Arts</h1>
          <p>
            Liberal Arts comprises one-third of the credits you take as a RISD student. Classes in History of Art and Visual Culture, History, Philosophy and the Social Sciences, and Literary Arts and Studies compliment and broaden studio research. For students who wish to explore an area deeper, four different liberal arts concentrations are offered. Additionally, students are able to take courses at Brown University through cross-registration. Many students use cross-registration to explore courses in other disciplines, such as experimental sciences and foreign languages.
          </p>
          <a href="http://www.risd.edu/academics/division-of-liberal-arts/" target="_blank">Learn more about Liberal Arts</a>
        </div>
      </div>
    )
  }
}
