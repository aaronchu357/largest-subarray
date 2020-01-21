// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
function largestSubarraySum(array) {

  if(array.length === 1) {
    return array[0]
  } else if (array.length === 0) {
    return 0
  } else if (array.reduce((a,c) => a + c) < 0) {
    return 0
  }

  let sums = {}
  let temp = [...array]
  let i = temp.length - 1
  while (i > 0) {
    // let sum = temp.reduce((a,c) => a + c)
    // sums[sum] = 0
    let j = 0
    let sum = 0
    while (j !== i) {
      sum += temp[j]
      j++;
    }
    sums[sum] = 0
    if (j < i) {
      
    }
    i--;
  }
  let sumsOnly = Object.keys(sums)
  return parseInt(sumsOnly[sumsOnly.length - 1])
}