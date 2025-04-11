import React from 'react'

import './Home.css'


import image from '../../../images/image_one.jpeg'
import graph from '../../../images/graph.png'

import one from '../../../images/one.png'
import two from '../../../images/two.png'

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";
import PieChartComponent from './piechart/Piechart'

// Register required Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]; // Example labels

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      // data: [65, 59, 80, 81, 56, 55, 40],
      data: [50, 40, 60, 30, 40, 60, 40],
      fill: false,
      borderColor: "rgb(43, 210, 34)",
      tension: 0.8
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom"
    }
  },
  scales: {
    x: { display: true },
    y: { display: true }
  }
};

const days = ["M", "T", "W", "T", "F", "S", "s"]

const datas = {
  labels: days,
  datasets: [
    {
      label: "",
      // data: [65, 59, 80, 81, 56, 55, 40],
      data: [20, 35, 30, 20, 30, 15, 25],
      fill: false,
      borderColor: "rgb(246, 212, 102)",
      tension: 0.8
    }
  ]
};

const option = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom"
    }
  },
  scales: {
    x: { display: true },
    y: { display: false }
  }
};



const Home = () => {
  return (
    <div className='dashboard-containers'>
      <div className='dashboard-heading'>
        <h2>Dashboard Overview</h2>
        <p>There is the latest update for the last 7 days. <span>check now</span></p>
      </div>

      <div className='dashboard-images'>
        <div className='dashboard-images-heading'>
          <h1>#1 Your All-in-one Real Estate <br /> Investment Platform</h1>
          <p>Effortlessly discover top real estate and <br />connect with agent for smart investments</p>
        </div>
        <div className='dashboard-images-one'>
          <img src={image} alt="" />
        </div>
      </div>

      <div className='dashboard-sub-containers'>
        <div className='container-one'>
          <div className='container-one-heading'>
            <h3>Total Investments</h3>
            <h2>1,23,890</h2>
            <p>Sine Yesterday</p>
          </div>
          <div className='container-one-image'>
            <img src={graph} alt="" />
            <p>25.95% ^</p>
          </div>
        </div>
        <div className='container-one'>
          <div className='container-one-heading'>
            <h3>Total Income</h3>
            <h2>1,45,000</h2>
            <p>Sine last week</p>
          </div>
          <div className='container-one-image'>
            <img src={graph} alt="" />
            <p>68.95% ^</p>
          </div>

        </div>
        <div className='container-one'>
          <div className='container-one-heading'>
            <h3>Total Withdrawals</h3>
            <h2>23,789</h2>
            <p>Sine last Month</p>
          </div>
          <div className='container-one-image'>
            <img src={graph} alt="" />
            <p>17.95% </p>
          </div>
        </div>
      </div>

      <div className='dashboard-charts-one'>
        <div className='charts-one'>
          <div className='charts-one-heading'>
            <h2>Growth Rate</h2>
            <select>
              <option value="">weekly</option>
            </select>
          </div>
          <div className='charts-one-graph'>
            <Line data={data} options={options} />
          </div>
        </div>
        <div className='charts-two'>
          {/* die chart goes here */}
          <div className='charts-two-one'>
            <h3>Available funds</h3>
          </div>
          <div className='charts-two-two'>
            {/* die chart goes here */}
            <PieChartComponent />
          </div>
          <div className='charts-two-three'>
            <span className='border-one'><h2>3,80,000</h2><p>current balance</p></span>
            <span className='border-two'><h2>100,000</h2><p>Income</p></span>
            <span className='border-three'><h2>88,000</h2><p>expense</p></span>
          </div>
          <div className='charts-two-four'>
            <button className='withdraw-button'>Withdraw</button>
            <button className='deposit-button'>Deposit</button>
          </div>
        </div>
      </div>

      <div className='dashboard-graph-table'>

        <div className='dashboard-graph-earnings'>
          <div className='graph-heading'>
            <h3>Penidng Earnings</h3>
            <section>
              <option value="">...</option>
            </section>
          </div>

          <div className='graph-income'>
            {/* graph goes here */}
            <Line data={datas} options={option} />
          </div>

          <div className='graph-content'>
            <p>Total Income received</p>
            <h2>1,45,000</h2>
          </div>

          <div className='graph-content-two'>
            <div>
              <p>RS Property</p>
              <h3 style={{ marginTop: '12px' }}>1,45,000</h3>
            </div>

            <p style={{ marginTop: '30px', color: 'green' }}>+14.02%</p>
            <img src={one} alt="" width="160px" height="50px" />
          </div>

          <div className='graph-content-two'>
            <div>
              <p>RS Property</p>
              <h3 style={{ marginTop: '12px' }}>1,45,000</h3>
            </div>

            <p style={{ marginTop: '30px', color: 'orange' }}>- 4.02%</p>
            <img src={two} alt="" width="160px" height="50px" />
          </div>
        </div>

        <div className='dashboard-graph-table-one'>

          <div className='table-one-heading'>
            <h3>Upcoming Payout</h3>
            <select name="" id="">
              <option value="">Weekly</option>
            </select>
          </div>

          <div className='table-one-data'>
            {/* <div className='table-data'>
              <div className='table-datas-row'>
                <div className='image-one'>
                  <img src={image} alt="" width="70px" />
                </div>
                <div className='data-one'>
                  <h3>RA Property</h3>
                  <p>UAE</p>
                </div>
              </div>
              <div className='data-two' >
                <p>Rate</p>
                <h4>+14.02%</h4>
              </div>
              <div className='data-three'>
                <p>Price</p>
                <h4>39,786</h4>
              </div>
              <div className='data-three'>
                <p>Dtae & time</p>
                <h4>20 Mar 4:00 PM</h4>
              </div>
              <div className='data-four'>
                <p>Status</p>
                <button>pending</button>
              </div>
            </div> */}

            <div className='table-data'>
              <div className='table-datas-row'>
                <div className='image-one'>
                  <img src={image} alt="" width="70px" />
                </div>
                <div className='data-one'>
                  <h3>RA Property</h3>
                  <p>UAE</p>
                </div>
              </div>
              <div className='data-two' >
                <p>Rate</p>
                <h4>+14.02%</h4>
              </div>
              <div className='data-three'>
                <p>Price</p>
                <h4>39,786</h4>
              </div>
              <div className='data-three'>
                <p>Dtae & time</p>
                <h4>20 Mar 4:00 PM</h4>
              </div>
              <div className='data-four'>
                <p>Status</p>
                <button>pending</button>
              </div>
            </div>

            <div className='table-data'>
              <div className='table-datas-row'>
                <div className='image-one'>
                  <img src={image} alt="" width="70px" />
                </div>
                <div className='data-one'>
                  <h3>RA Property</h3>
                  <p>UAE</p>
                </div>
              </div>
              <div className='data-two' >
                <p>Rate</p>
                <h4>+14.02%</h4>
              </div>
              <div className='data-three'>
                <p>Price</p>
                <h4>39,786</h4>
              </div>
              <div className='data-three'>
                <p>Dtae & time</p>
                <h4>20 Mar 4:00 PM</h4>
              </div>
              <div className='data-four'>
                <p>Status</p>
                <button>pending</button>
              </div>
            </div>

            <div className='table-data'>
              <div className='table-datas-row'>
                <div className='image-one'>
                  <img src={image} alt="" width="70px" />
                </div>
                <div className='data-one'>
                  <h3>RA Property</h3>
                  <p>UAE</p>
                </div>
              </div>
              <div className='data-two' >
                <p>Rate</p>
                <h4>+14.02%</h4>
              </div>
              <div className='data-three'>
                <p>Price</p>
                <h4>39,786</h4>
              </div>
              <div className='data-three'>
                <p>Dtae & time</p>
                <h4>20 Mar 4:00 PM</h4>
              </div>
              <div className='data-four'>
                <p>Status</p>
                <button>pending</button>
              </div>
            </div>

            <div className='table-data'>
              <div className='table-datas-row'>
                <div className='image-one'>
                  <img src={image} alt="" width="70px" />
                </div>
                <div className='data-one'>
                  <h3>RA Property</h3>
                  <p>UAE</p>
                </div>
              </div>
              <div className='data-two' >
                <p>Rate</p>
                <h4>+14.02%</h4>
              </div>
              <div className='data-three'>
                <p>Price</p>
                <h4>39,786</h4>
              </div>
              <div className='data-three'>
                <p>Dtae & time</p>
                <h4>20 Mar 4:00 PM</h4>
              </div>
              <div className='data-four'>
                <p>Status</p>
                <button>pending</button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home