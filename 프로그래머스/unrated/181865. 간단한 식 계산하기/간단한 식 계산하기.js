function solution(binomial) {
    const nums = binomial.split(' ')
    let a = Number(nums[0])
    let b = Number(nums[2])
    if(nums[1] === '+') return a + b
    else if(nums[1] === '-') return a - b
    else return a * b
}