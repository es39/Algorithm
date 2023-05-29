function solution(priorities, location) {
    // 우선순위 먼저 파악하기
    let max = Math.max(...priorities);
    let position = [];
    let result = 0;
    for(let i=0; i<priorities.length; i++){
        position.push(i);
    }
    while(position.length !== 0) {
        if(priorities[0] < max) {
            priorities.push(priorities.shift());
            position.push(position.shift());
        } else {
            result ++;
            priorities.shift()
            if(position.shift() === location) return result
            max = Math.max(...priorities);
        }
    }
}