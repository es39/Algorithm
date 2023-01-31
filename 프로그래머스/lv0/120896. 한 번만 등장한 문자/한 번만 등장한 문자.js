function solution(s) {
    let obj = {}
    let result = []
    let str = s.split('')
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] !== undefined) {
            obj[str[i]] ++;
        } else {
            obj[str[i]] = 1
        }
    }
    for(el in obj){
        if(obj[el] === 1){
            result.push(el)
        }
    }
    return result.sort().join('')
}