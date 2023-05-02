function solution(numbers) {
    let nums = numbers.map(el => el+'').sort((a, b) => (b+a) - (a+b))
    if(nums[0] === '0') return '0'
    return nums.join('')
}