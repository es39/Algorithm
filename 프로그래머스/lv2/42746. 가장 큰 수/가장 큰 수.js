function solution(numbers) {
    // 1. 이중반복문?
    // 2. 문자열 변환 -> sort 로 비교하여 정렬
    let nums = numbers.map(el => el+'').sort((a, b) => (b+a) - (a+b)) 
    // '6', '10' -> '610' - '106' 
    if(nums[0] === '0') return '0'
    return nums.join('')
}