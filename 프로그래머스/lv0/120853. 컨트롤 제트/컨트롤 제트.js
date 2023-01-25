function solution(s) {
    let str = s.split(' ')
    while(str.includes('Z')){
        str.splice(str.indexOf('Z')-1, 2)
    }
    return str.reduce((acc, cur) => Number(acc)+Number(cur), 0)
}