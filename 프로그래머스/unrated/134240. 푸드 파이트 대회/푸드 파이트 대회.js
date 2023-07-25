function solution(food) {
    // food의 인덱스에 해당하는 요소의 개수로 배열이 들어옴
    // [1, 3, 4, 6] -> 0(물)1개, 1번음식 3개, 2번음식 4개, 3번음식 6개
    // 물을 제외한 음식들이 짝수만큼 사용됨 
    // 음식이 홀수개라면 -1
    // 반 나눠서 계산 후 result += result.reverse()
    const evenFood = []
    let result = ''
    for(let i=0; i<food.length; i++){
        if(food[i] % 2 !== 0) evenFood.push((food[i] - 1)/2)
        else evenFood.push(food[i]/2)
    }
    const evenFoodStr = evenFood.map(el => String(el))
    // 음식 정렬 (반만)
    result += evenFoodStr.map((el, idx) => String(idx).repeat(el))
    result = result.split(',').join('')
    let reversedResult = result.split('').reverse().join('')
    return result + '0' + reversedResult
}