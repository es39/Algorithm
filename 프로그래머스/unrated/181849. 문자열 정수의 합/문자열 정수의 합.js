function solution(num_str) {
    return num_str.split('').map(el => Number(el)).reduce((acc, cur) => acc+cur)
}