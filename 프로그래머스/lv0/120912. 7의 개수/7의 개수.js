function solution(array) {
    return array.map(el => el+'').join('').split('').filter(el => Number(el) === 7).length
}