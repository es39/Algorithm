function solution(a, b) {
    let result = []
    let min = a;
    let max = b;
    if(b < a){
        min = b;
        max = a;
    }
    for(let i=min; i<=max; i++){
        result.push(i)
    }
    return result.reduce((acc, cur) => acc+cur)
}