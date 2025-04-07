import React from 'react';

// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";


import './Investments.css'

import circle from '../../../icons/circle-small.svg'
import chart from '../../../icons/chart-pie-alt.svg'

import graph from '../../../images/graph.png'
import Datatable from './datatable/Datatable';
import SemiPieChart from './semipiechart/SemiPieChart';



const Investments = () => {

    const data = [
        { name: "Q4 2021", currentYear: 17, lastYear: 12 },
        { name: "Q1 2022", currentYear: 3, lastYear: 6 },
        { name: "Q2 2022", currentYear: 11, lastYear: 6 },
        { name: "Q3 2022", currentYear: 20, lastYear: 9 },
        { name: "Q4 2022", currentYear: 2, lastYear: 5 },
        { name: "Q1 2023", currentYear: 25, lastYear: 20 },
        { name: "Q2 2023", currentYear: 15, lastYear: 5 },
        { name: "Q3 2023", currentYear: 20, lastYear: 22 },

    ];

    return (
        <div className='incestments-container'>
            <div className='investments-heading'>
                <h3>My Investments</h3>
                <p>There is the latest update for the last 7 days. <span style={{ color: "red" }}>Check now</span></p>
            </div>

            <div className='investments-list'>
                <div className='investments-list-container-one'>
                    <div className='invesrments-list-container-one-div'>
                        <div className='invesrments-list-container-one-div-sub-div-one'>
                            <h4>Total Investments</h4>
                            <h2>1,23,890</h2>
                            <p>since yesterday</p>
                        </div>
                        <div className='invesrments-list-container-one-div-sub-div-two'>
                            <img src={graph} alt="" className='garphcss' />
                            <p>29.95</p>
                        </div>
                    </div>
                </div>

                <div className='investments-list-container-one'>
                    <div className='invesrments-list-container-one-div'>
                        <div className='invesrments-list-container-one-div-sub-div-one'>
                            <h4>Total Earnings</h4>
                            <h2>1,45,000</h2>
                            <p>since last week</p>
                        </div>
                        <div className='invesrments-list-container-one-div-sub-div-two'>
                            <img src={graph} alt="" className='garphcss' />
                            <p>68.95</p>
                        </div>
                    </div>
                </div>

                <div className='investments-list-container-one'>
                    <div className='invesrments-list-container-one-div'>
                        <div className='invesrments-list-container-one-div-sub-div-one'>
                            <h4>Total Returns</h4>
                            <h2>23,789</h2>
                            <p>since last month</p>
                        </div>
                        <div className='invesrments-list-container-one-div-sub-div-two'>
                            <img src={graph} alt="" className='garphcss' />
                            <p>17.95</p>
                        </div>
                    </div>
                </div>
                <div className='investments-list-container-one'>
                    <div className='invesrments-list-container-one-div'>
                        <div className='invesrments-list-container-one-div-sub-div-one'>
                            <h5>Pending investments</h5>
                            <h2>23,789</h2>
                            <p>since last month</p>
                        </div>
                        <div className='invesrments-list-container-one-div-sub-div-two'>
                            <img src={graph} alt="" className='garphcss' />
                            <p>17.95</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='investments-list-headings'>
                <ul>
                    <li>Active investments(3)</li>
                    <li>pending(3)</li>
                    <li>capital call(1)</li>
                    <li>past investments</li>
                    <div className='buttons-div'>
                        <button className='ul-button-one'>Availabel offerings</button>
                        <button className='ul-button-two'><i></i>Account statements</button>
                        <i></i>
                    </div>
                </ul>

            </div>

            <div className='investment-chart'>
                <div className='investment-bar-chart'>
                    <div className="investment-chart-container">
                        <div className='investment-chart-container-heading'>
                            <div className='heading-one-'>
                                <div style={{ display: 'flex' }}>
                                    <img src={chart} alt="" width="20px" />
                                    <div style={{ marginLeft: "10px" }}>
                                        <h3>Distribution</h3>
                                        <p>Trailing 2 years</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <img src={circle} alt="" width="10px" /><h3 style={{ marginLeft: '10px' }}>Accumulated</h3>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <img src={circle} alt="" width="10px" /><h3 style={{ marginLeft: '10px' }}>Period</h3>
                                </div>
                            </div>
                            <div className='heading-two-'>
                                <select name="" id="">
                                    <option value="">By Payment date</option>
                                </select>
                            </div>
                        </div>

                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data} barGap={10}>
                                <XAxis dataKey="name" />
                                {/* <YAxis /> */}
                                {/* <Tooltip /> */}
                                <YAxis
                                    ticks={[0, 5, 10, 15, 20, 25]}
                                    tickFormatter={(value) => `₹${value}`}
                                />
                                <Tooltip formatter={(value) => `₹${value}`} />
                                <Legend />
                                <Bar dataKey="currentYear" fill="#2a437d" barSize={20} name="2024" />
                                <Bar dataKey="lastYear" fill="#111211" barSize={20} name="2023" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='investment-pie-chart'>
                    <div className='investment-pie-chart-heading'>
                        <div>
                            <h3>Portfolio</h3>
                            <p>Active investments</p>
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>

                    <div className='investment-pie-chart-graph'>
                        <SemiPieChart />
                    </div>

                    <div className='investment-pie-chart-details'>
                        <div>
                            <h4>Atlantic cre..</h4>
                            <h2>25%</h2>
                        </div>

                        <div>
                            <h4>Sunbelt Oppo..</h4>
                            <h2>25%</h2>
                        </div>

                        <div>
                            <h4>Southport e..</h4>
                            <h2>50%</h2>
                        </div>
                    </div>

                </div>
            </div>

            <div className='investment-table'>
                <div className='investment-table-heading'>
                    <div className='investment-table-heading-one'>
                        <h1>Investment Overview</h1>
                        <p>Keep eye on your investment that can booom!!</p>
                    </div>
                    <div className='investment-table-heading-one-buttons'>
                        <button>Sort by</button>
                        <select>
                            <option value="">All profiles</option>
                        </select>
                    </div>
                </div>
                <div className='investment-table-heading'>
                    <div className='investment-table-heading-two'>
                        <button>Choose a date</button>

                        <select name="" id="">
                            <option value="">Rs Property</option>
                        </select>

                        <select name="" id="">
                            <option value="">My Investments</option>
                        </select>

                        <select name="" id="">
                            <option value="">Low To High</option>
                        </select>
                    </div>
                    <div className='investment-table-heading-two-'>
                        <button>Clear All</button>
                    </div>
                </div>
                <div className='investment-table-data'>
                    <Datatable />
                </div>
            </div>

        </div>
    )
}

export default Investments