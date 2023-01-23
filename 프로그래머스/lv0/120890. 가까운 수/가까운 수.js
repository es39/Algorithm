function solution(array, n) {
    // 절댓값 차이가 가장 적은 수 출력하기
    let arr = array.sort((a, b) => a-b)
    // array 의 차이 추출
    let difArr = array.map(el => dif = el-n)
    // 차이를 절댓값으로 변환
    let abs = difArr.map(el => Math.abs(el))
    // 가장 작은 수 인덱스 가져오기
    let min = Math.min(...abs)
    let idx = abs.indexOf(min)
    // array[abs 배열에서 가장 작은 수가 있는 인덱스]
    return array[idx]
}