import React from 'react'
import Progress from 'react-progressbar'

const divStyle = {
  marginBottom: '10px',
};

const ProgressBar = (props) => (
  <React.Fragment >
    <span>
      <Progress completed={props.p} />
    </span>
    <span style={divStyle}>{props.p}%</span>
  </React.Fragment>
)

export default ProgressBar
