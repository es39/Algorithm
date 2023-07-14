function solution(X, Y) {
    // 숫자로 변환
    // 두 수에서 공통으로 나타나는 숫자 찾기
    // 숫자 내림차순 배열 후 합치기
    // 공통으로 나타나는 숫자가 없으면 -1
    let common = []
    let result = ''
    let xNumber = X.split('')
    let yNumber = Y.split('')
    for(let i=0; i<10; i++){
        const xCommonNum = xNumber.filter(n => Number(n) === i).length
        const yCommonNum = yNumber.filter(n => Number(n) === i).length
        result += String(i).repeat(Math.min(xCommonNum, yCommonNum))
    }
    if(result === '') return "-1"
    else if(Number(result) === 0) return '0'
    return result.split('').map(el => Number(el)).sort((a, b) => b-a).join('')
}