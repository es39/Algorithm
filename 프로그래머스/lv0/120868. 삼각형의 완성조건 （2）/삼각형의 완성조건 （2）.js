function solution(sides) {
    // 1. sides에서 가장 큰 수가 가장 큰 변일 때
    // 2. 나머지 한 변이 가장 긴 변일 때
    let result = []
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let dif = max - min
    let sum = max + min
    return sum-dif-1
}