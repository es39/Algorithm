// 1. 각 종류별 옷의 개수를 구한다.
// 2. 종류별로 구한 옷의 개수에 1을 더하고(어떠한 옷도 입지 않은 경우), 그 모든 경우의 수를 곱한다.
// 3. 우리가 얻어낸 모든 경우의 수에 어떠한 종류의 옷도 입지 않은 경우 (1가지)를 제외하기 위해 -1
// 4. 결과값 도출
function solution(clothes) {
    // 의상 종류별로 의상의 개수를 저장할 해쉬맵 선언
    const map = new Map();
    
    // clothes 배열을 순회하면서 hashMap에 의상의 종류와 개수를 저장
    for(let i=0; i<clothes.length; i++){
        const clothType = clothes[i][1] // 해쉬맵의 키
        // 해당 옷의 종류가 key로써 해쉬맵에 이미 저장이 되어 있다면, 그 value를 꺼내고,
        // 아직 저장되지 않은 key라면 이제 최초로 저장해야하기 때문에 value로 새 배열을 선언해서 넣어준다.
        const list = map.get(clothType) ?? new Array();
        // 얻어낸 value 배열에 해당 타입의 옷을 넣어준다.
        list.push(clothes[i][0]) // 해쉬맵의 값
        // 방금 업데이트 한 해당 옷 종류의 value를 다시 해쉬맵에 set
        map.set(clothType, list)
    }
    // 해쉬맵을 순회하면서 이 정답에 곱셈을 할거임
    // 0을 곱하면 계속 0이 되기 때문
    let answer = 1;
    for(let key of map.keys()){ // key 를 하나씩 순회
        answer *= map.get(key).length + 1 // value 얻어내서 곱해주기
    }
    return answer-1
}