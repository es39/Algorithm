function solution(my_string) {
    let result = ''
    for(let i=0; i<my_string.length; i++){
        result += my_string[my_string.length-i-1]
    }
    return result
}