function solution(n, arr1, arr2) {
  // 모두 공백이어야 공백, 하나라도 벽이면 벽, 벽은 1, 공백은 0
  // 1. 이진수로 변환 (자릿수 맞추기 위해서 앞부분은 0으로 채우기)
  // 2. 자릿수끼리 비교 (1이 하나라도 있으면 #, 0만 있다면 공백)
  const binaryArray1 = arr1.map(el => {
      const binary = el.toString(2)
      // n만큼 0으로 채워주기
      return '0'.repeat(n-binary.length).concat(binary)
  })
  const binaryArray2 = arr2.map(el => {
      const binary = el.toString(2)
      return '0'.repeat(n-binary.length).concat(binary)
  })
  console.log(binaryArray1)
  console.log(binaryArray2)
  // 각 배열 요소들의 자릿수를 비교
  const result = binaryArray1.map((binary, binaryIdx) => {
    return binary.split('').map((el, idx) => {
      return (el | binaryArray2[binaryIdx][idx]) === 1 ? '#' : ' '
    }).join('')
  })
  return result
}