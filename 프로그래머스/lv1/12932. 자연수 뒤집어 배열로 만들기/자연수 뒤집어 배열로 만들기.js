function solution(n) {
    let nums = n.toString().split('').reverse().map(el => parseInt(el))
    return nums
}