function solution(n,a,b) {
    // n : 참가자 수
    let result = 0;
    while(a !== b) {
        a = Math.round(a/2)
        b = Math.round(b/2)
        result ++;
    }
    return result
}