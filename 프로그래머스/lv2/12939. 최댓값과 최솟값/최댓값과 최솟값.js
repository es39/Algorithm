function solution(s) {
    let num = s.split(' ').map(el => Number(el))
    let max = Math.max(...num)
    let min = Math.min(...num)
    let result = min+" "+max
    return result
}