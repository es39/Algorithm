// 다리에 트럭을 진입시킬 수 있는 조건 (무게기준 && 길이기준)
// 1. 무게 기준
// * 다리에 있는 트럭의 총 무게 + 맨 앞에서 대기하고 있는 트럭의 무게 = 총 무게 합
// 총 무게 합 <= 다리가 견딜 수 있는 무게(weight)
// 2. 길이 기준
// * 다리에 올라갈 수 있는 트럭의 개수 <= 다리 길이(bridge_length)

// Action (다리에 트럭을 진입시킨다)
// 1. 다리에 트럭을 진입시킴 (대기트럭에서 트럭을 제거)
// 2. 길이 기준으로는 남은 길이를 다리의 길이로 업데이트
// 3. 무게 기준으로는 총 무게인 weight에 (방금 진입시켜준) 트럭의 무게를 더해줌
function solution(bridge_length, weight, truck_weights) {
    // 다리를 건너는 트럭의 무게와 트럭의 위치를 저장하는 Queue
    let bridge = []; 
    // 다리 위의 트럭의 무게를 저장할 변수
    let total_weight = 0;
    let time = 0;
    // 모든 트럭이 큐에서 나올 때까지 반복
    while(bridge.length > 0 || truck_weights.length > 0){
        time ++;
        // 다리 위에 트럭이 있다면 그 트럭들의 위치를 시간에 맞춰 다 1씩 (거리를) 증가
        // 다리 위에 있는 트럭 위치 증가
        for(let i=0; i< bridge.length; i++){
            bridge[i][1] ++ ;
        }
        
        // 큐의 첫번째에 있는 트럭이 다리 끝에 도달했다면 -> 다리에서 트럭을 내려야 함
        if(bridge[0] && bridge[0][1] === bridge_length){
            const truck = bridge.shift();
            total_weight -= truck[0]
        }
        
        
        // 대기 중인 트럭이 있고, 다리에 트럭을 진입시킬 조건이 충족됐을 경우 -> 다리에 트럭 올리기
        if(truck_weights.length > 0 && 
           total_weight + truck_weights[0] <= weight && 
           bridge.length < bridge_length){
            // 다리에 트럭 진입시키기
            let truck_weight = truck_weights.shift();
            bridge.push([truck_weight, 0])
            total_weight += truck_weight;
        }
    }
    
    
    
    return time;
}