function solution(number, limit, power) {
    // 1. number 까지의 각 약수 개수 구하기
    // 2. limit 과 비교해서 넘는 것 찾기
    // 3. 만약 limit 을 넘는다고 하면 power 로 계산 
    // 4. 배열에 담고 reduce 로 누적한 결과 리턴
    let nums = new Array(number+1).fill(0)
    for(let i=1; i<=number; i++) {
        for(let j=i; j<=number; j += i) {
            nums[j] += 1;
        }
    }
    return nums.map(el => {
        if(el > limit) el = power
        return el
    }).reduce((acc, cur) => acc+cur)
}