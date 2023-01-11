function solution(my_string) {
    let str = ''
    for(let i=0; i<my_string.length; i++){
        let ch = my_string[i]
        if( ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
            str += ch
        }
    }
    return str
}