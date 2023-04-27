function solution(n) {
    // 1. n -> 3진법으로 변환
    // 2. 3진법 뒤집기
    // 3. 3진법 뒤집기 -> 10진법으로 변환
    let result = 0;
    let remains = []
    let r = 0;
    while(n > 0){
        r = n%3;
        remains.push(r)
        n = Math.floor(n/3);
    }
    for(let i=0; i<remains.length; i++){
        remains[i] = remains[i] * Math.pow(3, remains.length-i-1)
    }
    return remains.reduce((acc, cur) => acc+cur)
}