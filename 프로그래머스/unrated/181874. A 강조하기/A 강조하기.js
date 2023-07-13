function solution(myString) {
    let result = ''
    for(let i=0; i<myString.length; i++){
        if(myString[i] === 'a' || myString[i] === 'A') result += myString[i].toUpperCase()
        else result += myString[i].toLowerCase()
    }
    return result
}