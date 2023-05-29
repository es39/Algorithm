function solution(priorities, location) {
    // 우선순위 먼저 파악하기
    let max = Math.max(...priorities);
    // 위치 (index)
    let position = [];
    // return 값
    let result = 0;
    
    // 위치 저장
    for(let i=0; i<priorities.length; i++){
        position.push(i);
    } // [0, 1, 2, 3]
    // 우선순위 판별
    while(position.length !== 0) {
        if(priorities[0] < max) {
            // 뒤로 밀기
            priorities.push(priorities.shift()); // [1, 3, 2, 2]
            position.push(position.shift()); // [1, 2, 3, 0]
        } else { 
            result ++;
            priorities.shift() // [3, 2, 2, 1]
            if(position.shift() === location) return result 
            max = Math.max(...priorities);
        }
    }
}