// const useMergeSort = (arr: number[]) => {
//   const mergeSort = (array: number[]): number[] | undefined => {
//     if (array.length <= 1) {
//       return;
//     }

//     const mid = Math.floor(array.length / 2);
//     const left = mergeSort(array.slice(0, mid));
//     const right = mergeSort(array.slice(mid));

//     return merge(left, right);
//   };

//   const merge = (left, right) => {
//     let result = [];
//     let i = 0,
//       j = 0;

//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         result.push(left[i]);
//         i++;
//       } else {
//         result.push(right[j]);
//         j++;
//       }
//     }

//     return result.concat(left.slice(i)).concat(right.slice[j]);
//   };

//   return mergeSort(arr);
// };

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

export default mergeSort;
