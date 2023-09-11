import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const generateMockData = (numPoints, maxValue) => {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push(Math.floor(Math.random() * maxValue));
  }
  return data;
};

const Chart = ({ selectedTimePeriod }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let numPoints = 0;
    let maxValue = 0;

    if (selectedTimePeriod === '1h') {
      numPoints = 12;
      maxValue = 50;
    } else if (selectedTimePeriod === '24h') {
      numPoints = 24;
      maxValue = 100;
    } else if (selectedTimePeriod === '30d') {
      numPoints = 30;
      maxValue = 200;
    } else if (selectedTimePeriod === '60d') {
      numPoints = 60;
      maxValue = 150;
    }

    const newData = generateMockData(numPoints, maxValue);
    setChartData(newData);
  }, [selectedTimePeriod]);

  const chartOptions = {
    // ... your existing chart options
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
        dataLabels: false,
        borderRadius: 10, // Add border radius to simulate semi-circle ends
        colors: {
          ranges: [
            {
              from: -1000,
              to: 0,
              color: '#FF0000', // Negative values
            },
            {
              from: 1,
              to: 1000,
              color: '#FFD700', // Positive values
            },
          ],
        },
      },
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      show: false,
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const selectedTimePeriod = w.globals.selectedTimePeriod;
        const value = series[seriesIndex][dataPointIndex];
        
        let label = dataPointIndex + "Aug";
        if(dataPointIndex>30){
          label = Math.floor((dataPointIndex/2))  + "Sep";
        }
        

        return (
          '<div style="background-color: #fff; border: 1px solid #ccc; padding: 8px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); color: #000;">' +
          `<div>${value} signups</div>` +
          `<div>${label}</div>` +
          '</div>'
        );
      },
    },
  };

  return (
    <div>
      <h2>Participants</h2>
      <ApexCharts
        type="bar"
        series={[{ data: chartData }]}
        options={chartOptions}
        height={300}
        id="column-chart"
      />
    </div>
  );
};

export default Chart;
