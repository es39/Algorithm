function solution(n) {
    const fibo = [0, 1]
    for(let i=2; i<=n; i++){
        const n1 = fibo[i-1]
        const n2 = fibo[i-2]
        fibo.push((n1+n2)%1234567)
    }
    return fibo[n]
}
