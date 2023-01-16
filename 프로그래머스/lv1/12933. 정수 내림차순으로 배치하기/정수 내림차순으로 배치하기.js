function solution(n) {
    let nums = n.toString().split('').map(el => parseInt(el)).sort((a, b) => b-a).join('')
    return parseInt(nums)
}