
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BackendStatus = () => {
//   const [backendMessage, setBackendMessage] = useState('');

//   useEffect(() => {
//     const fetchDataFromBackend = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/status');
//         setBackendMessage(response.data.message);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchDataFromBackend();
//   }, []);

//   return (
//     <div>
//       <h2>Backend Connection Status:</h2>
//       <p>{backendMessage}</p>
//     </div>
//   );
// };

// export default BackendStatus;
