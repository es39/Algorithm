function solution(my_string, alp) {
    let result = ''
    my_string = my_string.split('')
    for(let i=0; i<my_string.length; i++){
        let key = my_string[i]
        if(my_string[i] === alp) key = my_string[i].toUpperCase()
        result += key
    }
    return result
}