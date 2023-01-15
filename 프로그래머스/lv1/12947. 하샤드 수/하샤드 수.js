function solution(x) {
    let num = x.toString().split('')
    let result = num.map(el => parseInt(el))
    let sum = result.reduce((acc, cur) => acc+cur)
    for(let j=0; j<result.length; j++){
        if(x%sum !== 0) return false
    }
    return true
}