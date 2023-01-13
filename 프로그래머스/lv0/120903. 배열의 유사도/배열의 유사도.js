function solution(s1, s2) {
    const result = s1.filter(el => s2.includes(el))
    return result.length
}