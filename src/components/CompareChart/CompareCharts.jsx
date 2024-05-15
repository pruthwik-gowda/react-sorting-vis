import React from 'react';
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

const options = {
    plugins: {
      title: {
        display: true,
        text: 'Comparing the Algorithms',
        font: {
          family: 'Poetsen One', // Change to your desired font family
          size: 18, // Change to your desired font size
          weight: 'bold', // Change to your desired font weight (e.g., 'bold', 'normal', etc.)
          color: 'black' // Change to your desired font color
        }
      },
      legend: {
        labels: {
          font: {
            family: 'Josefin Sans', // Change to your desired font family
            size: 16, // Change to your desired font size
            weight: 'normal', // Change to your desired font weight (e.g., 'bold', 'normal', etc.)
            color: 'black' // Change to your desired font color
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          font: {
            family: 'Josefin Sans', // Change to your desired font family
            size: 16, // Change to your desired font size
            weight: 'normal', // Change to your desired font weight (e.g., 'bold', 'normal', etc.)
            color: 'black' // Change to your desired font color
          }
        }
      },
      x: {
        ticks: {
          font: {
            family: 'Josefin Sans', // Change to your desired font family
            size: 16, // Change to your desired font size
            weight: 'normal', // Change to your desired font weight (e.g., 'bold', 'normal', etc.)
            color: 'black' // Change to your desired font color
          }
        }
      }
    }
  };

const CompareCharts = ({chartData}) => {
  return (
    <Bar data={chartData} options={options}></Bar>
  )
}

export default CompareCharts;

//import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Bar } from "react-chartjs-2";
// import {Chart as ChartJS} from 'chart.js/auto'

// function ComparePopup({showCompare, setShowCompare, title, setTitle, body, setBody, userData, setUserData}) {

//   const handleClose = () => setShowCompare(false);
//   //const handleShow = () => setShow(true);

//   return (
//     <>
//       <Modal
//         className='modal'
//         show={showCompare}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         title={setTitle}
//         body={setBody}

//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {body}
//         </Modal.Body>
//         {/* <Bar chartData={userData}></Bar> */}
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary">Understood</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ComparePopup;


