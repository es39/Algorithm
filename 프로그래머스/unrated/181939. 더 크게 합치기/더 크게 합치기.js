function solution(a, b) {
    let x = String(a)
    let y = String(b)
    return Math.max(Number(x+y), Number(y+x))
}