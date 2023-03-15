import './index.css'

import React from 'react'

function Row(props) {
  const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  } = props
  return (
    <div className="row">
      <h5>{one}</h5>
      <h5>{two}</h5>
      <h5>{three}</h5>
      <h5>{four}</h5>
      <h5>{five}</h5>
      <h5>{six}</h5>
      <h5>{seven}</h5>
      <h5>{eight}</h5>
      <h5>{nine}</h5>
      <h5>{ten}</h5>
      <h5>{eleven}</h5>
      <h5>{twelve}</h5>
      <button className="button">view</button>
    </div>
  )
}

export default Row
