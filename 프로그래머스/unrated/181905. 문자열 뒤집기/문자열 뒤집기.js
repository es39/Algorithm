function solution(my_string, s, e) {
    // 1. s~e 까지 범위에 해당하는 문자열 자르기
    // 2. reverse()
    // 3. concat()
    let str_slice = my_string.slice(s, e+1).split('').reverse().join('')
    return my_string.slice(0, s).concat(str_slice.concat(my_string.slice(e+1)))
}