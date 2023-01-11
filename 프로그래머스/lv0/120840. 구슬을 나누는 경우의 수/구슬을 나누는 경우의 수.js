function solution(balls, share) {
    let result;
    result = factorial(balls) / (factorial(balls-share) * factorial(share))
    return result
}

function factorial(n){
    let fac = 1n
    for(let i=1; i<=n; i++){
         fac *=BigInt(i)
    }
    return fac
}