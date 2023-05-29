function solution(maps) {
    // 길이를 넘어가지 않도록
    let lengthX = maps[0].length;
    let lengthY = maps.length;
    // 상대 진영 위치
    let targetX = maps[0].length-1;
    let targetY = maps.length-1;
    /*
    1. queue에서 하나씩 뺀 후 바운더리 체크와 장애물이 있는지 없는지 체크
    2. 그 후 골에 왔는지 확인하고 맞다면 리턴
    3. 만약에 골이 아니라면 이 곳에는 이미 왔었다는 표시를 하기 위해 맵에 장애물 (0)을 찍어둠
    4. 4방향으로 y 에 1을 더하고 빼고 x을 1을 더하고 뺀, 그리고 스텝에 1을 더 추가한 배열을 큐에        넣음
    */
    const queue = [[0, 0, 1]] // y, x, 움직인 거리
    
    while(queue.length) {
        const [y, x, d] = queue.shift()
        // 범위를 초과했을 경우
        if(y < 0 || y >= lengthY) continue;
        if(x < 0 || x >= lengthX) continue;
        // 이미 지나온 길인 경우
        if(maps[y][x] === 0) continue;
        // 타겟 위치와 일치하는 경우
        if(y === targetY && x === targetX) return d
        
        maps[y][x] = 0
        queue.push([y+1, x, d+1])
        queue.push([y-1, x, d+1])
        queue.push([y, x+1, d+1])
        queue.push([y, x-1, d+1])
    }
    return -1
}