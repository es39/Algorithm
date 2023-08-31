function solution(n) {
    const result = new Array(n)
    for(let i=0; i<n; i++){
        result[i] = new Array(n).fill(0)
        result[i][i] = 1
    }
    return result
}