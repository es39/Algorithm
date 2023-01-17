function solution(my_string) {
    let result = 0;
    let arr = [...my_string].map(el => isNaN(el) ? 0 : result += parseInt(el))
    return result
}