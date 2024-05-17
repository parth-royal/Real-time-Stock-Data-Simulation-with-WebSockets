// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/random_data');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Random Financial Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Closing Price</th>
//             <th>Open Price</th>
//             <th>High Price</th>
//             <th>Volume</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.Date}</td>
//               <td>{item.ClosingPrice}</td>
//               <td>{item.OpenPrice}</td>
//               <td>{item.HighPrice}</td>
//               <td>{item.Volume}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => [...prevData, newData]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Random Financial Data</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Closing Price</th>
            <th>Open Price</th>
            <th>High Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Date}</td>
              <td>{item.ClosingPrice}</td>
              <td>{item.OpenPrice}</td>
              <td>{item.HighPrice}</td>
              <td>{item.Volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
