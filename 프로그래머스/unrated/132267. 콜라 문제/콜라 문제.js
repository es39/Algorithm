function solution(a, b, n) {
    const getCoke = (bottleCoke, exchangedCoke, a, b) => {
        if(bottleCoke / a < 1) return exchangedCoke
        const newCoke = Math.floor(bottleCoke/a) * b
        const remainedCoke = bottleCoke % a
        return getCoke(newCoke+remainedCoke, exchangedCoke+newCoke, a, b)
    }
    const result = getCoke(n, 0, a, b)
    return result
}