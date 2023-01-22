function solution(before, after) {
    let str1 = [...before].sort()
    let str2 = [...after].sort()
    return str1.join('') === str2.join('') ? 1 : 0
}