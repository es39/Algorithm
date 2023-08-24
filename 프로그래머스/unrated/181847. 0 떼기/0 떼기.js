function solution(n_str) {
    // 최초 0이 아닌 숫자가 나오는 인덱스 구하기
    // 그 인덱스 전까지 0 자르기
    let idx = 0;
    for(let i=0; i<n_str.length; i++){
        if(n_str[i] !== '0') {
            idx = i;
            break;
        }
    }
    return n_str.slice(idx)
}