import React from 'react'

import './index.css'
import Row from '../Row'

function Table() {
  const tableData = [
    {
      one: 'Block-1_Invertor-1 232',
      two: '1301.44',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
    {
      one: 'Block-1_Invertor-2 234',
      two: '1292.91',
      three: '960.37',
      four: '973.79',
      five: '52',
      six: '38',
      seven: '962.37',
      eight: '24',
      nine: '659',
      ten: '937.34',
      eleven: '787.34',
      twelve: '20',
    },
    {
      one: 'Block-1_Invertor-3 230',
      two: '1296.97',
      three: '953.83',
      four: '977.28',
      five: '40',
      six: '42',
      seven: '962.83',
      eight: '23',
      nine: '658',
      ten: '937.35',
      eleven: '787.35',
      twelve: '23',
    },
    {
      one: 'Block-1_Invertor-1 234',
      two: '1294.79',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
    {
      one: 'Block-1_Invertor-2 237',
      two: '1298.68',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
    {
      one: 'Block-1_Invertor-3 235',
      two: '1292.92',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
    {
      one: 'Block-1_Invertor-1 236',
      two: '1297.76',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
    {
      one: 'Block-1_Invertor-2 236',
      two: '1297.76',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
    {
      one: 'Block-1_Invertor-3 236',
      two: '1297.76',
      three: '957.1',
      four: '977.55',
      five: '50',
      six: '42',
      seven: '963.1',
      eight: '25',
      nine: '656',
      ten: '937.33',
      eleven: '787.33',
      twelve: '24',
    },
  ]
  return (
    <div className="table">
      <div className="heading-container">
        <h2 className="heading">Inverters Data Table</h2>
        <hr />
        <table>
          <tr>
            <th>Inverter</th>
            <th>Voltage(Kv)</th>
            <th>Current(Amp)</th>
            <th>Active Power(MW)</th>
            <th>Apparent Power(MVA)</th>
            <th>IGBT Tempe(C)</th>
            <th>Inductor Temp(C)</th>
            <th>DC Input Power(W)</th>
            <th>Ambiant Temp(C)</th>
            <th>DC Voltage(V)</th>
            <th>Life Time Energy(J)</th>
            <th>Energy Per Day (KW)</th>
            <th>Water Temp(C)</th>
          </tr>
          <tr>
            <td>Block-1_Invertor-1</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-2</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
          <tr>
            <td>Block-1_Invertor-3</td>
            <td>32</td>
            <td>1301.44</td>
            <td>957.1</td>
            <td>977.55</td>
            <td>50</td>
            <td>42</td>
            <td>963.1</td>
            <td>25</td>
            <td>656</td>
            <td>937.33</td>
            <td>787.33</td>
            <td>24</td>
            <td>
              <button className="button">view</button>
            </td>
          </tr>
        </table>
        {/* {tableData.map(eachRow => (
          <Row
            one={eachRow.one}
            two={eachRow.two}
            three={eachRow.three}
            four={eachRow.four}
            five={eachRow.five}
            six={eachRow.six}
            seven={eachRow.seven}
            eight={eachRow.eight}
            nine={eachRow.nine}
            ten={eachRow.ten}
            eleven={eachRow.eleven}
            twelve={eachRow.twelve}
          />
        ))} */}
      </div>
    </div>
  )
}

export default Table
