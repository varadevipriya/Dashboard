import React from 'react'

import './index.css'

function Card(props) {
  const {color, boxContent, innerContent, span} = props
  const card = {
    backgroundColor: 'white',
    width: '20%',
    borderLeft: `solid 5px ${color}`,
    margin: '10px',
    paddingLeft: '30px',
    height: '100px',
    boxShadow: 'rgba(100, 100, 111, 0.5) 0px 7px 29px 0px',
  }
  const box = {
    backgroundColor: `${color}`,
    width: '150px',
    height: '20px',
    color: '#fff',
  }
  const content = {
    color: `${color}`,
    fontSize: '30px',
  }
  return (
    <div style={card}>
      <div style={box}>
        <h5 className="box-content">{boxContent}</h5>
      </div>
      <h1 style={content}>
        {innerContent} <span className="span">{span}</span>
      </h1>
    </div>
  )
}

export default Card
