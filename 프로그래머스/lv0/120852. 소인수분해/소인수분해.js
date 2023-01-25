function solution(n) {
    // 결과 배열 선언
    let prime = []
    // 반복문을 통해 소수 판별
    for(let i=2; i<=Math.sqrt(n); i++){
        while(n%i === 0){
            prime.push(i)
            n /= i;
        }
    }
    // 최종적으로 나온 몫도 인수로 포함되기 때문에 push
    if(n >= 2) prime.push(n)
    // set 객체를 이용해 중복을 제거한 후 얕은 복사
    let arr = Array.from(new Set(prime))
    // 오름차순 정렬
    return arr.sort((a, b) => a-b)
}