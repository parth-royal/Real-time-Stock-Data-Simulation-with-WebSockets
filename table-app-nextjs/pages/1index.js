// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:5000');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//     };

//     socket.onmessage = (event) => {
//       const newData = JSON.parse(event.data);
//       setData((prevData) => [...prevData, newData]);
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   return (

//     <div id="tvchart"></div>
//     <script> 
//      const renderChart = async () => {
//   const chartProperties = {
//     timeScale: {
//       timeVisible: true,
//       secondsVisible: true,
//     },
//     pane: 0,
//   };
//   const domElement = document.getElementById('tvchart');
//   const chart = LightweightCharts.createChart(domElement, chartProperties);
//   const candleseries = chart.addCandlestickSeries();
//   const klinedata = await getData();
//   candleseries.setData(klinedata);

//     </script>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:5000');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//     };

//     socket.onmessage = (event) => {
//       const newData = JSON.parse(event.data);
//       setData((prevData) => [...prevData, newData]);
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   useEffect(() => {
//     renderChart();
//   }, [data]); // Re-render chart when data changes

//   const getData = async () => {
//     // Implement this function to fetch candlestick data from your server
//     // It should return an array of candlestick data
//     // Example:
//     // return await fetchCandlestickData();
//   };

//   const renderChart = async () => {
//     const chartProperties = {
//       timeScale: {
//         timeVisible: true,
//         secondsVisible: true,
//       },
//       pane: 0,
//     };
//     const domElement = document.getElementById('tvchart');
//     const chart = createChart(domElement, chartProperties);
//     const candleseries = chart.addCandlestickSeries();
//     const klinedata = await getData();
//     candleseries.update(klinedata);
//   };

//   return (
//     <div id="tvchart"></div>
//   );
// }

// export default App;

import { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

function HomePage() {
  useEffect(() => {
    // Your chart rendering and WebSocket code here
  }, []);

  return (
    <div id="chart-container" style={{ width: '100%', height: '400px' }}>
      <h1>hi</h1>
    </div>
  );
}

export default HomePage;
