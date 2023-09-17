function solution(myString, pat) {
    let result = ''
    for(let i=0; i<myString.length; i++){
        if(myString[i] === 'A') result += 'B'
        else result += 'A'
    }
    if(result.includes(pat)) return 1
    else return 0
}