function solution(n,a,b) {
    // n : 참가자 수
    // 다음 라운드 번호 N/2
    let result = 0;
    while(a !== b) {
        a = Math.round(a/2)
        b = Math.round(b/2)
        result ++
    }
    return result
}