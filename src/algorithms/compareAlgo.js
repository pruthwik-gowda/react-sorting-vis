import { getMergeSort } from "./mergeSort";
import { getInsertionSort } from "./insertionSort";
import { getQuickSort } from "./quickSort";
import { getSelectionSort } from "./selectionSort";
import { getBubbleSort } from "./bubbleSort";


let arr=[];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100) + 5);
}


let copy1=[...arr];
let copy2=[...arr];
let copy3=[...arr];
let copy4=[...arr];
let copy5=[...arr];


export function compareAlgo(){
    const data=[
    {name:'merge sort', time: mergeSortCompare(copy1)},
    {name:'bubble sort', time: bubbleSortCompare(copy2)},
    {name:'quick sort', time: quickSortCompare(copy3)},
    {name:'selection sort', time: selectionSortCompare(copy4)},
    {name:'insertion sort', time: insertionSortCompare(copy5)}
    ]
    console.log(data[0].name);
    return data;
}

export const data=[
    {name:'merge sort', time: mergeSortCompare(copy1)},
    {name:'bubble sort', time: bubbleSortCompare(copy2)},
    {name:'quick sort', time: quickSortCompare(copy3)},
    {name:'selection sort', time: selectionSortCompare(copy4)},
    {name:'insertion sort', time: insertionSortCompare(copy5)}
]

function mergeSortCompare(arr) {
    let startTime = new Date().getTime(); 
    for(let i=0;i<1500;i++){
      getMergeSort(arr);
    }
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    
    return executionTime;
  }

  function bubbleSortCompare(arr) {
    let startTime = new Date().getTime(); 
    for(let i=0;i<200;i++){
        getBubbleSort(arr);
    }
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    //console.log(executionTime);
    
    return executionTime;
  }

  function quickSortCompare(arr) {
    let startTime = new Date().getTime(); 
    for(let i=0;i<1500;i++){
        getQuickSort(arr);
    }
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    //console.log(executionTime);
    return executionTime;
  }

  
  function selectionSortCompare(arr) {
    let startTime = new Date().getTime(); 
    for(let i=0;i<1500;i++){
        getSelectionSort(arr);
    }
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    //console.log(executionTime);
    
    return executionTime;
  }

  function insertionSortCompare(arr) {
    let startTime = new Date().getTime(); 
    for(let i=0;i<1500;i++){
        getInsertionSort(arr);
    }
    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    //console.log(executionTime);
    
    return executionTime;
  }