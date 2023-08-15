function solution(x1, x2, x3, x4) {
    let first = x1 | x2;
    let second = x3 | x4;
    if(first & second === 1) return true
    else return false
}