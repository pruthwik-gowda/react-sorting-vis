import React, { useState, useEffect, useRef } from 'react';
import './SortingVis.css';
import { getQuickSortAnimations } from '../../algorithms/quickSort';
import { getBubbleSortAnimations } from '../../algorithms/bubbleSort';
import { getMergeSortAnimations } from '../../algorithms/mergeSort';
import { getSelectionSortAnimations } from '../../algorithms/selectionSort';
import { getInsertionSortAnimations } from '../../algorithms/insertionSort';
import Example from '../Modal/Popup';
import { compareAlgo } from '../../algorithms/compareAlgo';
import CompareCharts from '../CompareChart/CompareCharts';

const ARR_LEN = 100;
const MIN_NUM = 5;
const MAX_NUM = 75;
var DELAY = 1;
const ACCESSED_COLOUR = 'red';
const SORTED_COLOUR = '#90EE90';
var dataComp2 = compareAlgo();

//----TODO----
//->design the modal aesthetically
//->add a speed and a size bar so that we can adjust the speed of animation and size of the array

//----maintenance----
//->add swap to a different file

//----LOG----
//->13-05-2024 - *used some logic to figure out how to get the modal to show up after excecution of the animation *used props to add the setTitle setBody nd much more to the modal
//->15-05-2024 - added the barchart and compare feature(installed chart.js and react-chartjs-2 modules)


