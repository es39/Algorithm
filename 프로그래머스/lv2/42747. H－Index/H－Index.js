function solution(citations) {
    // n = citations.length;
    // h = h번 이상 인용, h편 이상 h번 이하
    // 인용횟수 === h편 이상 인데 최댓값
    let n = citations.sort((a, b) => b-a)
    let h = 0;
    let count = 0;
    for(let i = 0; i <n.length ; i ++) {
        if(n[i] >= i+1 && n[i] >= (n.length - i)) {
            h++;
            continue;
        }
        break;
    }    
    return h;
}