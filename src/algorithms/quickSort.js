
export function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

export function getQuickSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];
  quickSortHelper(copy, 0, copy.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, left, right, animations) {
  if (right <= left) return;
  const part = partition(arr, left, right, animations);
  quickSortHelper(arr, left, part, animations);
  quickSortHelper(arr, part + 1, right, animations);
}

function partition(arr, left, right, animations) {
  let i = left + 1;
  let j = right;
  const pivot = arr[left];
  while (true) {
    while (arr[i] <= pivot) {
      if (i === right) break;
      animations.push([[i], false]);
      i = i + 1;
    }
    while (arr[j] >= pivot) {
      if (j === left) break;
      animations.push([[j], false]);
      j = j - 1;
    }
    if (j <= i) break;
    animations.push([[i], false]);
    animations.push([[j], false]);
    animations.push([[i, arr[j]], true]);
    animations.push([[j, arr[i]], true]);
    swap(arr, i, j);
  }
  animations.push([[left, arr[j]], true]);
  animations.push([[j, arr[left]], true]);
  swap(arr, left, j);
  return j;
}



//compare
export function getQuickSort(arr) {

  const copy = [...arr];
  quickSortHelperCompare(copy, 0, copy.length - 1);

}

function quickSortHelperCompare(arr, left, right) {
  if (right <= left) return;
  const part = partitionCompare(arr, left, right);
  quickSortHelperCompare(arr, left, part);
  quickSortHelperCompare(arr, part + 1, right);
}

function partitionCompare(arr, left, right) {
  let i = left + 1;
  let j = right;
  const pivot = arr[left];
  while (true) {
    while (arr[i] <= pivot) {
      if (i === right) break;
      i = i + 1;
    }
    while (arr[j] >= pivot) {
      if (j === left) break;
      j = j - 1;
    }
    if (j <= i) break;
    swap(arr, i, j);
  }
  swap(arr, left, j);
  return j;
}