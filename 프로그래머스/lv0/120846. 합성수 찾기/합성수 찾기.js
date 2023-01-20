function solution(n) {
    // 1과 자기자신을 제외하고 나눠지는 수가 있는지 찾기
    // 그런 수가 있다면 count를 하든 새로운 배열에 넣든 따로 저장
    let count = 0;
    for(let i=1; i<=n; i++){
        if(isPrime(i)) count ++
    }
    return count;
}

function isPrime(n) {
    for(let i=2; i<n; i++){
        if(n%i === 0) return true
    }
    return false
}