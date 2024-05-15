//import { NUMBER_OF_ARRAY_BARS } from "../components/SortingVis";

function swap(auxiliaryArray, i , j){
    let temp = auxiliaryArray[i];
    auxiliaryArray[i] = auxiliaryArray[j];
    auxiliaryArray[j] = temp;
}

export function getBubbleSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    bubbleSortHelper(copy, copy.length, animations);
    return animations;
  }

export const bubbleSortHelper = (arr, length, animations) => {
    for(let i = 0 ; i < length-1 ; ++i) {
        for(let j = 0 ; j < length-i-1 ; ++j) {
            animations.push([[j,j+1], false]);
            if(arr[j] > arr[j+1]) {
                
                animations.push([[j, arr[j+1]], true]);
                animations.push([[j+1, arr[j]], true]);
                
                swap(arr, j, j+1);
            }
            else {
                animations.push([[j], false]);
            }
        }
    }

};



export function getBubbleSort(arr) {
    const copy = [...arr];
    const animations = [];
    bubbleSortHelper(copy, copy.length, animations);
  }

export const bubbleSortHelperCompare = (arr, length, animations) => {
    for(let i = 0 ; i < length-1 ; ++i) {
        for(let j = 0 ; j < length-i-1 ; ++j) {
            animations.push([[j,j+1], false]);
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }

        }
    }

};

