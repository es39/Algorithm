function solution(numbers, target) {
    // DFS 재귀 사용
    // 모든 숫자가 (+)인 경우를 모두 탐색한 뒤 다음 인덱스의 숫자가 (-)인 경우를 탐색
    let result = 0;
    dfs(0,0)
    function dfs(level, sum) {
        if(level === numbers.length) {
            if(sum === target) {
                result ++
            }
            return
        }
        dfs(level + 1, sum + numbers[level])
        dfs(level + 1, sum - numbers[level])
    }
    return result
}