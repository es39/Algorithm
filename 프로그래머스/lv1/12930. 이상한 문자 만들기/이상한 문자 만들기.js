function solution(s) {
    // 공백기준으로 나누기
    let strArr = s.split(' ').map(el => {
        let str = ''
        for(let i=0; i<el.length; i++){
            if(i % 2 === 0) {
                str += el[i].toUpperCase()
            } else str += el[i].toLowerCase()
        }
        return str;
    })
    return strArr.join(' ')
}