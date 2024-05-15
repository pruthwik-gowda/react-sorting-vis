export function getSelectionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    for (let i = 0; i < copy.length; i++) {
        let min_idx = i;
        for (var j = i+1; j < copy.length; j++) {
            if (copy[j] < copy[min_idx])
                min_idx = j;
            animations.push([[j,min_idx], false]);
        }
        animations.push([[i, copy[min_idx]], true]);
        animations.push([[min_idx, copy[i]], true]);
        swap(copy,i,min_idx);
    }
  return animations;
}

export function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

export function getSelectionSort(arr) {

    const copy = [...arr];
    for (let i = 0; i < copy.length; i++) {
        let min_idx = i;
        for (var j = i+1; j < copy.length; j++) {
            if (copy[j] < copy[min_idx])
                min_idx = j;
        }
        swap(copy,i,min_idx);
    }

}

