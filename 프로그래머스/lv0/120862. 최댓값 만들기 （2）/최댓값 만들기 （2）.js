function solution(numbers) {
    //양수일 때, 음수일 때를 구분
    let nums = numbers.sort((a, b) => a-b)
    let mul1 = nums[0] * nums[1]
    let mul2 = nums[nums.length-2]*nums[nums.length-1]
    if(mul1 > mul2) return mul1
    else return mul2
}