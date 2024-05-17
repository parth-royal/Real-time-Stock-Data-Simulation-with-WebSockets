// import { useEffect } from 'react';
// import { createChart } from 'lightweight-charts';

// function HomePage() {
//   useEffect(() => {
//     // Define container as the HTML element where you want to render the chart
//     const container = document.getElementById('chart-container');

//     // Create the chart and series outside the component
//     const chart = createChart(container);
//     const areaSeries = chart.addAreaSeries();
//     const candlestickSeries = chart.addCandlestickSeries();

//     const socket = new WebSocket('ws://localhost:5000');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//     };

//     socket.onmessage = (event) => {
//       const newData = JSON.parse(event.data);
//       updateChart(newData);
//     };

//     function updateChart(newData) {
//       // Parse the date string into a JavaScript Date object
//       const time = new Date(newData.Date);
    
//       // Update the chart series with new data
//       areaSeries.update({ time, value: newData.ClosingPrice });
//       candlestickSeries.update({
//         time,
//         open: newData.OpenPrice,
//         high: newData.HighPrice,
//         // low: newData.LowPrice,
//         low: newData.LowPrice || newData.ClosingPrice, // Use closing price as a default
//         close: newData.ClosingPrice,
//       });
//     }

//     // Cleanup function to close the socket and any other resources
//     return () => {
//       socket.close();
//       // Add any additional cleanup code here
//     };
//   }, []); // Empty dependency array ensures the effect runs only once after initial render

//   return (
//     <div id="chart-container" style={{ width: '100%', height: '400px' }}>
//       {/* This is where the chart will be rendered */}
//     </div>
//   );
// }

// export default HomePage;

import { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

function HomePage() {
  useEffect(() => {
    // Define container as the HTML element where you want to render the chart
    const container = document.getElementById('chart-container');

    // Create the chart and series outside the component
    const chart = createChart(container, {
      rightOffset: 0, // Fix the right offset
      leftOffset: 0, // Fix the left offset
    });
    const areaSeries = chart.addAreaSeries();
    const candlestickSeries = chart.addCandlestickSeries();

    const socket = new WebSocket('ws://localhost:5000');

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      updateChart(newData);
    };

    function updateChart(newData) {
      // Parse the date string into a JavaScript Date object
      const time = new Date(newData.Date);
    
      // Update the chart series with new data
      areaSeries.update({ time, value: newData.ClosingPrice });
      candlestickSeries.update({
        time,
        open: newData.OpenPrice,
        high: newData.HighPrice,
        // low: newData.LowPrice,
        low: newData.LowPrice || newData.ClosingPrice, // Use closing price as a default
        close: newData.ClosingPrice,
      });
    }

    // Cleanup function to close the socket and any other resources
    return () => {
      socket.close();
      // Add any additional cleanup code here
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div id="chart-container" style={{ width: '100%', height: '400px' }}>
      {/* This is where the chart will be rendered */}
    </div>
  );
}

export default HomePage;
