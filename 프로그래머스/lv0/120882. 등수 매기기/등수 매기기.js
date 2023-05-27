function solution(score) {
    // 1. 평균 구하기
    // 2. 등수 매기기
    let avg_arr = score.map(el => (el[0]+el[1])/2)
    let sorted = avg_arr.slice().sort((a, b) => b-a);
    return avg_arr.map(el => sorted.indexOf(el)+1)
}