function solution(d, budget) {
    // 1. 오름차순 정렬
    // 2. 하나씩 누적하여 더하면서 예산과 비교하여 최대 지원부서 구하기?
    let sort = d.sort((a, b) => a-b)
    let result = 0
    let money = 0
    for(let i=0; i<sort.length; i++){
        result ++;
        money += sort[i]
        if(money > budget) result --
    }
    return result
}