function solution(s){
    let str = s.toLowerCase().split('')
    let pCount = 0
    let yCount = 0
    for(let i=0; i<str.length; i++){
        if(str[i] === 'p') pCount ++
        if(str[i] === 'y') yCount ++
    }
    if(pCount === yCount) return true
    return false
}