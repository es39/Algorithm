function solution(n) {
    let num = n.toString().split('').map(el => Number(el))
    return num.reduce((acc, cur) => acc+cur)
}