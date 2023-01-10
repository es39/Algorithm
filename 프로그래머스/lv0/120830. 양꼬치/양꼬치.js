function solution(n, k) {
    if(n < 10){
        let total = 12000 * n + 2000 * k
        return total
    } else {
        let total = 12000 * n + 2000 * k - (Math.floor(n/10) * 2000)
        return total
    }
}