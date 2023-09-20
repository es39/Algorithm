function solution(myStr) {
    const result = myStr.split('a').join('-').split('b').join('-').split('c').join('-').split('-').filter(el => el.length !== 0)
    return result.length === 0 ? ['EMPTY'] : result
}