function solution(numbers, direction) {
    if(direction === 'right'){
        let result = [numbers[numbers.length-1]]
        for(let i=0; i<numbers.length-1; i++){
            result.push(numbers[i])
        }
        return result
    } else {
        let result = [numbers[1]]
        for(let i=2; i<numbers.length; i++){
            result.push(numbers[i])
        }
        result.push(numbers[0])
        return result
    }
    
}