import React from 'react'
import Card from '../Card'
import './index.css'

function CardContainer() {
  const Data = [
    {
      color: 'green',
      boxContent: `Today's Generation`,
      innerContent: '14.36',
      span: 'MW',
    },
    {
      color: 'blue',
      boxContent: 'Plant Efficiency',
      innerContent: '95.75',
      span: '%',
    },
    {
      color: '#FFB833',
      boxContent: `Today's Generation`,
      innerContent: '11.81',
      span: 'KWh',
    },
    {
      color: '#FF5733 ',
      boxContent: 'Life Time Energy',
      innerContent: '1406.1',
      span: 'GWh',
    },
  ]

  return (
    <div className="cards-container">
      {Data.map(item => (
        <Card
          color={item.color}
          boxContent={item.boxContent}
          innerContent={item.innerContent}
          span={item.span}
        />
      ))}
    </div>
  )
}

export default CardContainer
