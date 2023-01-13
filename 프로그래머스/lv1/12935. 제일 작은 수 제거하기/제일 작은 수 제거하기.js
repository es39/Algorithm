function solution(arr) {
    let min = Math.min(...arr)
    let result = arr.filter(el => el !== min)
    return result.length === 0 ? [-1] : result
}