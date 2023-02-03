function solution(i, j, k) {
    // 나누기로 접근?
    return [...Array(j-i+1).fill(0).map((el,idx) => (i+idx)+'').join('')].map(el => Number(el)).filter(el => el === k).length
}