export default function SortVisualizer(props) {
  const [arr, setArr] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [showCompare,setShowCompare] = useState(false);

  const [userData, setUserData] = useState({
    labels: dataComp2.map((data) => data.name),
    datasets: [
      {
        label: "Time (in ms)",
        data: dataComp2.map((data) => data.time),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1
      },
    ],
    
  });

  const containerRef = useRef(null);

  useEffect(initialiseArray, []);


  function initialiseArray() {
    if (isSorting) return;
    if (isSorted) resetArrayColour();
    setIsSorted(false);
    const arr = [];
    for (let i = 0; i < ARR_LEN; i++) {
      arr.push((MAX_NUM - MIN_NUM) * (i / ARR_LEN) + MIN_NUM);
    }
    shuffle(arr);
    setArr(arr);

  }

  function mergeSort() {
    let startTime = new Date().getTime(); 
    const animations = getMergeSortAnimations(arr);
    animateArrayUpdate(animations);
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    console.log(executionTime);
    if(true){
      setTimeout(() => {
          ShowPopup('Merge Sort',executionTime);
        }, animations.length * DELAY + ARR_LEN * DELAY);
      }
    return executionTime;
  }

  function bubbleSort() {
    let startTime = new Date().getTime(); 
    const animations = getBubbleSortAnimations(arr);
    animateArrayUpdate(animations);
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    console.log(executionTime);
    if(true){
    setTimeout(() => {
        ShowPopup('Bubble Sort',executionTime);
      }, animations.length * DELAY + ARR_LEN * DELAY);
    }
    return executionTime;
  }

  function quickSort() {
    let startTime = new Date().getTime(); 
    const animations = getQuickSortAnimations(arr);
    animateArrayUpdate(animations);
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    console.log(executionTime);
    if(true){
      setTimeout(() => {
          ShowPopup('Quick Sort',executionTime);
        }, animations.length * DELAY + ARR_LEN * DELAY);
      }
      return executionTime;
  }

  
  function selectionSort() {
    let startTime = new Date().getTime(); 
    const animations = getSelectionSortAnimations(arr);
    animateArrayUpdate(animations);
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    console.log(executionTime);
    if(true){
      setTimeout(() => {
          ShowPopup('Selection Sort',executionTime);
        }, animations.length * DELAY + ARR_LEN * DELAY);
      }
      return executionTime;
  }

  function insertionSort() {
    let startTime = new Date().getTime(); 
    const animations = getInsertionSortAnimations(arr);
    animateArrayUpdate(animations);
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    console.log(executionTime);
    if(true){
      setTimeout(() => {
          ShowPopup('Insertion Sort',executionTime);
        }, animations.length * DELAY + ARR_LEN * DELAY);
      }
      return executionTime;
  }

  function animateArrayUpdate(animations) {
    if (isSorting) return;
    setIsSorting(true);
    animations.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            animateArrayAccessPair(i,j)
            //animateArrayAccess(i);
            //animateArrayAccess(j);
          } else {
            const [i] = comparison;
            animateArrayAccess(i);
          }
        } else {
        setTimeout(() => {
            setArr((prevArr) => {
                const [k, newValue] = comparison;
                const newArr = [...prevArr];
                newArr[k] = newValue;
                return newArr;
              });
        }, 0)
          
        }
      }, index * DELAY);
    });
    setTimeout(() => {
      animateSortedArray();
    }, animations.length * DELAY);
  }

  function animateArrayAccess(index) {
    const arrayBars = containerRef.current.children;
    const arrayBarStyle = arrayBars[index].style;
    setTimeout(() => {
      arrayBarStyle.backgroundColor = ACCESSED_COLOUR;
    }, DELAY);
    setTimeout(() => {
      arrayBarStyle.backgroundColor = '';
    }, DELAY * 2);
  }

  function animateArrayAccessPair(index1, index2) {
    const arrayBars = containerRef.current.children;
    const arrayBarStyle1 = arrayBars[index1].style;
    const arrayBarStyle2 = arrayBars[index2].style;
    setTimeout(() => {
      arrayBarStyle1.backgroundColor = ACCESSED_COLOUR;
      arrayBarStyle2.backgroundColor = ACCESSED_COLOUR;
    }, DELAY);
    setTimeout(() => {
      arrayBarStyle1.backgroundColor = '';
      arrayBarStyle2.backgroundColor = '';
    }, DELAY * 2);
  }
  
  function animateSortedArray() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arrayBars.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      setTimeout(
        () => (arrayBarStyle.backgroundColor = SORTED_COLOUR),
        i * DELAY,
      );
    }
    setTimeout(() => {
      setIsSorted(true);
      setIsSorting(false);
    }, arrayBars.length * DELAY);
  }

  function resetArrayColour() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arr.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      arrayBarStyle.backgroundColor = '';
    }
  }

  function ShowPopup(algorithmType, executionTime){
    setTitle(`${algorithmType}`);
    setBody(`Excecution time was ${executionTime} ms`);
    setShow(true);
  }

  function goToCompare(){
    var dataComp = compareAlgo();

    setUserData({
      labels: dataComp.map((data) => data.name),
      datasets: [
        {
          label: "Time (in ms)",
          data: dataComp.map((data) => data.time),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1
        },
      ],
    });
    //setBody("hello");
    //setShowCompare(true);
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <div className="visualizer-container">
      <div className="array-container" ref={containerRef}>
        {arr.map((barHeight, index) => (
          <div
            className="array-bar"
            style={{
              height: `${barHeight}vmin`,
              width: `${100 / ARR_LEN}vw`,
            }}
            key={index}
          ></div>
        ))}
      </div>
      <footer className="app-footer">
        <ul>
          <li>
            <button className="app-button text-btn" onClick={initialiseArray}>
              Create new array
            </button>
          </li>
          <li>
            <button className="app-button text-btn" onClick={mergeSort}>
              Merge sort
            </button>
          </li>
          <li>
            <button className="app-button text-btn" onClick={bubbleSort} >
              Bubble sort
            </button>
          </li>
          <li>
            <button className="app-button text-btn" onClick={quickSort}>
              Quick sort
            </button>
          </li>
          <li>
            <button className="app-button text-btn" onClick={selectionSort}>
              Selection sort
            </button>
          </li>
          <li>
            <button className="app-button text-btn" onClick={insertionSort}>
              Insertion sort
            </button>
          </li>
        </ul>
        <Example show={show} setShow={setShow} title={title} setTitle={setTitle} body={body} setBody={setBody}></Example>
        {/* <ComparePopup show={showCompare} setShow={setShowCompare} title={title} setTitle={setTitle} body={body} setBody={setBody} userData={userData} setUserData={setUserData}></ComparePopup> */}
      </footer>
      <div className='compare-chart-container'>
        <div className='show-compare-chart'><CompareCharts chartData={userData}></CompareCharts></div>
        <button className="app-button-compare text-btn" onClick={goToCompare}>
              Compare Algorithms
        </button>
        <button className="app-button-compare text-btn go-back-btn" onClick={goToTop}>
              Go Back
        </button>
      </div>
      
    </div>

  );
}

const shuffle = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
};