function solution(numer1, denom1, numer2, denom2) {
    const answer = []
    let son = numer1 * denom2 + numer2 * denom1;
    let mom = denom1 * denom2
    let min = 0;
    let max = 0;
    let gcd = 1;
    if(son < mom){
        max = mom
        min = son
    } else {
        max = son
        min = mom
    }
    // gcd
    for(let i=1; i<=max; i++){
        if(son%i === 0 && mom%i===0){
            gcd = i
        } 
    }
    son = son/gcd
    mom = mom/gcd
    answer.push(son)
    answer.push(mom)
    return answer;
}