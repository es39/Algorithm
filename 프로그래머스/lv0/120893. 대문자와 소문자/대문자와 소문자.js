function solution(my_string) {
    let str = my_string
    let result = ''
    for(let i=0; i<my_string.length; i++){
        if(str[i].toLowerCase() === my_string[i]){
            result += my_string[i].toUpperCase()
        } else {
            result += my_string[i].toLowerCase()
        }
    }
    return result
}