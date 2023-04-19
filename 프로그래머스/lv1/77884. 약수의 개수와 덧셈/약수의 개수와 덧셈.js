function solution(left, right) {
    // 1. left ~ right 숫자들의 약수의 개수 배열로 구하기
    // 2. reduce 써서 count 가 짝수인 left ~ right 숫자 합 구하기
    let count = 0;
    // left ~ right 가 담긴 배열 만들기
    let nums = [] // left ~ right 안에 있는 숫자 배열
    for(let i=left; i<=right; i++){
        nums.push(i)
    }
    // nums 배열의 요소별로 약수의 개수 구하기
    const count_arr = nums.map((el) => {
        let arr = []
        for(let i=1; i<=el; i++){
            if(el % i === 0) {
                count ++ ;
            }
        }
        arr.push(count)
        count = 0;
        return arr
    })
    const arr = count_arr.reduce((acc, cur) => [...acc, ...cur])
    let even_arr = [];
    let odd_arr = [];
    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0) even_arr.push(nums[i])
        else odd_arr.push(nums[i])
    }
    for(let i=0; i<even_arr.length; i++){
        sum += even_arr[i];
    }
    for(let i=0; i<odd_arr.length; i++){
        sum -= odd_arr[i];
    }
    return sum
}