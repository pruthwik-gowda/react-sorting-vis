export function getMergeSortAnimations(arr) {
  const copy = [...arr];
  const len = copy.length;
  const aux = Array(len);
  const animations = [];
  mergeSortHelper(copy, aux, 0, len - 1, animations);
  return animations;
}

function mergeSortHelper(arr, aux, left, right, animations) {
  if (right <= left) return;
  const mid = left + Math.floor((right - left) / 2);
  mergeSortHelper(arr, aux, left, mid, animations);
  mergeSortHelper(arr, aux, mid + 1, right, animations);
  merge(arr, aux, left, mid, right, animations);
}

function merge(arr, aux, left, mid, right, animations) {
  for (let i = left; i <= right; i++) aux[i] = arr[i];
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      animations.push([[j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j++];
    } else if (j > right) {
      animations.push([[i], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      animations.push([[i, j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j++];
    } else {
      animations.push([[i, j], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i++];
    }
  }
}

//for the compare
export function getMergeSort(arr) {

  const copy = [...arr];
  const len = copy.length;
  const aux = Array(len);
  mergeSortHelperCompare(copy, aux, 0, len - 1);

  
}

function mergeSortHelperCompare(arr, aux, left, right) {
  if (right <= left) return;
  const mid = left + Math.floor((right - left) / 2);
  mergeSortHelperCompare(arr, aux, left, mid);
  mergeSortHelperCompare(arr, aux, mid + 1, right);
  mergeCompare(arr, aux, left, mid, right);
}

function mergeCompare(arr, aux, left, mid, right) {
  for (let i = left; i <= right; i++) aux[i] = arr[i];
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = aux[j++];
    } else if (j > right) {
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      arr[k] = aux[j++];
    } else {
      arr[k] = aux[i++];
    }
  }
}