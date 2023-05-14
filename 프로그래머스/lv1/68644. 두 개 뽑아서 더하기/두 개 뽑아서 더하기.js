function solution(numbers) { 
    // 중복제거
    let result = []
    let sorted = numbers.sort((a, b) => a-b)
    for(let i=0; i<sorted.length; i++){
        for(let j=i+1; j<sorted.length; j++){
            if(!result.includes(sorted[i]+sorted[j])) result.push(sorted[i]+sorted[j])
        }
    }
    return result.sort((a, b) => a-b)
}