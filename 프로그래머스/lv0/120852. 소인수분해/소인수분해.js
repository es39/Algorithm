function solution(n) {
    // 결과 배열 선언
    let prime = []
    for(let i=2; i<=n; i++){
        while(n%i === 0){
            prime.push(i)
            n /= i;
        }
    }
    if(n >= 2) prime.push(n)
    let arr = Array.from(new Set(prime))
    return arr.sort((a, b) => a-b)
}