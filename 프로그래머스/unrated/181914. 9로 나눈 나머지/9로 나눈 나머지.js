function solution(number) {
    let sum = number.split('').map(el => Number(el)).reduce((acc, cur) => acc+cur)
    return sum%9
}