// 소수 카운트
const isPrime = (n) => {
    if(n < 2) return false
    if(n === 2) return true
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0) return false
    }
    return true
}
function solution(numbers) {
    // 1. 숫자 -> 배열
    // 2. 순열
    // 3. 소수 카운트
    let nums = numbers.split('').map(el => Number(el))
    let result = new Set(); // 중복제거
    // 순열 만들기
    const getPermutation = (arr, fixed) => { // 011 -> 101 110
        for(let i=0; i<arr.length; i++){
            const newArr = [...arr]
            newArr.splice(i, 1)
            // '011', '11'
            if(isPrime(parseInt(fixed + arr[i]))) {
            result.add(parseInt(fixed + arr[i]));
            }
            getPermutation(newArr, fixed + arr[i]);
        }
    }
    getPermutation(nums, '')
    return result.size
}